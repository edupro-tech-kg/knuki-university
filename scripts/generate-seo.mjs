import fs from "node:fs";
import path from "node:path";

const repoRoot = path.resolve(process.cwd());
const publicDir = path.join(repoRoot, "public");

function readDotEnv(filepath) {
  if (!fs.existsSync(filepath)) return {};
  const out = {};
  const lines = fs.readFileSync(filepath, "utf8").split(/\r?\n/);
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const idx = trimmed.indexOf("=");
    if (idx === -1) continue;
    const key = trimmed.slice(0, idx).trim();
    let value = trimmed.slice(idx + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    out[key] = value;
  }
  return out;
}

function resolveBaseUrl() {
  const explicit = process.env.VITE_SITE_URL || process.env.SITE_URL || "";
  if (explicit) return explicit.replace(/\/+$/, "");

  // Local builds: Node doesn't auto-load Vite .env files; read them ourselves.
  const envProduction = readDotEnv(path.join(repoRoot, ".env.production"));
  const envBase = readDotEnv(path.join(repoRoot, ".env"));
  const fromFiles =
    envProduction.VITE_SITE_URL ||
    envProduction.SITE_URL ||
    envBase.VITE_SITE_URL ||
    envBase.SITE_URL ||
    "";
  if (fromFiles) return fromFiles.replace(/\/+$/, "");

  const vercelUrl = process.env.VERCEL_URL || "";
  if (vercelUrl) return `https://${vercelUrl.replace(/\/+$/, "")}`;

  const netlifyUrl = process.env.URL || "";
  if (netlifyUrl) return netlifyUrl.replace(/\/+$/, "");

  console.warn(
    "[generate-seo] Missing VITE_SITE_URL/SITE_URL. Falling back to https://www.knuki.kg for generated files."
  );
  return "https://www.knuki.kg";
}

const baseUrl = resolveBaseUrl();

function readFacultySlugs() {
  const facultiesPath = path.join(repoRoot, "src", "data", "faculties.js");
  if (!fs.existsSync(facultiesPath)) return [];
  const text = fs.readFileSync(facultiesPath, "utf8");
  const matches = [...text.matchAll(/slug:\s*"([^"]+)"/g)];
  return [...new Set(matches.map((m) => m[1]))];
}

function writeRobotsTxt() {
  const robots = `User-agent: *\nAllow: /\n\nSitemap: ${baseUrl}/sitemap.xml\n`;
  fs.mkdirSync(publicDir, { recursive: true });
  fs.writeFileSync(path.join(publicDir, "robots.txt"), robots, "utf8");
}

function writeSitemapXml() {
  const lastmod = new Date().toISOString().slice(0, 10);
  const slugs = readFacultySlugs();

  const routes = [
    "/",
    "/history",
    "/news",
    "/studentsLife",
    "/library",
    "/practice-career",
    ...slugs.map((slug) => `/faculty/${slug}`),
  ];

  const urls = routes
    .map((route) => {
      const loc = `${baseUrl}${route}`;
      return [
        "  <url>",
        `    <loc>${loc}</loc>`,
        `    <lastmod>${lastmod}</lastmod>`,
        "    <changefreq>weekly</changefreq>",
        "    <priority>0.7</priority>",
        "  </url>",
      ].join("\n");
    })
    .join("\n");

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    urls,
    "</urlset>",
    "",
  ].join("\n");

  fs.mkdirSync(publicDir, { recursive: true });
  fs.writeFileSync(path.join(publicDir, "sitemap.xml"), xml, "utf8");
}

writeRobotsTxt();
writeSitemapXml();
