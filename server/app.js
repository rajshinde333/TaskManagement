import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

// import authMiddleware from "./middleware/authMiddleware.js";
import userRoutes from "./routes/user.js";
// import taskRoutes from "./routes/task.js";

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cookieParser());
app.use(cors());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000/");
  res.header("Access-Control-Allow-Credentials", true);
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// app.get("*", authMiddleware);
app.use("/user", userRoutes);
// app.use("/task", taskRoutes);

app.get("/", (req, res) => {
  res.send("Hello this is server");
});

// Database Connection
const PORT = process.env.PORT || 5000;
const CONNECTION_URL =
  process.env.CONNECTION_URL || "mongodb://127.0.0.1:27017/taskManagementDB";

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => app.listen(PORT, () => console.log(`Server running on ${PORT}`)))
  .catch((err) => console.log(err.message));

// mongoose.set("useFindAndModify", false);
