import React, {Component} from 'react'
import { TodoItem, Individual } from './Styled';


class Todo extends Component {

  onCompleted = async (e, id) => {
    e.preventDefault();

    let response = await fetch(`http://localhost:5000/${id}`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        completed: true
      }) 
    }).then((results) => {
      this.props.onCompleted(id)
  })
  };

    deleting = async (e, id) => {
      e.preventDefault();

      let response = await fetch(`http://localhost:5000/${id}`, {
        method: "DELETE",
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then((results) => {
        this.props.deleting(id)
    });
  };

    render(){
        const {todos} = this.props;
        console.log(todos, "THESE ARE TODOS")
        return(
          <TodoItem>
            <h3>TODO</h3>
            {todos.map(todo => {
                if(todo.completed === false){
                    return (
                    <Individual key={todo.id}>
                      <h3>{todo.title}</h3>
                      <input type='checkbox' onChange={(e) => this.onCompleted(e, todo.id)}/>
                      <br/> 
                      <button onClick={(e) => this.deleting(e, todo.id)}>Delete</button>       
                    </Individual>);
                }})}     
          </TodoItem>
        );
      }
    }


export default Todo