const express = require('express');

import connectDB from "./lib/db";

const app = express();
const PORT = process.env.PORT || 5000;

connectDB(); // Connect to MongoDB


import { Request, Response } from "express";

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});


app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
