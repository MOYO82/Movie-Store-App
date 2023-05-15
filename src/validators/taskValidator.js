import Joi from "joi"
import JoiMongoId from "joi-objectid"

Joi.objectId = JoiMongoId(Joi)

export const createTaskValidator = Joi.object({
  creator: Joi.objectId().required(),
  reatorId: Joi.objectId().required(),
  status: Joi.string().valid('pending', 'in-progress', 'completed').required(),
  title: Joi.string().required(),
}).strict()



export const updateTaskValidator = Joi.object({
  creator: Joi.objectId().required(),
  creatorId: Joi.objectId().required(),
  status: Joi.string().valid('pending', 'in-progress', 'completed').required(),
  title: Joi.string().optional(),
}).strict()