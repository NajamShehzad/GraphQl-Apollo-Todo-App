import React, { Component } from 'react';
import Input from './components/input/Input';
import './app.css'
import Todo from './components/todo/Todo';

class App extends Component {
  state = {
    text: ""
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
            <button className="addButton">
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

export default App;
