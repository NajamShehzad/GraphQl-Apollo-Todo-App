import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo'
import './todo.css'
import { getAllTodos, deleteTodo, editTodo } from '../../queries/query';



class Todo extends Component {





    deleteTodo = (_id) => {
        this.props.deleteTodo({
            variables: {
                _id: _id
            },
            refetchQueries: [{ query: getAllTodos }]
        })


    }

    editTodo = () => {
        try {
            this.props.editTodo({
                variables: {
                    _id: 2,
                    task: "edit task"
                },
                refetchQueries: [{ query: getAllTodos }]
            })
        } catch (err) {
            console.log(err);
        }
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
                            <button onClick={this.editTodo} >
                                Eidt
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

export default compose(
    graphql(getAllTodos, { name: "getAllTodos" }),
    graphql(deleteTodo, { name: "deleteTodo" }),
    graphql(editTodo, { name: "editTodo" })
)(Todo);