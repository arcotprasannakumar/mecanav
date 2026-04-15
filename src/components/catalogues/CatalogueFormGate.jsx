import { useEffect, useMemo, useState } from "react";
import {
  validateEmail,
  validatePhone,
  validateRequiredFields,
} from "../../utils/formValidation";
import StatusPanel from "../ui/StatusPanel";

const defaultFields = [
  { name: "name", label: "Full Name", type: "text", required: true },
  { name: "email", label: "Email", type: "email", required: true },
  { name: "phone", label: "Phone Number", type: "tel", required: true, maxLength: 10 },
  { name: "siteAddress", label: "Site Address", type: "textarea", required: true },
];

function CatalogueFormGate({
  isOpen,
  onClose,
  onSubmit,
  title = "Join Us and Unlock Your Catalogue",
  fields = defaultFields,
  unavailableMessage,
}) {
  const initialValues = useMemo(
    () =>
      Object.fromEntries(fields.map((field) => [field.name, ""])),
    [fields],
  );
  const [values, setValues] = useState(initialValues);
  const [error, setError] = useState("");

  useEffect(() => {
    setValues(initialValues);
    setError("");
  }, [initialValues, isOpen]);

  if (!isOpen) {
    return null;
  }

  const handleChange = (fieldName, fieldValue) => {
    setValues((current) => ({ ...current, [fieldName]: fieldValue }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setError("");

    const requiredError = validateRequiredFields(values, fields);
    if (requiredError) {
      setError(requiredError);
      return;
    }

    if (values.email && !validateEmail(values.email)) {
      setError("Enter a valid email address.");
      return;
    }

    if (values.phone && !validatePhone(values.phone)) {
      setError("Enter a valid Indian or UK phone number.");
      return;
    }

    onSubmit?.(values);
    setValues(initialValues);
  };

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md rounded-[10px] bg-white p-6"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          aria-label="Close"
          className="absolute right-4 top-3 text-2xl text-slate-700 transition hover:text-red-500"
          onClick={onClose}
        >
          ×
        </button>

        <h2 className="mb-4 text-center text-2xl font-semibold text-black">{title}</h2>

        {unavailableMessage ? (
          <StatusPanel
            tone="warning"
            message={unavailableMessage}
            className="rounded-lg px-4 py-3 text-sm shadow-none"
          />
        ) : (
          <form className="space-y-3" onSubmit={handleSubmit}>
            {fields.map((field) =>
              field.type === "textarea" ? (
                <textarea
                  key={field.name}
                  value={values[field.name]}
                  placeholder={field.label}
                  rows="4"
                  className="w-full rounded-md border border-slate-300 px-3 py-2 text-black"
                  onChange={(event) => handleChange(field.name, event.target.value)}
                />
              ) : (
                <input
                  key={field.name}
                  type={field.type}
                  value={values[field.name]}
                  placeholder={field.label}
                  maxLength={field.maxLength}
                  className="w-full rounded-md border border-slate-300 px-3 py-2 text-black"
                  onChange={(event) => handleChange(field.name, event.target.value)}
                />
              ),
            )}

            {error ? <p className="text-sm text-red-600">{error}</p> : null}

            <button
              type="submit"
              className="w-full rounded-md bg-black px-4 py-2.5 text-white transition hover:bg-[#333]"
            >
              Submit & Download
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default CatalogueFormGate;
