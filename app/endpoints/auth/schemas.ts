import Joi from "joi";

export const signUpSchema = Joi.object({
  name: Joi.string().required(),
  login: Joi.string().required(),
  password: Joi.string().min(8).required(),
  confirmPassword: Joi.ref("password"),
});

export const signInSchema = Joi.object({
  login: Joi.string().required(),
  password: Joi.string().min(8).required(),
});
