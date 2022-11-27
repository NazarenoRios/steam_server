//Configuracion del servidor
import "dotenv/config.js";
import "./models";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
// import mongoose from "mongoose";

//Database
import db from "./db";

// Express Route File Requires
import routes from "./routes";

const PORT = process.env.PORT || 3001;
const app = express();

//Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors());

// Express Routing
app.use("/api", routes);

db.sync({ force: true }).then(() => {
  console.log("db connected");
  app.listen(PORT, () => {
    console.log(`Server listening at port ${PORT}`);
  });
});

///


// mongoose
//   .connect(`${process.env.DB_URI}`)
//   .then(() => console.log("Connected to MongoDB"))
//   .catch((e) => console.log(e));

// app.listen(PORT, () => {
//   console.log(`Server listening at port ${PORT}`);
// });