import { useMemo, useRef, useState } from "react";
import { validateEmail, validateRequiredFields } from "../../utils/formValidation";
 
const formFields = [
  { name: "name", label: "Name", type: "text", required: true, placeholder: "Your Name" },
  { name: "email", label: "Email", type: "email", required: true, placeholder: "Your Email" },
  {
    name: "message",
    label: "Message",
    type: "textarea",
    required: true,
    placeholder: "Your Message",
  },
];
 
function ContactForm() {
  const initialValues = useMemo(
    () => Object.fromEntries(formFields.map((field) => [field.name, ""])),
    [],
  );
 
  const formRef = useRef(null);
  const [values, setValues] = useState(initialValues);
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);
 
  const handleChange = (fieldName, fieldValue) => {
    setValues((current) => ({ ...current, [fieldName]: fieldValue }));
    setError("");
    setSubmitted(false);
  };
 
  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(false);
 
    const requiredError = validateRequiredFields(values, formFields);
    if (requiredError) {
      setError(requiredError);
      return;
    }
 
    if (!validateEmail(values.email)) {
      setError("Enter a valid email address.");
      return;
    }
 
    setError("");
    setSubmitted(true);
 
    if (formRef.current) {
      formRef.current.submit();
    }
 
    setValues(initialValues);
  };
 
  return (
    <div className="min-h-[520px] rounded-[16px] bg-[#171717] px-8 py-9 sm:px-8 sm:py-9">
      <form
        ref={formRef}
        action="https://docs.google.com/forms/d/e/1FAIpQLSciugRivuyedJbIg43J4NRSpY_Dkws23M4re6GvCv8WaX8ogQ/formResponse"
        method="POST"
        target="hidden_iframe"
        onSubmit={handleSubmit}
        className="flex h-full flex-col"
      >
        <div className="space-y-5">
          <div>
            <label className="mb-2 block text-[15px] font-normal text-white">Name</label>
            <input
              type="text"
              name="entry.1323039583"
              value={values.name}
              placeholder="Your Name"
              onChange={(event) => handleChange("name", event.target.value)}
              className="h-12 w-full rounded-[6px] border border-[#474747] bg-[#2a2a2a] px-4 text-[16px] font-normal text-white placeholder:text-[#707784] focus:border-[#5d5d5d] focus:outline-none"
            />
          </div>
 
          <div>
            <label className="mb-2 block text-[15px] font-normal text-white">Email</label>
            <input
              type="email"
              name="entry.140045828"
              value={values.email}
              placeholder="Your Email"
              onChange={(event) => handleChange("email", event.target.value)}
              className="h-12 w-full rounded-[6px] border border-[#474747] bg-[#2a2a2a] px-4 text-[16px] font-normal text-white placeholder:text-[#707784] focus:border-[#5d5d5d] focus:outline-none"
            />
          </div>
 
          <div>
            <label className="mb-2 block text-[15px] font-normal text-white">Message</label>
            <textarea
              rows={7}
              name="entry.165633033"
              value={values.message}
              placeholder="Your Message"
              onChange={(event) => handleChange("message", event.target.value)}
              className="h-40 w-full resize-none rounded-[6px] border border-[#474747] bg-[#2a2a2a] px-4 py-3 text-[16px] font-normal text-white placeholder:text-[#707784] focus:border-[#5d5d5d] focus:outline-none"
            />
          </div>
        </div>
 
        {error ? <p className="mt-4 text-sm text-red-400">{error}</p> : null}
 
        {submitted ? (
          <div className="mt-4 rounded-[10px] border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-200">
            Thank you! Your message has been sent.
          </div>
        ) : null}
 
        <button
          type="submit"
          className="mt-5 flex h-[54px] w-full items-center justify-center rounded-[14px] bg-[#e7e7e7] text-[16px] font-semibold text-black transition duration-300 hover:bg-white"
        >
          Send Message
        </button>
      </form>
 
      <iframe name="hidden_iframe" title="hidden_iframe" className="hidden" />
    </div>
  );
}
 
export default ContactForm;
