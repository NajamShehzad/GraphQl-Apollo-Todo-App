import React, { Component } from 'react';
import { graphql } from 'react-apollo'
import './todo.css'
import { getAllTodos } from '../../queries/query';



class Todo extends Component {
    showList = () => {
        let data = this.props.data;
        if (data.loading) {
            return null
        } else {
            return (
                data.todos.map(todoData => {
                    return (
                        <li key={todoData._id} className="listItem" >
                            {todoData.task}
                            <button>
                                Delete
                        </button>
                        </li>
                    )
                })
            );
        }
    }

    render() {
        console.log(this.props)
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

export default graphql(getAllTodos)(Todo);