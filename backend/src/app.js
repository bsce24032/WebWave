import dotenv from "dotenv";
dotenv.config();

import express, { urlencoded } from "express";
import { createServer } from "node:http";
import mongoose from "mongoose";
import cors from "cors";
import { connectToSocket } from "./controllers/socketManager.js";
import userRoutes from "./routes/users.routes.js";

const app = express();
const server = createServer(app);
const io = connectToSocket(server);

app.use(express.json({ limit: "40kb" }));
app.use(urlencoded({ limit: "40kb", extended: true }));
app.use(cors());

app.use("/api/v1/users", userRoutes);

const start = async () => {
  const connectionDb = await mongoose.connect(process.env.MONGO_URI);
  console.log(`Mongo Connected Db Host : ${connectionDb.connection.host}`);
  server.listen(process.env.PORT || 8000, () => {
    console.log(`LISTENING ON PORT ${process.env.PORT || 8000}`);
  });
};

start();