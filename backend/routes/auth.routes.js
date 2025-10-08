
import {Router } from 'express';
import { loginUser, signUpUser } from '../controllers/auth.controller.js';

const authRouter = Router();

authRouter.post("/login", loginUser);
authRouter.post("/signup", signUpUser);

export default authRouter