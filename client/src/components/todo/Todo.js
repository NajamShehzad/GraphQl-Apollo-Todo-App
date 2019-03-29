import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo'
import './todo.css'
import { getAllTodos, deleteTodo } from '../../queries/query';



class Todo extends Component {





    deleteTodo = (_id) => {
        this.props.deleteTodo({
            variables: {
                _id: _id
            },
            refetchQueries: [{ query: getAllTodos }]
        })


    }

    showList = () => {
        console.log("this.props", this.props)
        let data = this.props.getAllTodos;
        if (data.loading) {
            return null
        } else {
            return (
                data.todos.map(todoData => {
                    return (
                        <li key={todoData._id} className="listItem" >
                            {todoData.task}
                            <button onClick={() => { this.deleteTodo(todoData._id) }}>
                                Delete
                            </button>
                        </li>
                    )
                })
            );
        }
    }

    render() {
        return (
            <div className="todoDiv">
                list here
                <ul>
                    {this.showList()}
                </ul>
            </div>
        );
    }
}

export default compose(graphql(getAllTodos, { name: "getAllTodos" }), graphql(deleteTodo, { name: "deleteTodo" }))(Todo);