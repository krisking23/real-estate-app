import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../db/user-entity";
import { AppDataSource } from "../db/data-source";

export const signup = async (req: any, res: any) => {
  try {
    const { userName, email, password } = req.body;
    const data = {
      id: 0,
      username: userName,
      email,
      password: await bcrypt.hash(password, 10),
    };
    //saving the user
    const user = AppDataSource.manager.create(User, data);

    const newUser = await AppDataSource.manager.save(user);

    //if user details is captured
    //generate token with the user's id and the secretKey in the env file
    // set cookie with the token generated
    if (newUser) {
      let token = jwt.sign({ id: newUser.id }, process.env.secretKey, {
        expiresIn: 1 * 24 * 60 * 60 * 1000,
      });
      res.cookie("jwt", token, { maxAge: 1 * 24 * 60 * 60, httpOnly: true });
      console.log("user", JSON.stringify(user, null, 2));
      console.log(token);
      //send users details
      return res.status(201).send(newUser);
    } else {
      return res.status(409).send("Details are not correct");
    }
  } catch (error) {
    console.log(error);
  }
};

//login authentication

export const login = async (req: any, res: any) => {
  try {
    const { email, password } = req.body;

    //find a user by their email
    const user = await AppDataSource.manager.findOne(User, {
      where: {
        email: email,
      },
    });

    //if user email is found, compare password with bcrypt
    if (user) {
      const isSame = await bcrypt.compare(password, user.password);

      //if password is the same
      //generate token with the user's id and the secretKey in the env file

      if (isSame) {
        let token = jwt.sign({ id: user.id }, process.env.secretKey, {
          expiresIn: 1 * 24 * 60 * 60 * 1000,
        });

        //if password matches wit the one in the database
        //go ahead and generate a cookie for the user
        res.cookie("jwt", token, { maxAge: 1 * 24 * 60 * 60, httpOnly: true });
        // console.log("user", JSON.stringify(user, null, 2));
        // console.log(token);
        //send user data
        return res.status(201).send(user);
      } else {
        return res.status(401).send("Authentication failed");
      }
    } else {
      return res.status(401).send("Authentication failed");
    }
  } catch (error) {
    console.log(error);
  }
};
