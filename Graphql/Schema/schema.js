const graphql = require('graphql');
const _ = require('lodash');
const { AuthenticationError } = require('apollo-server');

const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLList,
    GraphQLSchema
} = require('graphql');


let todos = [{
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

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addTodo: {
            type: TodoType,
            args: {
                task: { type: GraphQLString },
                _id: { type: GraphQLID },
            },
            resolve(parent, args) {
                let data = { task: args.task, _id: args._id };
                todos.push(data);
                return data;
            }
        },
        deleteTodo: {
            type: TodoType,
            args: {
                _id: { type: GraphQLID }
            },
            resolve(parent, args) {
                let _id = args._id;
                console.log(_id);
                throw new AuthenticationError("Checking Autsssh",{name:"Najam"})
                let previousData = todos.find(dataTodo => dataTodo._id == _id);
                todos = todos.filter(todoData => todoData._id != _id);
                console.log(todos);
                return previousData;
            }
        },
        editTodo: {
            type: TodoType,
            args: {
                _id: { type: GraphQLID },
                task: { type: GraphQLString }
            },
            resolve(parent, args) {
                let newObj = args;
                let indexOfTodo = _.findIndex(todos, { _id: 1 });
                console.log(indexOfTodo);
                todos[indexOfTodo] = newObj;
                return newObj;
            }
        }
    }
})






module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
})