import { useEffect, useRef, useState } from "react";
import lightOnBase from "../../../assets/images/animatedimages/withoutlightsss.webp";
import lightOnTop from "../../../assets/images/animatedimages/bridgeanimya.webp";

function HomeLegacyLightCompareSection() {
  const [splitX, setSplitX] = useState(50);
  const [dragging, setDragging] = useState(false);
  const lightCompareRef = useRef(null);

  useEffect(() => {
    const onMove = (event) => {
      if (!dragging) {
        return;
      }

      const compareElement = lightCompareRef.current;
      if (!compareElement) {
        return;
      }

      const clientX = "touches" in event ? event.touches[0].clientX : event.clientX;
      const bounds = compareElement.getBoundingClientRect();
      const next = Math.max(0, Math.min(((clientX - bounds.left) / bounds.width) * 100, 100));
      setSplitX(next);
    };

    const stopDrag = () => setDragging(false);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("touchmove", onMove);
    window.addEventListener("mouseup", stopDrag);
    window.addEventListener("touchend", stopDrag);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("touchmove", onMove);
      window.removeEventListener("mouseup", stopDrag);
      window.removeEventListener("touchend", stopDrag);
    };
  }, [dragging]);

  return (
    <section ref={lightCompareRef} className="lightoffandon-container mt-0 mb-0 bg-white">
      <img
        src={lightOnBase}
        className="lightoffandon-image on"
        alt="Without light"
      />

      <img
        src={lightOnTop}
        className="lightoffandon-image off"
        id="lightoffandon-off"
        alt="With light"
        style={{ clipPath: `inset(0 ${100 - splitX}% 0 0)` }}
      />

      <div
        className="lightoffandon-divider"
        id="lightoffandon-divider"
        style={{ left: `${splitX}%` }}
        onMouseDown={(event) => {
          event.preventDefault();
          setDragging(true);
        }}
        onTouchStart={(event) => {
          event.preventDefault();
          setDragging(true);
        }}
      >
        <div className="lightoffandon-buttons">
          <span className="left">&lt;</span>
          <span className="right">&gt;</span>
        </div>

        <span
          className={`light-text${dragging ? " show" : ""}`}
          id="light-text"
          style={{ left: `${splitX / 2}%` }}
        >
          {"Light On".split("").map((letter, index) => (
            <span key={`${letter}-${index}`}>
              {letter === " " ? "\u00A0" : letter}
            </span>
          ))}
        </span>
      </div>
    </section>
  );
}

export default HomeLegacyLightCompareSection;
