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
        <div className="toggle-group">
          <label htmlFor="toggle0">Ferris Wheel Lighting</label>
          <label className="switch">
            <input type="checkbox" id="toggle0" checked={Boolean(controllerState[0])} onChange={() => toggleController(0)} />
            <span className="slider" />
          </label>
        </div>

        <div className="toggle-group">
          <label htmlFor="toggle1">Fountain Lighting</label>
          <label className="switch">
            <input type="checkbox" id="toggle1" checked={Boolean(controllerState[1])} onChange={() => toggleController(1)} />
            <span className="slider" />
          </label>
        </div>

        <div className="toggle-group">
          <label htmlFor="toggle5">Architectural Lighting</label>
          <label className="switch">
            <input type="checkbox" id="toggle5" checked={Boolean(controllerState[5])} onChange={() => toggleController(5)} />
            <span className="slider" />
          </label>
        </div>

        <div className="toggle-group">
          <label htmlFor="toggle4">Pool Lighting</label>
          <label className="switch">
            <input type="checkbox" id="toggle4" checked={Boolean(controllerState[4])} onChange={() => toggleController(4)} />
            <span className="slider" />
          </label>
        </div>

        <div className="toggle-group">
          <label htmlFor="toggle2">Bridge Lighting</label>
          <label className="switch">
            <input type="checkbox" id="toggle2" checked={Boolean(controllerState[2])} onChange={() => toggleController(2)} />
            <span className="slider" />
          </label>
        </div>

        <div className="toggle-group">
          <label htmlFor="toggle3">Park Lighting</label>
          <label className="switch">
            <input type="checkbox" id="toggle3" checked={Boolean(controllerState[3])} onChange={() => toggleController(3)} />
            <span className="slider" />
          </label>
        </div>

        <div className="control-buttons">
          <button type="button" className="control-btn on-btn" onClick={() => setControllerState([1, 1, 1, 1, 1, 1])}>All ON</button>
          <button type="button" className="control-btn off-btn" onClick={() => setControllerState([0, 0, 0, 0, 0, 0])}>All OFF</button>
        </div>
      </div>

      <div className="main-content">
        <img id="display" src={controllerImage} alt="Lighting View" />
      </div>
    </div>
  );
}

export default HomeLegacyControllerSection;
