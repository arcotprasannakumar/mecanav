import { NavLink } from "react-router-dom";
import navigation from "../../data/navigation";

const footerApplications = [
  { label: "Bridge Lighting", to: "/applications/bridge-lighting" },
  { label: "Park Lighting", to: "/applications/park-lighting" },
  { label: "Architectural Lighting", to: "/applications/architectural-lighting" },
  { label: "River Lighting", to: "/applications/river-lighting" },
  { label: "Ferris Wheel Lighting", to: "/applications/ferris-wheel-lighting" },
  { label: "Signs and Logos", to: "/applications/signs-and-logos" },
  { label: "Outdoor Media Facade", to: "/applications/outdoor-media-facade" },
  { label: "Street Lighting", to: "/applications/street-lighting" },
  { label: "Pub Lighting", to: "/applications/pub-lighting" },
  { label: "Studio Lighting", to: "/applications/studio-lighting" },
  { label: "Stage Lighting", to: "/applications/stage-lighting" },
  { label: "Light Shows", to: "/applications/light-shows" },
];

const services = [
  { label: "Catalogues", to: "/catalogues" },
  { label: "Downloads", to: "/downloads" },
  { label: "Solutions", to: "/solutions" },
  { label: "Projects", to: "/projects" },
];

function Footer() {
  const { footer } = navigation;

  return (
    <footer id="footer-section" className="footer-section sec-ptb-10 clearfix" style={{ backgroundColor: "rgb(30, 32, 35)" }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12">
            <div className="useful-links ul-li-block">
              <ul className="clearfix">
                <h5>Quick Links</h5>
                <li><NavLink to="/">HOME</NavLink></li>
                <li><NavLink to="/about">ABOUT US</NavLink></li>
                <li><NavLink to="/products">PRODUCTS</NavLink></li>
                <li><NavLink to="/applications">APPLICATIONS</NavLink></li>
                <li><span>SERVICES</span></li>
                <li><NavLink to="/contact">CONTACT US</NavLink></li>
              </ul>
            </div>
          </div>

          <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12">
            <div className="useful-links ul-li-block clearfix">
              <ul className="clearfix">
                <h5>Products</h5>
                {footer.products.map((item) => (
                  <li key={item.label}><NavLink to={item.to}>{item.label}</NavLink></li>
                ))}
              </ul>
            </div>
          </div>

          <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12">
            <div className="useful-links ul-li-block clearfix">
              <ul className="clearfix">
                <h5>Applications</h5>
                {footerApplications.map((item) => (
                  <li key={item.label}><NavLink to={item.to}>{item.label}</NavLink></li>
                ))}
              </ul>
            </div>
          </div>

          <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12">
            <div className="useful-links ul-li-block clearfix">
              <ul className="clearfix">
                <h5>Services</h5>
                {services.map((item) => (
                  <li key={item.label}><NavLink to={item.to}>{item.label}</NavLink></li>
                ))}
              </ul>
            </div>
          </div>

          <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12" id="footer-contact">
            <div className="useful-links ul-li-block clearfix">
              <ul className="clearfix">
                <h5>Contact</h5>
                <li>
                  <p>
                    <span>Address: </span>
                    <span style={{ color: "#8a8a8a" }}>
                      Welford Road,
                      <br />
                      LE26BD, Leicester, UK
                    </span>
                    <br />
                    Mail Us: <a href={`mailto:${footer.contact.email}`}>{footer.contact.email}</a>
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12">
            <div className="useful-links ul-li-block clearfix">
              <h5>Social Media</h5>
              <ul className="clearfix social-media-list">
                <li>
                  {footer.social.slice(0, 6).map((item) => (
                    <a key={item.label} href={item.href ?? "#"} target={item.href ? "_blank" : undefined} rel={item.href ? "noreferrer" : undefined}>
                      <img src={item.icon} alt={item.label} style={{ width: "24px", marginRight: "4px" }} loading="lazy" />
                    </a>
                  ))}
                </li>
                <li>
                  {footer.social.slice(6).map((item) => (
                    <a key={item.label} href={item.href ?? "#"} target={item.href ? "_blank" : undefined} rel={item.href ? "noreferrer" : undefined}>
                      <img src={item.icon} alt={item.label} style={{ width: "24px", marginRight: "4px" }} loading="lazy" />
                    </a>
                  ))}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <br />

      <div className="copyright py-3">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-md-6 text-center text-md-start mb-2 mb-md-0">
              <p className="mb-0 text-muted text-left">© 2025 | MECANAV</p>
            </div>
            <div className="col-12 col-md-6 text-center text-md-end" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
