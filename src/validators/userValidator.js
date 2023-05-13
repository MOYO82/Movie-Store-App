import joi from 'joi';

export const movieInfoValidator = (data) => {
  const schema = joi.object({
    title: joi.string().min(10).max(50).required(),
    genre: joi.string().min(8).max(25).required()
  }).strict();
  return schema.validate(data);
}
first_name, last_name, email, password
export const userDataValidator = (data) => {
  const schema = joi.object({
    first_name: joi.string().required(),
    last_name: joi.string().required(),
    username: joi.string().min(5).max(15).required(),
    password: joi.string().min(8).max(20).required(),
    email: joi.string().regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
      .required()
      .messages({
        'string.pattern.base': 'Email is not a valid email format/address',
      })
  }).strict();
  return schema.validate(data);
}