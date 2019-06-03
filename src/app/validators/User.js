const Joi = require('joi')

module.exports = {
  body: {
    name: Joi.string().required(),
    email: Joi.string()
      .email()
      .required(),
    password: Joi.string()
      .required()
      .regex(/^[a-zA-Z0-9!@#$%&*]{6,30}$/)
  }
}
