import { Link } from "react-router-dom";
import appVideoOne from "../../../assets/media/dddd.mp4";
import appVideoTwo from "../../../assets/media/dddd2.mp4";
import appVideoThree from "../../../assets/media/dddd1.mp4";
import parkImage from "../../../assets/images/applications/parklightingapplication.webp";
import riverImage from "../../../assets/images/applications/riverlighting.webp";
import stageImage from "../../../assets/images/applications/stagelightin1.webp";

function HomeLegacyApplicationsSection() {
  return (
    <section className="application-section py-2">
      <div className="container my-2">
        <h2 className="text-white mb-2 text-center small-text">Applications</h2>

        <div className="row g-4">
          <div className="col-lg-8 col-md-6 col-12 px-0">
            <Link to="/applications">
              <div className="bg-card">
                <video className="bg-video" autoPlay muted loop playsInline>
                  <source src={appVideoOne} type="video/mp4" />
                </video>
                <div className="overlay" />
                <div className="content">
                  <h3>Architectural Lighting</h3>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-lg-4 col-md-6 col-12 px-0">
            <Link to="/applications">
              <div className="bg-card">
                <div className="bg-image" style={{ backgroundImage: `url('${parkImage}')` }} />
                <div className="overlay" />
                <div className="content">
                  <h3>Park Lighting</h3>
                </div>
              </div>
            </Link>
          </div>
        </div>

        <div className="row g-4">
          <div className="col-lg-4 col-md-6 col-12 px-0">
            <Link to="/applications">
              <div className="bg-card">
                <div className="bg-image" style={{ backgroundImage: `url('${riverImage}')` }} />
                <div className="overlay" />
                <div className="content">
                  <h3>River Lighting</h3>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-lg-8 col-md-6 col-12 px-0">
            <Link to="/applications">
              <div className="bg-card">
                <video className="bg-video" autoPlay muted loop playsInline>
                  <source src={appVideoTwo} type="video/mp4" />
                </video>
                <div className="overlay" />
                <div className="content">
                  <h3>Ferris Wheel Lighting</h3>
                </div>
              </div>
            </Link>
          </div>
        </div>

        <div className="row g-4">
          <div className="col-lg-8 col-md-6 col-12 px-0">
            <Link to="/applications">
              <div className="bg-card">
                <video className="bg-video" autoPlay muted loop playsInline>
                  <source src={appVideoThree} type="video/mp4" />
                </video>
                <div className="overlay" />
                <div className="content">
                  <h3>Bridge Lighting</h3>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-lg-4 col-md-6 col-12 px-0">
            <Link to="/applications">
              <div className="bg-card">
                <div className="bg-image" style={{ backgroundImage: `url('${stageImage}')` }} />
                <div className="overlay" />
                <div className="content">
                  <h3>Stage Lighting</h3>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeLegacyApplicationsSection;
