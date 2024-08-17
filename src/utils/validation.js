const EMAIL_ERROR = "Email is not valid";

export const validateString = function (stringValue, category = "email") {
  const trimmedValue = stringValue.trim();
  switch (category) {
    case "password":
      return null;
    default:
      if (!trimmedValue) return EMAIL_ERROR;
      return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(trimmedValue) ? null : EMAIL_ERROR;
  }
};
