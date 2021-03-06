const validator = require("validator");
const isEmpty = require("./isEmpty");

const repairerValidator = ({ email, username, phone, password, password2 }) => {
  const errors = {};

  if (validator.isEmpty(email)) {
    errors.email = "Email field is required";
  }

  if (!validator.isEmail(email)) {
    errors.email = "Email is not valid";
  }

  if (validator.isEmpty(username)) {
    errors.username = "username field is required";
  }

  if (validator.isEmpty(phone)) {
    errors.phone = "phone field is required";
  }

  if (validator.isEmpty(password)) {
    errors.password = "password field is required";
  }

  if (!validator.equals(password, password2)) {
    errors.password = "Passwords must match";
  }

  return {
    isValid: isEmpty(errors),
    errors
  };
};
module.exports = repairerValidator;
