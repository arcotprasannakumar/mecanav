import { Link, useNavigate } from "react-router-dom";
import wheelCover from "../../../assets/images/covers/wheel.webp";
import barCover from "../../../assets/images/covers/bar.webp";
import neonCover from "../../../assets/images/covers/neon.webp";
import panelCover from "../../../assets/images/covers/15.webp";

const homeCatalogueCards = [
  { to: "/catalogues/catalogues1-1", image: wheelCover, alt: "Ferris Wheel Catalogue Cover" },
  { to: "/catalogues/catalogues1-2", image: barCover, alt: "Pixel LED Bars Catalogue Cover" },
  { to: "/catalogues/catalogues1-3", image: neonCover, alt: "Neon Flex Catalogue Cover" },
  { to: "/catalogues/catalogues1-4", image: panelCover, alt: "Pixel LED Panel Catalogue Cover" },
];

function HomeLegacyCataloguesSection() {
  const navigate = useNavigate();

  return (
    <section className="bookcats-section">
      <h2 className="bookcats-title text-lg">Catalogues</h2>

      <div className="bookcats-wrapper show" id="bookcatsWrapper">
        {homeCatalogueCards.map((item) => (
          <Link key={item.to} to={item.to}>
            <div className="bookcats-item">
              <img src={item.image} alt={item.alt} />
            </div>
          </Link>
        ))}
      </div>

      <button
        type="button"
        className="bookcats-btn mt-4"
        onClick={() => navigate("/catalogues")}
      >
        View More
      </button>
    </section>
  );
}

export default HomeLegacyCataloguesSection;
