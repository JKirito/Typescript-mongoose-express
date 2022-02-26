import express, { Request, Response } from 'express';
import { connect } from 'mongoose';
import { accountRouter } from './routers/AccountRouter';
import usersRouter from './routers/UsersRouter';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

async function connectToMongo() {
  await connect('mongodb://localhost:27017/test'); // await doc.save();
}

connectToMongo();

app.use('/users', usersRouter);
app.use('/accounts', accountRouter);

app.listen(3000, () => {
  console.log(`Application listening at port ${3000}`);
});
