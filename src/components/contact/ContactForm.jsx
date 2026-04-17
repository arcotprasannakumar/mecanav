import { useMemo, useState } from "react";
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
    setValues(initialValues);
  };

  return (
    <div className="rounded-[12px] bg-[#1c1c1c] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.35)]">
      <form className="space-y-5" onSubmit={handleSubmit}>
        {formFields.map((field) =>
          field.type === "textarea" ? (
            <div key={field.name}>
              <label className="mb-2 block text-sm font-medium text-white">{field.label}</label>
              <textarea
                rows="5"
                value={values[field.name]}
                placeholder={field.placeholder}
                className="w-full rounded-xl border border-[#444] bg-[#2c2c2c] px-4 py-3 text-white placeholder:text-white/35 focus:border-white/25 focus:outline-none"
                onChange={(event) => handleChange(field.name, event.target.value)}
              />
            </div>
          ) : (
            <div key={field.name}>
              <label className="mb-2 block text-sm font-medium text-white">{field.label}</label>
              <input
                type={field.type}
                value={values[field.name]}
                placeholder={field.placeholder}
                className="w-full rounded-xl border border-[#444] bg-[#2c2c2c] px-4 py-3 text-white placeholder:text-white/35 focus:border-white/25 focus:outline-none"
                onChange={(event) => handleChange(field.name, event.target.value)}
              />
            </div>
          ),
        )}

        {error ? <p className="text-sm text-red-400">{error}</p> : null}
        {submitted ? (
          <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-200">
            Thanks for sharing your details. Our team will follow up with you shortly.
          </div>
        ) : null}

        <button
          type="submit"
          className="inline-flex w-full items-center justify-center rounded-xl bg-[#0d6efd] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#0b5ed7]"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
