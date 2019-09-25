const { GraphQLSchema, GraphQLObjectType } = require('graphql');
const personSchemas = require('./person');
const bookSchemas = require('./book');

const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'RootQueryType',
        fields: {
            ...personSchemas.queries,
            ...bookSchemas.queries,
        },
    }),
    mutation: new GraphQLObjectType({
        name: 'RootMutationType',
        fields: {
            ...personSchemas.mutations,
            ...bookSchemas.mutations,
        },
    }),
});

module.exports = schema;