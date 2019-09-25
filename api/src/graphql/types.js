const {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
    GraphQLList,
    GraphQLEnumType,
} = require('graphql');

const ageRestrictionEnumType = new GraphQLEnumType({
    name: 'AgeRestrictionEnumType',
    values: {
        child: { value: 5 },
        teen: { value: 13 },
        adult: { value: 18 },
    },
});

const personType = new GraphQLObjectType({
    name: 'Person',
    fields: {
        id: { type: GraphQLInt },
        fullName: { type: GraphQLString },
        age: { type: GraphQLInt },
        books: { type: GraphQLList(GraphQLInt) },
    }
});

const bookType = new GraphQLObjectType({
    name: 'Book',
    fields: {
        id: { type: GraphQLInt },
        title: { type: GraphQLString },
        author: { type: GraphQLString },
        pageNumber: { type: GraphQLInt },
        ageRestriction: { type: ageRestrictionEnumType },
    }
});

module.exports = {
    ageRestrictionEnumType,
    personType,
    bookType,
};