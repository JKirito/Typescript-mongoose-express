import express from 'express';
import {
  createAccount,
  getAllAccounts,
} from '../controllers/AccountController';

export const accountRouter = express.Router();

accountRouter.get('/', getAllAccounts);
accountRouter.post('/createAccount', createAccount);
