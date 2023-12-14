import express from "express";
import { User } from "../db/user-entity";
import { AppDataSource } from "../db/data-source";
import jwt from "jsonwebtoken";

export const saveUser = async (req: any, res: any, next: any) => {
  try {
    const username = await AppDataSource.manager.findOneBy(User, {
      username: req.body.userName,
    });

    if (username) {
      return res.json(409).send("username already exits");
    }

    const emailExits = await AppDataSource.manager.findOneBy(User, {
      email: req.body.email,
    });

    if (emailExits) {
      return res.json(409).send("email already exits");
    }

    next();
  } catch (err) {
    console.log(err);
  }
};

export const auth = async (req: any, res: any, next: any) => {
  const token = req.cookies.jwt;

  if (!token) {
    return res.json({ status: false });
  }

  jwt.verify(token, process.env.secretKey, async (err: any, data: any) => {
    if (err) {
      return res.json({ status: false });
    } else {
      const user = await AppDataSource.manager.findOneBy(User, {
        id: data.id,
      });
      // console.log(user);
      if (user) {
        req["user"] = user;
      } else return res.json({ status: false });
      // if (user) return res.json({ status: true, user: user.username });
      // else return res.json({ status: false });
    }
  });

  next();
};
