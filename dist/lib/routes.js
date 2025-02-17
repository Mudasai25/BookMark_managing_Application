import express from "express";
import { createUser, getUsers } from "./controllers";
const router = express.Router();
router.get("/users", getUsers); // GET all users
router.post("/users", createUser); // Create a user
export default router;
