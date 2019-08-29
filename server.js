const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");


// import Routes
const authRoute = require("./routes/auth");
const toysRoute = require("./routes/toys");

//connect DB
dotenv.config();
mongoose.set("useFindAndModify", false);
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () =>
  console.log("connected to DB")
);

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Route Middleware
app.use("/api/users", authRoute);
app.use("/api/toys", toysRoute);

app.listen(5000, () => console.log("server is running"));
