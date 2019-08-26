const Joi = require("@hapi/joi");

//register validation
const registerValidation = data => {
  const schema = {
    username: Joi.string()
      .min(3)
      .required(),
    email: Joi.string()
      .min(6)
      .required()
      .email(),
    password: Joi.string()
      .min(6)
      .required()
  };
  return Joi.validate(data, schema);
};

//login validation
const loginValidation = data => {
  const schema = {
    email: Joi.string()
      .min(6)
      .required()
      .email(),
    password: Joi.string()
      .min(6)
      .required()
  };
  return Joi.validate(data, schema);
};
//toy validation
const toyValidation = data => {
  const schema = {
    toyName: Joi.string()
      .min(3)
      .required(),
    condition: Joi.string()
      .min(1)
      .required(),
    description: Joi.string()
      .min(6)
      .required(),
    location: Joi.string().required(),
    category: Joi.string().required(),
    age: Joi.string().required(),
    status: Joi.string().required()
  };
  return Joi.validate(data, schema);
};

module.exports.registerValidation = registerValidation;

module.exports.loginValidation = loginValidation;
module.exports.toyValidation = toyValidation;
