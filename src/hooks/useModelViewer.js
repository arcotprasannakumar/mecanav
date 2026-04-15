import { useEffect } from "react";

const MODEL_VIEWER_SCRIPT_ID = "google-model-viewer-script";

function useModelViewer() {
  useEffect(() => {
    if (customElements.get("model-viewer")) {
      return undefined;
    }

    const existingScript = document.getElementById(MODEL_VIEWER_SCRIPT_ID);
    if (existingScript) {
      return undefined;
    }

    const script = document.createElement("script");
    script.id = MODEL_VIEWER_SCRIPT_ID;
    script.type = "module";
    script.src = "https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js";
    document.head.appendChild(script);

    return () => {
      if (script.parentNode && !customElements.get("model-viewer")) {
        script.remove();
      }
    };
  }, []);
}

export default useModelViewer;
