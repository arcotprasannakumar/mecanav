import { useMemo, useState } from "react";

const animationImageModules = import.meta.glob("../../../assets/images/animationcode/*.webp", {
  eager: true,
  import: "default",
});

const animationImageMap = Object.fromEntries(
  Object.entries(animationImageModules).map(([path, source]) => [
    path.split("/").pop()?.replace(".webp", ""),
    source,
  ]),
);

const controllerItems = [
  { id: "toggle0", stateIndex: 0, icon: "🎡", label: "Ferris Wheel Lighting" },
  { id: "toggle1", stateIndex: 1, icon: "⛲", label: "Fountain Lighting" },
  { id: "toggle5", stateIndex: 5, icon: "🏛️", label: "Architecture Lighting" },
  { id: "toggle4", stateIndex: 4, icon: "🏊", label: "Pool Lighting" },
  { id: "toggle2", stateIndex: 2, icon: "🌉", label: "Bridge Lighting" },
  { id: "toggle3", stateIndex: 3, icon: "🌳", label: "Park Lighting" },
];

function HomeLegacyControllerSection() {
  const [controllerState, setControllerState] = useState([0, 0, 0, 0, 0, 0]);

  const controllerImage = useMemo(() => {
    const key = controllerState.join("");
    return animationImageMap[key] ?? animationImageMap["000000"];
  }, [controllerState]);

  const toggleController = (index) => {
    setControllerState((current) =>
      current.map((item, itemIndex) => (itemIndex === index ? (item ? 0 : 1) : item)),
    );
  };

  return (
    <div className="legacy-controller-wrap">
      <div className="sidebar">
        {controllerItems.map((item) => (
          <div className="toggle-group" key={item.id}>
            <label htmlFor={item.id} className="toggle-label">
              <span className="toggle-icon" aria-hidden="true">{item.icon}</span>
              <span>{item.label}</span>
            </label>
            <label className="switch" aria-label={`Toggle ${item.label}`}>
              <input
                type="checkbox"
                id={item.id}
                checked={Boolean(controllerState[item.stateIndex])}
                onChange={() => toggleController(item.stateIndex)}
              />
              <span className="slider" />
            </label>
          </div>
        ))}

        <div className="control-buttons">
          <button type="button" className="control-btn on-btn" onClick={() => setControllerState([1, 1, 1, 1, 1, 1])}>
            <span aria-hidden="true">🔆</span>
            <span>All ON</span>
          </button>
          <button type="button" className="control-btn off-btn" onClick={() => setControllerState([0, 0, 0, 0, 0, 0])}>
            <span aria-hidden="true">🌑</span>
            <span>All OFF</span>
          </button>
        </div>
      </div>

      <div className="main-content">
        <img id="display" src={controllerImage} alt="Lighting View" />
      </div>
    </div>
  );
}

export default HomeLegacyControllerSection;
