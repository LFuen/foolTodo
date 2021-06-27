import React, {Component} from 'react'
import {CompletedTodo, IndividualComp} from './Styled'


class Completed extends Component {

      async componentDidMount() {
        let request = {
          method: "GET",
          headers: {
            'Content-Type': 'application/json',
          }
        };
    
        var response = await fetch('http://localhost:5000/', request);
        let json = await response.json();
        this.setState({todos: json});
      }

      
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
        return(
          <CompletedTodo>
            <h3>COMPLETED</h3>
            {todos.map(todo => {
                if( todo.completed === true){
                    return (<IndividualComp key={todo.id}>
                      <h3>{todo.title}</h3>
                      <button onClick={(e) => this.deleting(e, todo.id)}>Delete</button> 
                    </IndividualComp>);
                }})}
          </CompletedTodo>
        );
      }
    }


export default Completed