import React, { Component } from 'react';
import Todo from './Todo';
import Completed from './Completed';
import {TodoItem, CompletedTodo, TodoDiv} from './Styled';
import '../App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Things To Get Done
          </p>
        </header>

        <TodoDiv>
          <Todo />
          <Completed />
        </TodoDiv>
      </div>
    );
  }
}

export default App;