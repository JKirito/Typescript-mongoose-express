# Typescript-mongoose-express
Using Typescript with mongoose to add data to a mongo DB.

Learned and used Mongo Aggregation.

## Steps To Run
docker run -p 27017:27017 mongo

1) yarn install
2) yarn dev
3) Test the api on localhost:3000

API paths:- 
- /users/
- /users/create - {name: string,email:string,accounts: [string],age: number}
- /accounts/
- /accounts/createAccount - {amount: number,transaction: [Schema.Types.ObjectId], owner: Schema.Types.ObjectId}
