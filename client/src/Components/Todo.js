import React, {Component} from 'react'
import { TodoItem } from './Styled';


class Todo extends Component {

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

        if (!Array.isArray(body))
          body = Array(body);
      
        this.setState({ response: body });
      };
    
      changeMethod = event => {
        this.setState({ method: event.target.value });
      };


    render(){

        const {response } = this.state;

        return(
            <TodoItem>
                <h3>Todo</h3>
                <form onSubmit={this.handleSubmit} id='form'>
                    <input placeholder='Todo Item'/>
                    <button type="submit">Submit</button>
                </form>
                <article>
                    <p>{}</p>
                </article>
            </TodoItem>
        )
    }
}


export default Todo