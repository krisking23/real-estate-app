import express from "express";
import { signup, login } from "../controllers/user.controller";
import { saveUser, auth } from "../middleware/user-auth";

const router = express.Router();

//signup endpoint
//passing the middleware function to the signup

router.post("/", auth, (req: any, res: any) => {
  console.log(req.user);
  res.send("hi");
});

export default router;
