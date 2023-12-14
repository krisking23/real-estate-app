import express from "express";
import http from "http";
import cookieParser from "cookie-parser";
import compresion from "compression";
import cors from "cors";
import dotenv from "dotenv";
import "reflect-metadata";
import { v2 as cloudinary } from "cloudinary";

import userRoutes from "./routes/user-routes";
import listingRoutes from "./routes/listing-routes";
import { AppDataSource } from "./db/data-source";

dotenv.config();
cloudinary.config({
  cloud_name: "duo2x8exf",
  api_key: "435133782825999",
  api_secret: "SZkcvsn0WHFeCpV5RKbqqJQOsIY",
});

const app = express();

import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { Test } from "./db/test-entity";

app.use(
  cors({
    credentials: true,
  })
);

app.use(compresion());
app.use(cookieParser());
app.use(express.json());

AppDataSource.initialize()
  .then(() => {
    // here you can start to work with your database
  })
  .catch((error: any) => console.log(error));

app.get("/", (req: any, res: any) => {
  res.send("hi");
  console.log(req.cookies);
});

app.use("/listing", listingRoutes);
app.use("/api/users", userRoutes);
app.post("/test", async (req: any, res: any) => {
  // console.log(cloudinary.);
  // @ts-ignore
  const yay = await cloudinary.uploader.upload(
    "images\\hi2.jpg",
    { public_id: "olympic_flag" },
    function (error: any, result: any) {
      return result;
    }
  );
  res.send("success");
  const test = AppDataSource.manager.create(Test, {
    yay: yay.url,
  });
  const newTest = await AppDataSource.manager.save(test);
  res.send(newTest);
});

const server = http.createServer(app);

server.listen(8080, () => {
  console.log("server running nigga 8080");
});
