require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDb = require("./db/connect");

const userRoutes = require("./routes/users");
const postRoutes = require("./routes/posts");

const app = express();

app.use(express.json({ limit: "20mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "DELETE", "PUT", "PATCH"],
  })
);
app.use("/api/auth", userRoutes);
app.use("/api/posts", postRoutes);

const port = process.env.PORT || 3100;

const connectFn = async () => await connectDb(app);

connectFn();
