const express = require("express");
const graphqlHttp = require('express-graphql');
const mongoose = require('mongoose');
const graphqlSchema = require('./schema');
const graphqlResolvers = require('./resolvers');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.get('/', (req, res, next) => {
    res.send('<h1>Welcome to graphql server!</h1>');
});

app.use('/graphql', graphqlHttp({
    schema: graphqlSchema,
    rootValue: graphqlResolvers,
    graphiql: true,
}));

const user = process.env.ME;
const pass = process.env.PASS;
const db = process.env.DATABASE;
const port = process.env.PORT;

mongoose.connect(`mongodb://${user}:${pass}@ds153730.mlab.com:53730/${db}`, { useNewUrlParser: true })
.then(() => {
    console.log(`Server is running on port ${port}`);
    app.listen(port);
}).catch(err => {
    console.log(err);
});