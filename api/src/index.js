const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./graphql/schemas');

const app = express();

const PORT = 3000;

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
}));

app.use('/', (req, res) => {
    res.send('Hello Erik!');
});

app.listen(PORT, () => {
    console.log(`You are currently listening to port nr.${PORT}...`);
});