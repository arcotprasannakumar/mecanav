export function validateEmail(value) {
  return String(value ?? "").includes("@");
}

export function validatePhone(value) {
  const phone = String(value ?? "").trim();
  if (!phone) {
    return false;
  }

  const indiaRegex = /^[6-9]\d{9}$/;
  const ukRegex = /^07\d{9}$/;

  return indiaRegex.test(phone) || ukRegex.test(phone);
}

export function validateRequiredFields(values, fields) {
  for (const field of fields) {
    if (field.required && !String(values[field.name] ?? "").trim()) {
      return `The ${field.label} field is required.`;
    }
  }

  return "";
}

export function getUnavailableMessage(entityLabel, detail) {
  return `${entityLabel} is currently unavailable. ${detail}`;
}
