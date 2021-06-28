import React, { Component } from "react";
import { SubmitDiv } from "./Styled";

class Submit extends Component {
  state = {
    title: "",
    order: "",
  };

  newTitle = (event) => {
    this.setState({ title: event.target.value });
  };

  newOrder = (event) => {
    this.setState({ order: event.target.value });
  };

  clearForm = (e) => {
    e.preventDefault();
    this.setState({
      title: "",
      order: "",
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    this.clearForm(e);
    let response = await fetch("http://localhost:5000/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: this.state.title,
        order: this.state.order,
      }),
    })
      .then((res) =>
        !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
      )
      .then((results) => {
        this.props.postTodo(results);
      });
  };

  render() {
    return (
      <SubmitDiv>
        <form onSubmit={this.handleSubmit} id="form">
            <label htmlFor='title'>New Todo Item</label>
            <br/>
            <input
                name='title'
                value={this.state.title}
                onChange={this.newTitle}
                placeholder="Todo Item"
                required
            />
            <br/>
            <label htmlFor='order'>Order No.</label>
            <br/>
            <input
                name='order'
                value={this.state.order}
                onChange={this.newOrder}
                placeholder="Order number"
                type="number"
                required
            />
            <br/>
          <button type="submit" id='submit'>Submit</button>
        </form>
      </SubmitDiv>
    );
  }
}

export default Submit;
