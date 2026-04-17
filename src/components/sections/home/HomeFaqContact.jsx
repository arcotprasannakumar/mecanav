import { useState } from "react";
import backgroundImage from "../../../assets/images/applications/park-lighting-home-001.webp";
import contactBackground from "../../../assets/images/banners/contactbg.png";
import modelAsset from "../../../assets/media/113133.glb";
import useModelViewer from "../../../hooks/useModelViewer";

const faqs = [
  {
    question: "What is your delivery timeline?",
    answer:
      "Lead times depend on product type and project scale, but we support clients with clear production scheduling and dispatch updates throughout the order cycle.",
  },
  {
    question: "Do you offer installation services?",
    answer:
      "We support project execution with technical guidance and coordination based on the scope of the facade lighting requirement.",
  },
  {
    question: "Can I customize my lighting solution?",
    answer:
      "Yes. The legacy homepage positioned Mecanav around custom facade lighting, and that same customization-first message is preserved here.",
  },
  {
    question: "What warranty do you provide?",
    answer:
      "Warranty depends on the selected fixture and control components. Our team can confirm the right coverage for your selected product range.",
  },
];

function HomeFaqContact() {
  const [activeIndex, setActiveIndex] = useState(0);
  useModelViewer();

  return (
    <section
      className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative mx-auto grid max-w-[1380px] gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
        <div className="rounded-[32px] border border-white/10 bg-black/40 p-6 backdrop-blur-sm sm:p-8">
          <p className="text-sm uppercase tracking-[0.35em] text-white/50">Frequently Asked Questions</p>
          <h2 className="mt-3 text-3xl font-light text-white sm:text-4xl">Let&apos;s Build Something Brilliant</h2>

          <div className="mt-8 space-y-4">
            {faqs.map((item, index) => {
              const open = activeIndex === index;
              return (
                <div
                  key={item.question}
                  className={`rounded-[24px] border px-5 py-5 transition ${
                    open ? "border-white/25 bg-white/10" : "border-white/10 bg-black/20"
                  }`}
                >
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 text-left"
                    onClick={() => setActiveIndex(index)}
                  >
                    <span className="text-lg font-medium text-white">{item.question}</span>
                    <span className="text-2xl text-white/60">{open ? "−" : "+"}</span>
                  </button>
                  {open ? (
                    <p className="mt-4 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
                      {item.answer}
                    </p>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid gap-8">
          <div
            className="overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-6"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.72), rgba(0,0,0,0.72)), url(${contactBackground})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <h3 className="text-2xl font-light text-white">Contact Us</h3>
            <form
              className="mt-6 grid gap-4"
              onSubmit={(event) => event.preventDefault()}
            >
              <input
                type="text"
                placeholder="Name"
                className="rounded-2xl border border-white/10 bg-black/35 px-4 py-3 text-white placeholder:text-white/40 focus:border-white/25 focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="rounded-2xl border border-white/10 bg-black/35 px-4 py-3 text-white placeholder:text-white/40 focus:border-white/25 focus:outline-none"
              />
              <input
                type="tel"
                placeholder="Phone"
                className="rounded-2xl border border-white/10 bg-black/35 px-4 py-3 text-white placeholder:text-white/40 focus:border-white/25 focus:outline-none"
              />
              <textarea
                placeholder="Message"
                rows="5"
                className="rounded-2xl border border-white/10 bg-black/35 px-4 py-3 text-white placeholder:text-white/40 focus:border-white/25 focus:outline-none"
              />
              <button
                type="submit"
                className="inline-flex w-fit items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-black transition hover:bg-white/85"
              >
                Submit
              </button>
            </form>
          </div>

          <div className="overflow-hidden rounded-[32px] border border-white/10 bg-white p-4 shadow-[0_25px_60px_rgba(0,0,0,0.35)]">
            <model-viewer
              src={modelAsset}
              alt="3D lighting fixture"
              auto-rotate=""
              camera-controls=""
              background-color="#ffffff"
              style={{ width: "100%", height: "430px" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeFaqContact;
