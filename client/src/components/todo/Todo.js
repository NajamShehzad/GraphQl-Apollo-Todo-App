import React, { Component } from 'react';
import './todo.css'

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

class Todo extends Component {
    showList = () => {
        return (
            todos.map(todoData => {
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

    render() {
        return (
            <div className="todoDiv">
                <ul>
                    {this.showList()}
                </ul>
            </div>
        );
    }
}

export default Todo;