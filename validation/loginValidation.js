const isEmpty = require('./isEmpty');
const validator = require('validator');

const loginValidation = ({password,email}) => {
    const errors = {};

    if (validator.isEmpty(email)) {
        errors.email = "Email field is required";
      }
    
    if (!validator.isEmail(email)) {
        errors.email = "Email is not valid";
      }
    if(validator.isEmpty(password)){
        errors.password = 'Password field is required'
    }  

    return {
     isValid: isEmpty(errors),
     errors
    }
}

module.exports = loginValidation;