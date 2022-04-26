import express from "express";
const app = express();

import dotenv from "dotenv";
dotenv.config();

// Connecting DB
import connectDB from "./db/connectDB.js";

// Routes
import userRouter from "./routes/user.js";

// BodyParser
app.use(express.json());

app.use("/api/v1/user", userRouter);

async function start() {
  try {
    const port = process.env.PORT || 5000;
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`Server is running at PORT:${port}`);
    });
  } catch (err) {
    console.log(err.response);
  }
}
start();
