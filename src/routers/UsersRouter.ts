import express, { Request, Response } from 'express';
import { createNewUser, getAllUsers } from '../controllers/UsersController';
const usersRouter = express.Router();

usersRouter.get('/', getAllUsers);
usersRouter.post('/create', createNewUser);

export default usersRouter;
