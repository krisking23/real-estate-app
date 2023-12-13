import express from "express";
import { User } from "../db/user-entity";
import { AppDataSource } from "../db/data-source";

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
