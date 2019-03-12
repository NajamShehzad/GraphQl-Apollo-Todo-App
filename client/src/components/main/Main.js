import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import Input from '../input/Input';
import Todo from '../todo/Todo';
import { addTodo, getAllTodos } from '../../queries/query';


class Main extends Component {
    state = {
        text: ""
    }
    addTodo = () => {
        console.log(this.state);
        console.log(this.props);
        let number = Date.now();
        console.log(number);
        this.props.addTodo({
            variables: {
                task: this.state.text,
                _id: number
            }, refetchQueries: [{ query: getAllTodos }]
        })
    }

    render() {
        return (
            <div className="App">
                <div className="headingDiv">
                    <h1>
                        Todo App Using Apollo
            </h1>
                </div>
                <div className="inputDiv">
                    <div>
                        <Input text={this.state.text} onChange={(e) => this.setState({ text: e.target.value })} />
                    </div>
                    <div>
                        <button className="addButton" onClick={this.addTodo}>
                            +
            </button>
                    </div>
                </div>
                <div>
                    <Todo />
                </div>
            </div>
        );
    }
}

export default compose(
    graphql(addTodo, { name: "addTodo" }),
    graphql(getAllTodos, { name: "getAllTodos" })
)(Main);