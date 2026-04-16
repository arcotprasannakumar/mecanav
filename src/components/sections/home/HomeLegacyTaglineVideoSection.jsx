import stadiumVideo from "../../../assets/media/stadiumvideo.mp4";

function HomeLegacyTaglineVideoSection() {
  return (
    <section className="animiyaa-video-section home-screen-fit-section">
      <video id="animiyaaVideo" autoPlay muted playsInline loop>
        <source src={stadiumVideo} type="video/mp4" />
      </video>
      <div className="centered-text">
        <h2 id="animatedSingleText">Beyond Illumination - Into Imagination</h2>
      </div>
    </section>
  );
}

export default HomeLegacyTaglineVideoSection;
