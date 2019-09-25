const { GraphQLString, GraphQLInt, GraphQLList } = require('graphql');
const crudOperations = require('../../sequelize/operations/crudOperations');
const Person = require('../../sequelize/models/person');
const { personType } = require('../types');

const queries = {
    findAllPeople: {
        type: GraphQLList(personType),
        resolve: () => crudOperations(Person).findAll(),
    },
};

const mutations = {
    createPerson: {
        type: personType,
        args: {
            fullName: { type: GraphQLString },
            age: { type: GraphQLInt },
            books: { type: GraphQLList(GraphQLInt) },
        },
        resolve: (parent, args) => crudOperations(Person).create(args),
    },
    editPerson: {
        type: personType,
        args: {
            id: { type: GraphQLInt },
            fullName: { type: GraphQLString },
            age: { type: GraphQLInt },
            books: { type: GraphQLList(GraphQLInt) },
        },
        resolve: (parent, args) => crudOperations(Person).edit(args),
    },
    removePerson: {
        type: personType,
        args: { 
            id: { type: GraphQLInt },
        },
        resolve: (parent, args) => crudOperations(Person).remove(args),
    },
};

module.exports = {
    queries,
    mutations,
};