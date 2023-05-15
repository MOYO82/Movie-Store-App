import jwt from "jsonwebtoken";
import { UnAuthorizedError} from "../error/error.js"
import {verifyToken} from "../utils/jwtUtils.js"

export function userAuthMiddleWare(req, res, next){
  const token = req.headers?.authorizati(" ")[1];
  if(!token) throw new UnAuthorizedError("You must provide an authorization token.")
  try {
    const payload = verifyToken(token)
    req.user = payload
    next()
  }catch (err){
    throw new UnAuthorizedError("Access denied, invalid token.")
  }
} 

if (!token) return res.status(401).send('Access denied. No token provided.');

try {
  const decoded = jwt.verify(token, config.get('jwtPrivateKey'));
  req.user = decoded; 
  next();
}
catch (ex) {
  res.status(400).send('Invalid token.');
}
const config = process.env;

const verifyToken = (req, res, next) => {
  const token =
    req.body.token || req.query.token || req.headers["x-access-token"];

  if (!token) {
    return res.status(401).send("A token is required for authentication");
  }
  try {
    const decoded = jwt.verify(token, config.TOKEN_KEY);
    req.user = decoded;
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
  return next();
};

app.post("/welcome", auth, (req, res) => {
  res.status(200).send("Welcome 🙌 ");
});

module.exports = verifyToken;







module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = express.verify(token, 'RANDOM_TOKEN_SECRET');
    const userId = decodedToken.userId;
    if (req.body.userId && req.body.userId !== userId) {
      throw 'Invalid user ID';
    } else {
      next();
    }
  } catch {
    res.status(401).json({error: new Error('Invalid request!') });
  }
};