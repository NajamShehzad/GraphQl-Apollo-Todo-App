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



export { getAllTodos ,addTodo};