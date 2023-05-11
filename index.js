const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const port = process.env.PORT;
const connectDb = require("./config/db");
const router = require("./routes/quiz");
require("./config/quizStatusCron");

const app = express();

//Middlewares
app.use(express.json());

//Connecting DataBase
connectDb();

//Routes middleware
app.use("/", router);

app.listen(port, () => {
    console.log(`Server started at port ${port}`);
})