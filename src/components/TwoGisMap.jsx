import { useEffect, useRef, useState } from "react";

/**
 * 2GIS Map via Maps API 2.0 (DG)
 * - No iframe (works even when 2gis.kg blocks iframe)
 * - Loads loader.js once
 * - Renders map into a div
 */
function load2GisScript() {
  return new Promise((resolve, reject) => {
    if (window.DG && typeof window.DG.then === "function") {
      resolve();
      return;
    }

    // Prevent duplicate loads
    const existing = document.querySelector('script[data-2gis-loader="true"]');
    if (existing) {
      existing.addEventListener("load", () => resolve());
      existing.addEventListener("error", () => reject(new Error("2GIS script load error")));
      return;
    }

    const script = document.createElement("script");
    script.src = "https://maps.api.2gis.ru/2.0/loader.js?pkg=full";
    script.async = true;
    script.defer = true;
    script.dataset["2gisLoader"] = "true";
    script.setAttribute("data-2gis-loader", "true");

    script.onload = () => resolve();
    script.onerror = () => reject(new Error("2GIS script load error"));

    document.head.appendChild(script);
  });
}

export default function TwoGisMap({
  lat = 42.845696,
  lon = 74.614825,
  zoom = 18,
  markerText = "Жантошева көч. 113",
  className = "w-full h-[380px]",
}) {
  const rootRef = useRef(null);
  const mapRef = useRef(null);
  const markerRef = useRef(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function init() {
      try {
        await load2GisScript();
        if (cancelled) return;

        // DG.then ensures API is fully ready
        window.DG.then(() => {
          if (cancelled || !rootRef.current) return;

          // If re-init happens, cleanup old map
          if (mapRef.current) {
            try {
              mapRef.current.remove();
            } catch {}
            mapRef.current = null;
          }

          const map = window.DG.map(rootRef.current, {
            center: [lat, lon],
            zoom,
          });

          const marker = window.DG.marker([lat, lon]).addTo(map);
          if (markerText) marker.bindPopup(markerText);

          mapRef.current = map;
          markerRef.current = marker;
        });
      } catch (e) {
        if (!cancelled) setFailed(true);
      }
    }

    init();

    return () => {
      cancelled = true;
      if (mapRef.current) {
        try {
          mapRef.current.remove();
        } catch {}
        mapRef.current = null;
      }
      markerRef.current = null;
    };
  }, [lat, lon, zoom, markerText]);

  if (failed) {
    // optional fallback: google embed or message
    return (
      <div className="w-full">
        <div className="text-sm text-gray-600 p-4">
          2GIS карта жүктөлбөй калды. Төмөнкү Google карта колдонулууда.
        </div>

        <iframe
          title="Google Map fallback"
          src={`https://www.google.com/maps?q=${lat},${lon}&output=embed`}
          className={className}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
    );
  }

  return <div ref={rootRef} className={className} />;
}
