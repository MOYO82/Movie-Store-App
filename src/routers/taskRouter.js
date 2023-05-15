
import {Router} from "express"
import TaskController from "../controllers/taskController.js"
import { tryCatchHandler} from "../utils/tryCatchHandler.js"
import {userAuthMiddleWare} from "../middlewares/authMiddleware.js"

const router = Router()

router.post("/create", userAuthMiddleWare, tryCatchHandler( TaskController.createTask))

router.put("/update", userAuthMiddleWare, tryCatchHandler( TaskController.updateOneTask))

router.get("/one", userAuthMiddleWare, tryCatchHandler( TaskController.getOneTask))

router.get("/all_task", userAuthMiddleWare, tryCatchHandler( TaskController.findAll))

router.delete("/delete",  userAuthMiddleWare, tryCatchHandler( TaskController.deleteOneTask))

export {router}

app.post("/register", async (req, res) => {

    // Our register logic starts here
    try {
      // Get user input
      const { first_name, last_name, email, password } = req.body;
  
      // Validate user input
      if (!(email && password && first_name && last_name)) {
        res.status(400).send("All input is required");
      }
  
      // check if user already exist
      // Validate if user exist in our database
      const oldUser = await User.findOne({ email });
  
      if (oldUser) {
        return res.status(409).send("User Already Exist. Please Login");
      }
  
      //Encrypt user password
      encryptedPassword = await bcrypt.hash(password, 10);
  
      // Create user in our database
      const user = await User.create({
        first_name,
        last_name,
        email: email.toLowerCase(), // sanitize: convert email to lowercase
        password: encryptedPassword,
      });
  
      // Create token
      const token = jwt.sign(
        { user_id: user._id, email },
        process.env.TOKEN_KEY,
        {
          expiresIn: "2h",
        }
      );
      // save user token
      user.token = token;
  
      // return new user
      res.status(201).json(user);
    } catch (err) {
      console.log(err);
    }
    // Our register logic ends here
  });
  
exports.login = (req, res, next) => {
    user.findOne({ email: req.body.email }).then(
        (user) => {
            if (!user) {
                return res.status(401).json({
                    error: new Error('User not found')
                });
            }
            const token = express.sign(
                { userId: user.id},
                'RANDOM_TOKEN_SECRET',
                { expiresIn: '12h'}
            );
            res.status(200).json({
                userId: user._id,
                token: token
            });
        });
        }