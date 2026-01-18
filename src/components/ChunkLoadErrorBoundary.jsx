import React from "react";

const RELOAD_MARKER_KEY = "knuki:chunk-load-reload";

function isLikelyChunkLoadError(error) {
  const message = String(error?.message || error || "");
  return (
    message.includes("Failed to fetch dynamically imported module") ||
    message.includes("Importing a module script failed") ||
    message.includes("Expected a JavaScript module script") ||
    message.includes("ChunkLoadError") ||
    message.includes("Loading chunk")
  );
}

export default class ChunkLoadErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error) {
    if (!isLikelyChunkLoadError(error)) return;

    try {
      const alreadyReloaded = sessionStorage.getItem(RELOAD_MARKER_KEY) === "1";
      if (!alreadyReloaded) {
        sessionStorage.setItem(RELOAD_MARKER_KEY, "1");
        window.location.reload();
      }
    } catch {
      // If sessionStorage is blocked, just render fallback UI.
    }
  }

  render() {
    if (!this.state.error) return this.props.children;

    return (
      <main className="flex-1 flex items-center justify-center px-4">
        <div className="max-w-md text-center">
          <h1 className="text-xl font-semibold">Барак жүктөлбөй калды</h1>
          <p className="mt-2 text-sm text-gray-600">
            Сайт жаңыртылган болушу мүмкүн. Баракты кайра жүктөп көрүңүз.
          </p>
          <button
            type="button"
            className="mt-4 inline-flex items-center justify-center rounded-md bg-[#751715] px-4 py-2 text-white"
            onClick={() => window.location.reload()}
          >
            Кайра жүктөө
          </button>
        </div>
      </main>
    );
  }
}

