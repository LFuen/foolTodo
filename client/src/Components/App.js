import React, { Component } from 'react';
import logo from './logo.svg';
import Todo from './Todo';
import Completed from './Completed';
import {TodoItem, CompletedTodo, TodoDiv} from '../Styled';
import './App.css';

class App extends Component {
  state = {
    title: '',

    response: [],
  };
  
  handleSubmit = async e => {
    e.preventDefault();
    let { method, id, title, order, completed } = this.state;
    
    let request = {
      method,
      headers: {
        'Content-Type': 'application/json',
      }
    };

    // Undefined ensures not changing to empty string.
    title = title ? title : undefined;
    order = order ? Number(order) : undefined;

    if (method !== "GET")
      request.body = JSON.stringify({ title, order, completed })

    this.setState({ lastRequest: `${method} at /${id}`});
    // Code smells, but the setup of todo-backend with get('/') returning a list of todos requires
    // that we directly hit localhost instead of being able to rely on the proxy.
    // We can only proxy non-root gets.
    let response;
    if (process.env.NODE_ENV === "development" && method === "GET" && id === '') {
      response = await fetch('http://localhost:5000/', request);
    } else {
      response = await fetch(`/${id}`, request);
    }

    const contentType = response.headers.get('content-type');

    let body;
    if (contentType && contentType.includes('application/json')) {
      body = await response.json();
    } else if (contentType && contentType.includes('text/html')) {
      body = await response.text();
    }

    if (response.status !== 200) {
      console.log(body);
      this.setState({ response: [{ status: response.status, message: body }] });
      return;
    }

    // Ensures formart of [{}, {}, {}]
    if (!Array.isArray(body))
      body = Array(body);
  
    this.setState({ response: body });
  };

  changeMethod = event => {
    this.setState({ method: event.target.value });
  };
  
  render() {

    const {response } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Powered by React
          </p>
        </header>

        <form onSubmit={this.handleSubmit} id='form'>
          <input placeholder='Todo Item'/>
          <button type="submit">Submit</button>

        </form>
        <section id='results'>
          <p>
            {
              response.map((todo, i) => {
                return (
                  <li key={i}>
                    { 
                      todo ? Object.entries(todo).map(([key, value]) => {
                        return `${key}: ${value}   `
                      }) : undefined
                    }
                  </li>
                )
              })
            }
          </p>
        </section>
        <TodoDiv>
          <TodoItem>
              <h3>Todo</h3>
              <Todo />
          </TodoItem>
          <CompletedTodo>
              <h3>Completed</h3>
              <Completed />
          </CompletedTodo>
        </TodoDiv>
      </div>
    );
  }
}

export default App;