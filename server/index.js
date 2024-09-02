import express from "express";
const app = express();
import mongoose from "mongoose";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";

//*** PATH ROUTES ***//
import userRoute from "./Routes/users.js"
import authRoute from "./Routes/auth.js"
import postRoute from "./Routes/posts.js"

dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true, 
}, () => {
    console.log("connected to database mongoDB");
});

//***  gestion des parametres CORS - requète AJAX interdites ***//
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE, PATCH, OPTIONS"
    );
    res.setHeader("Cross-Origin-Resource-Policy", "cross-origin");
    next();
  });

//*** MIDDLEWARES ***//
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("common"));

//*** MAIN ROUTES ***//
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);

app.listen(process.env.PORT, () => {
    console.log("Backend server is running");
});
