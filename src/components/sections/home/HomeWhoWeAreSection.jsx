import { Link } from "react-router-dom";
import whoWeAreBg from "../../../assets/images/applications/architectural-light-innerpage-final-001.webp";

function HomeWhoWeAreSection() {
  return (
    <section
      className="whoweareaboutus section professional-bg-container"
      style={{ backgroundImage: `url(${whoWeAreBg})`, backgroundSize: "cover", backgroundAttachment: "fixed", position: "relative" }}
    >
      <div className="image-mask" />

      <div className="container content-center">
        <div className="row justify-content-center text-center">
          <div className="col-lg-8 content">
            <h3 className="text-white">Who We Are</h3>
            <p className="text-white">
              We specialize in innovative facade lighting solutions that enhance architecture, create stunning visual effects, and improve ambiance. <br /> From homes to commercial buildings, we bring structures to life with light.
            </p>
            <Link to="/about" className="read-more text-dark bg-white">
              <span>Read More</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeWhoWeAreSection;
