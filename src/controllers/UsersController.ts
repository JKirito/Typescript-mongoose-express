import { Request, Response } from 'express';
import { Schema, model } from 'mongoose';
interface Users {
  name: string;
  age: number;
  email: string;
  accounts: string[];
}

// Schema
const userSchema = new Schema<Users>({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  accounts: {
    type: [String],
  },
});

// Model
const userModel = model<Users>('User', userSchema);

export const getAllUsers = async (req: Request, res: Response) => {
  //   const response = await userModel.find({});
  const response = await userModel.aggregate([
    {
      $lookup: {
        from: 'accounts',
        localField: 'accounts',
        foreignField: '_id',
        as: 'accounts',
      },
    },
  ]);
  return res.json(response);
  //   console.log(response);
  res.json(response);
};

export const createNewUser = async (
  req: Request<{}, {}, Users>,
  res: Response
) => {
  const { name, age, email, accounts } = req.body;
  console.log(name, age, email, accounts);
  const doc = new userModel<Users>({
    name,
    age,
    email,
    accounts,
  });

  await doc.save();
  //   console.log(`Document is `, doc);
  res.json(doc);
};
