import express from "express";
import UserController from "../controllers/userController.js";
import { tryCatchHandler } from "../utils/tryCatchHandler.js";


const router = new express.Router();


router.post("/create", tryCatchHandler( UserController.createUser) )
router.get("/", tryCatchHandler( UserController.findUser));
router.post('/', async (req, res) => {
  const { error } = validate(req.body); 
  if (error) return res.status(400).send(error.details[0].message);

  let user = await User.findOne({ email: req.body.email });
  if (user) return res.status(400).send('User already registered.');

  user = new User(_.pick(req.body, ['name', 'email', 'password']));
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
  await user.save();

  const token = user.generateAuthToken();
  res.header('x-auth-token', token).send(_.pick(user, ['_id', 'name', 'email']));
});


export { router };

