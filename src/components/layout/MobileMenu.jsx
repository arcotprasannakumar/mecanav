import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

const products = [
  { label: "Pixel LED Strip", to: "/products/category/pixel-led-strip" },
  { label: "Neon flex LED", to: "/products/category/neon-flex-led" },
  { label: "Pixel LED bars", to: "/products/category/pixel-led-bars" },
  { label: "Pixel LED panel", to: "/products/category/pixel-led-panel" },
  { label: "Pixel dot lights", to: "/products/category/pixel-dot-lights" },
  { label: "Wall Washers lights", to: "/products/category/wall-washers-lights" },
  { label: "Pillar highlighters", to: "/products/category/pillar-highlighters" },
  { label: "Fan Projection Lights", to: "/products/category/fan-projection-lights" },
  { label: "Wall window lights", to: "/products/category/wall-window-lights" },
  { label: "Gobo lights", to: "/products/category/gobo-lights" },
  { label: "Pool lights", to: "/products/category/pool-lights" },
  { label: "Fountain lights", to: "/products/category/fountain-lights" },
  { label: "Recessed ground lights", to: "/products/category/recessed-ground-lights" },
  { label: "Tree highlighters", to: "/products/category/tree-highlighters" },
  { label: "Flood lights", to: "/products/category/flood-lights" },
  { label: "DMX controllers", to: "/products/category/dmx-controllers" },
  { label: "Drivers", to: "/products/category/drivers" },
];

const services = [
  { label: "Catalogues", to: "/catalogues" },
  { label: "Downloads", to: "/downloads" },
  { label: "Solutions", to: "/solutions" },
  { label: "Projects", to: "/projects" },
];

function MobileMenu({ isOpen, onClose }) {
  const [openProducts, setOpenProducts] = useState(false);
  const [openServices, setOpenServices] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setOpenProducts(false);
      setOpenServices(false);
    }
  }, [isOpen]);

  return (
    <div className="sidebar-menu-wrapper">
      <div className={`sidebar-menu${isOpen ? " active" : ""}`} id="sidebar-menu">
        <button className="close-btn" aria-label="Close" onClick={onClose}>
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#fff" viewBox="0 0 24 24">
            <path d="M18.3 5.71a1 1 0 0 0-1.41 0L12 10.59 7.11 5.7a1 1 0 1 0-1.41 1.41L10.59 12l-4.89 4.89a1 1 0 1 0 1.41 1.41L12 13.41l4.89 4.89a1 1 0 0 0 1.41-1.41L13.41 12l4.89-4.89a1 1 0 0 0 0-1.4z" />
          </svg>
        </button>

        <div id="menu-list" className="menu-list ul-li-block clearfix">
          <ul className="clearfix">
            <li>
              <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")} onClick={onClose}>
                HOME
              </NavLink>
            </li>

            <li>
              <NavLink to="/about" onClick={onClose}>ABOUT US</NavLink>
            </li>

            <li className={`menu-item-has-child${openProducts ? " open" : ""}`}>
              <button
                type="button"
                onClick={() => {
                  setOpenProducts((current) => !current);
                  setOpenServices(false);
                }}
                aria-expanded={openProducts}
              >
                PRODUCTS <span className="dropdown-icon" />
              </button>
              <ul className="submenu">
                {products.map((item) => (
                  <li key={item.label}>
                    <NavLink to={item.to} onClick={onClose}>{item.label}</NavLink>
                  </li>
                ))}
              </ul>
            </li>

            <li>
              <NavLink to="/applications" onClick={onClose}>APPLICATIONS</NavLink>
            </li>

            <li className={`menu-item-has-child${openServices ? " open" : ""}`}>
              <button
                type="button"
                onClick={() => {
                  setOpenServices((current) => !current);
                  setOpenProducts(false);
                }}
                aria-expanded={openServices}
              >
                SERVICES <span className="dropdown-icon" />
              </button>
              <ul className="submenu">
                {services.map((item) => (
                  <li key={item.label}>
                    <NavLink to={item.to} onClick={onClose}>{item.label}</NavLink>
                  </li>
                ))}
              </ul>
            </li>

            <li>
              <NavLink to="/downloads" onClick={onClose}>DOWNLOADS</NavLink>
            </li>

            <li>
              <NavLink to="/contact" onClick={onClose}>CONTACT US</NavLink>
            </li>

            <li>
              <a href="#footer-contact" onClick={onClose}>LOCATE US</a>
            </li>
          </ul>
        </div>
      </div>

      <div className={`overlay${isOpen ? " active" : ""}`} onClick={onClose} aria-hidden="true" />

    </div>
  );
}

export default MobileMenu;
