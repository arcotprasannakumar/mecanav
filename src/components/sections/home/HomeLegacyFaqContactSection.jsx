import { useState } from "react";
import useModelViewer from "../../../hooks/useModelViewer";
import faqBg from "../../../assets/images/applications/park-lighting-home-001.webp";
import contactBg from "../../../assets/images/banners/contactbg.png";
import modelAsset from "../../../assets/media/113133.glb";

const faqItems = [
  {
    question: "What is your delivery timeline?",
    answer: "Our standard delivery time is 5-7 working days, depending on product availability and project scope.",
  },
  {
    question: "Do you offer installation services?",
    answer: "Yes, we provide installation services through our certified partners in select cities.",
  },
  {
    question: "Can I customize my lighting solution?",
    answer: "Absolutely. We work with clients to create tailored solutions based on your design and functional needs.",
  },
  {
    question: "What warranty do you provide?",
    answer: "We offer a 2-year warranty on all our products against manufacturing defects.",
  },
];

function HomeLegacyFaqContactSection() {
  const [activeFaq, setActiveFaq] = useState(0);
  useModelViewer();

  return (
    <section className="position-relative" style={{ background: "transparent", overflow: "hidden" }}>
      <div className="container position-relative">
        <section className="home-faq-panel" style={{ backgroundImage: `url(${faqBg})` }}>
          <div className="image-mask" />
          <div className="row justify-content-center mb-5 position-relative" style={{ zIndex: 1 }}>
            <div className="col-lg-11 col-xl-10 mx-auto">
              <h2 className="text-center mb-4 text-uppercase fw-semibold fs-4" style={{ color: "#e0e0e0" }}>FAQ</h2>
              <div className="accordion-faq">
                {faqItems.map((item, index) => (
                  <div key={item.question} className={`faq-box faq-bg${activeFaq === index ? " active" : ""}`}>
                    <button
                      type="button"
                      className="faq-question"
                      onClick={() => setActiveFaq((current) => (current === index ? null : index))}
                      aria-expanded={activeFaq === index}
                    >
                      {item.question}
                    </button>
                    <div className="faq-answer">
                      <p>{item.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="my-5" />

        <div className="row align-items-center contact-background gy-4" style={{ backgroundImage: `url(${contactBg})` }}>
          <div className="col-lg-6">
            <form
              id="contact_form"
              className="contact-box p-4"
              onSubmit={(event) => event.preventDefault()}
            >
              <div className="row">
                <div className="col-md-6">
                  <input type="text" className="form-control contact-input transparent-input" placeholder="Full Name" required />
                </div>
                <div className="col-md-6">
                  <input type="email" className="form-control contact-input transparent-input" placeholder="Email Address" required />
                </div>
                <div className="col-12">
                  <input type="tel" className="form-control contact-input transparent-input" placeholder="Phone Number" required />
                </div>
                <div className="col-12">
                  <textarea className="form-control contact-input transparent-input" rows="4" placeholder="Your Message" required />
                </div>
                <div className="col-12 text-center">
                  <button type="submit" className="contact-btn px-5 py-2 rounded-pill shadow-sm">Send Message</button>
                </div>
              </div>
            </form>
          </div>

          <div className="col-lg-6 text-center">
            <model-viewer src={modelAsset} alt="3D Product View" auto-rotate camera-controls ar background-color="#f3f3f3" style={{ width: "100%", height: "390px" }} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeLegacyFaqContactSection;
