const graphql = require('graphql');


const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLList,
    GraphQLSchema
} = require('graphql');


const todos = [{
        task: "New Book 1",
        _id: 1
    },
    {
        task: "New Book 2",
        _id: 2
    },
    {
        task: "New Book 3",
        _id: 3
    },
    {
        task: "New Book 4",
        _id: 4
    },
    {
        task: "New Book 5",
        _id: 5
    }
]

const TodoType = new GraphQLObjectType({
    name: "Todo",
    fields: () => ({
        _id: {
            type: GraphQLID
        },
        task: {
            type: GraphQLString
        }
    })
});

const RootQuery = new GraphQLObjectType({
    name: "RootQuery",
    fields: () => ({
        todos: {
            type: new GraphQLList(TodoType),
            resolve: (parent, args) => {
                return todos
            }
        }
    })
});

module.exports = new GraphQLSchema({
    query: RootQuery
})