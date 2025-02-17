"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var db_1 = __importDefault(require("./lib/db"));
var app = express();
var PORT = process.env.PORT || 5000;
(0, db_1.default)(); // Connect to MongoDB
app.get("/", function (req, res) {
    res.send("Hello World");
});
app.listen(PORT, function () { return console.log("\u2705 Server running on port ".concat(PORT)); });
