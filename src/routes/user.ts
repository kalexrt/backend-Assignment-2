import express from "express";

import { auth } from "../middlewares/auth";

import { createUser, getUserById, getUsers } from "../controller/user";

const router = express();

router.get("/", auth, getUsers);

router.get("/:id",auth, getUserById);

router.post("/", createUser);

export default router;