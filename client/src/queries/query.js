import { gql } from 'apollo-boost';


const getAllTodos = gql`
{
    todos{
        task
        _id
    }
}
`



export { getAllTodos };