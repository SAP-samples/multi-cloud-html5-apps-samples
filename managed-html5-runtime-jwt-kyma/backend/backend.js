"use strict";

const express = require("express");
const jwtDecode = require("jwt-decode");

var app = express();

app.get("/", function (_, res) {
    res.end("This app runs on SAP BTP, Kyma Runtime. \n Yay! 🚀");
});

app.get("/token", function (req, res) {
    console.log("====Req headers ", req.headers);
    let token = req.headers["authorization"];
    if (!token) {
        res.end("No token found");
        return;
    }
    let decodedToken = jwtDecode(token);
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(decodedToken));
});

app.listen(process.env.PORT || 5000);

