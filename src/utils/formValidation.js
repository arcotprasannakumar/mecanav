export function validateEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value ?? "").trim());
}

export function validatePhone(value) {
  const phone = String(value ?? "").replace(/[\s()-]/g, "");
  if (!phone) {
    return false;
  }

  const indiaRegex = /^[6-9]\d{9}$/;
  const indiaWithCodeRegex = /^\+?91[6-9]\d{9}$/;
  const ukRegex = /^07\d{9}$/;
  const ukWithCodeRegex = /^\+?447\d{9}$/;

  return indiaRegex.test(phone) || indiaWithCodeRegex.test(phone) || ukRegex.test(phone) || ukWithCodeRegex.test(phone);
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
