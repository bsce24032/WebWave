import express, { urlencoded } from "express";
import { createServer } from "node:http";
import { Server } from "socket.io";
import mongoose from "mongoose";
import cors from "cors";
import { create } from "node:domain";
import { connectToSocket } from "./controllers/socketManager.js";
import userRoutes from "./routes/users.routes.js";
const app = express();
const server = createServer(app);
const io = connectToSocket(server);

app.set("port", process.env.port || 8000);
app.use(express.json({"limit":"40kb"}));
app.use(urlencoded({"limit":"40kb" ,extended:true}));
app.use(cors());

app.use("/api/v1/users",userRoutes);


const start = async () => {
  const connectionDb = await mongoose.connect(
    "mongodb+srv://bsce24032:8WdALG7VX8glXAHS@cluster0.2n7lv1a.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  );
  console.log(`Mongo Connected Db Host : ${connectionDb.connection.host}`);
  server.listen(app.get("port"), () => {
    console.log("LISTINING ON PORT 8000");
  });
};

start();
