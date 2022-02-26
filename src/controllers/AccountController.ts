import { Request, Response } from 'express';
import { Schema, model, Types } from 'mongoose';

interface Transaction {
  initiator: string;
  reciever: string;
  amount: number;
}

interface Account {
  owner: Types.ObjectId;
  amount: number;
  transactions?: [Transaction];
}

// Account Schema
const accountSchema = new Schema<Account>({
  owner: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  transactions: {
    type: [],
  },
});

const accountModel = model<Account>('Account', accountSchema);

export const getAllAccounts = async (req: Request, res: Response) => {
  const response = await accountModel.find({});
  return res.json(response);
};

export const createAccount = async (
  req: Request<{}, {}, Account>,
  res: Response
) => {
  const { amount, owner, transactions } = req.body;

  try {
    const doc = new accountModel({
      amount,
      owner: new Types.ObjectId(owner),
      transactions,
    });
    await doc.save();
    return res.json(doc);
  } catch (error) {
    return res.json({
      error: error,
    });
  }
};
