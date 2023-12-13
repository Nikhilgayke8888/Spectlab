export const emailRegEx = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;

export const mobileNumberRegex = /^\d{0,10}$/;

export const validateMobileNumber = (value) => {
  return mobileNumberRegex.test(value);
};

export const validateEmail = (value) => {
  const isValid = emailRegEx.test(value);
  console.log("Email Validation - Value:", value, "isValid:", isValid);
  return isValid;
};
