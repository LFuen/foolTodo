import React, { Component } from "react";
import Todo from "./Todo";
import Completed from "./Completed";
import Submit from "./Submit";
import { TodoDiv } from "./Styled";
import "../App.css";

class App extends Component {
  state = {
    todos: [],
  };

  async componentDidMount() {
    let request = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };

    var response = await fetch("http://localhost:5000/", request);
    let json = await response.json();
    this.setState({ todos: json });
  }

  onCompleted = (id) => {
    const todos = this.state.todos.map((todo) => {
      if (todo.id !== id) return todo;
      else return { ...todo, id, completed: true };
    });
    this.setState({ todos });
  };

  postTodo = (input) => {
    this.setState({
      todos: [...this.state.todos, input],
    });
  };

  deleting = (id) => {
    const todos = this.state.todos.filter((todo) => {
      return id !== todo.id;
    });
    this.setState({
      todos,
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Things To Get Done</p>
        </header>

        <Submit postTodo={this.postTodo} />
        <TodoDiv>
          <Todo
            onCompleted={this.onCompleted}
            todos={this.state.todos}
            deleting={this.deleting}
          />
          <Completed todos={this.state.todos} deleting={this.deleting} />
        </TodoDiv>
      </div>
    );
  }
}

export default App;
