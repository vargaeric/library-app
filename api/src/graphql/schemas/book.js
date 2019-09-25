const { GraphQLString, GraphQLInt, GraphQLList } = require('graphql');
const crudOperations = require('../../sequelize/operations/crudOperations');
const Book = require('../../sequelize/models/book');
const { ageRestrictionEnumType, bookType } = require('../types');

const queries = {
    findAllBooks: {
        type: GraphQLList(bookType),
        resolve: () => crudOperations(Book).findAll(),
    },
};

const mutations = {
    createBook: {
        type: bookType,
        args: {
            title: { type: GraphQLString },
            author: { type: GraphQLString },
            pageNumber: { type: GraphQLInt },
            ageRestriction: { type: ageRestrictionEnumType },
        },
        resolve: (parent, args) => crudOperations(Book).create(args),
    },
    editBook: {
        type: bookType,
        args: {
            id: { type: GraphQLInt },
            title: { type: GraphQLString },
            author: { type: GraphQLString },
            pageNumber: { type: GraphQLInt },
            ageRestriction: { type: ageRestrictionEnumType },
        },
        resolve: (parent, args) => crudOperations(Book).edit(args),
    },
    removeBook: {
        type: bookType,
        args: { 
            id: { type: GraphQLInt },
        },
        resolve: (parent, args) => crudOperations(Book).remove(args),
    },
};

module.exports = {
    queries,
    mutations,
};