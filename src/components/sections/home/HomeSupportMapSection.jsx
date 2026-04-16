import worldMapImage from "../../../assets/images/world-map.webp";

const mapDots = [
  { key: "dot1", label: "Hyderabad, India", className: "mappingpoint-dot1" },
  { key: "dot2", label: "United Kingdom", className: "mappingpoint-dot2" },
  { key: "dot3", label: "China", className: "mappingpoint-dot3" },
  { key: "dot4", label: "Italy", className: "mappingpoint-dot4" },
  { key: "dot5", label: "Canada", className: "mappingpoint-dot5" },
  { key: "dot6", label: "Dubai, UAE", className: "mappingpoint-dot6" },
  { key: "dot7", label: "Germany", className: "mappingpoint-dot7" },
];

function HomeSupportMapSection() {
  return (
    <div className="mappingpoint-section">
      <div className="mappingpoint-text">
        <h2>Our Support</h2>
        <p>Serving numerous countries with pre-sales and after-sales technical support</p>
      </div>

      <div className="mappingpoint-container">
        <img src={worldMapImage} alt="World Map" className="mappingpoint-image" />
        {mapDots.map((dot) => (
          <div key={dot.key} className={`mappingpoint-dot ${dot.className}`} data-country={dot.label}>
            <div className="mappingpoint-inner-dot" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeSupportMapSection;
