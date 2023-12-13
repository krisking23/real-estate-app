import express from "express";
import http from "http";
import cookieParser from "cookie-parser";
import compresion from "compression";
import cors from "cors";
import dotenv from "dotenv";
import "reflect-metadata";

import userRoutes from "./routes/user-routes";

import { AppDataSource } from "./db/data-source";

dotenv.config();

const app = express();

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

app.use("/api/users", userRoutes);

const server = http.createServer(app);

server.listen(8080, () => {
  console.log("server running nigga 8080");
});
