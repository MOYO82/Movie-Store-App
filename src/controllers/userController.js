import user from "../models/userModel.js";
import user from "../validators/userValidator.js;"
import task from "../models.task.js";
import { mongoIdValidator } from "../validators/mongoIdValidator.js";
import { NotfoundError, BadUserRequestError } from "../error/error.js";
import bcrypt from "bcrypt";


 export default class UserControllers {
  static async createUser(req, res) {
    const {error } = createUserValidator.validate(req.body)
    if(error) throw error
        
    const newUser = await User.create({...req.body, creator: req.user._id, creatorId: req.user._id })
      res.status(201).json({
      message: "User created successfully",
      status: "Success",
      data:{
        task: newUser
      }
    })
  }
}

  static async findUsers(req, res) {
    const { id } = req.query
    const {error} = mongoIdValidator.validate(req.query)
    if(error) throw new BadUserRequestError("Enter a valid mongoId")
  
    const user = await User.findById(id)
    if (!user) throw new NotFoundError('User not found')
    res.status(200).json({
    message: "User found successfully",
    status: "Success",
    data:{
      user
    }
  })
}
