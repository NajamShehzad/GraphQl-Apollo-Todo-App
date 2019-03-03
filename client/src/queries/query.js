import { gql } from 'apollo-boost';


const getAllTodos = gql`
{
    todos{
        task
        _id
    }
}
`

const addTodo = gql`
mutation($_id:ID!,$task:String!){
    addTodo(_id:$_id,task:$task){
        task
        _id
    }
}

`

const deleteTodo = gql`
mutation($_id:ID!){
    deleteTodo(_id:$_id){
        _id
        task
    }
}
`

const editTodo = gql`
mutation($_id:ID!,$task:String!){
    editTodo(_id:$_id,task:$task){
        _id
        task
    }
}

`



export { getAllTodos, addTodo, deleteTodo, editTodo };