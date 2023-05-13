import user from '../models/user';
import user from '../validators/userValidator.js';


 export const createUsers =   async (req, res,) => {
        const {error } = createTaskValidator.validate(req.body)
        if(error) throw error
        const newUser = await Task.create({...req.body, creator: req.user._id, creatorId: req.user._id })
        res.status(201).json({
        message: "User created successfully",
        status: "Success",
        data:{
          task: newUser
        }
      })
    }
