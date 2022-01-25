const express = require('express');

//importing the transactionsArray from model/transaction to manipulate data
const transactionsArray = require('../models/transactions');
const transactions = express.Router();

transactions.get("/", (request, response) => {
    console.log("GET request to transactionsArray");
    console.log(transactionsArray);
    response.json(transactionsArray);
});

transactions.get("/:index", (request, response) => {
    console.log("Get request received to route: /index")
    console.log(request.params);
    const { index } = request.params;
    if (transactionsArray[index]) {
        response.json(transactionsArray[index])
    } else {
        response.status(404).json({error: "Resource not found"})
    }
});

transactions.post("/", (request, response) => {
    console.log("POST to transactions");
    transactionsArray.push(request.body);
    response.json(transactionsArray);
})

transactions.delete("/:index", (request, response) => {
    const { index } = request.params;
    if (transactionsArray[index]) {
        const deletedTransaction = transactionsArray.splice(index, 1)
        response.status(200).json(deletedTransaction)
    } else {
        response.status(404).json({error: "transaction not found"})
    };
});

transactions.put("/:index", (request, response) => {
    const { index } = request.params;
    transactionsArray[index] = request.body
    response.status(200).json(transactionsArray);
});












//exporting the transaction variable where we hold the express.Router
module.exports = transactions;