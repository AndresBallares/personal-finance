const express = require('express')
const app = express();
const cors = require("cors");
//importing the transactionController Routes which hold the transactionArray
const transactionController = require("./controller/transactionController");


app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.get("/", (request, respond) => {
    console.log("get to /");
    respond.send("Welcome to your finances")
});
//designating the /transactions route to transactionController
app.use("/transactions", transactionController);























module.exports = app;