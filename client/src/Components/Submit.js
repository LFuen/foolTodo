import React, {Component} from 'react'
import {SubmitDiv} from './Styled'


class Submit extends Component {

    state = {
        title: '',
        order: ''
    }

    newTitle = event => {
        this.setState({ title: event.target.value});
        };

    newOrder = event => {
        this.setState({ order: event.target.value});
        };

    clearForm = (e) => {
        e.preventDefault();
        this.setState({
            title: '',
            order: ''
        })
    }

    handleSubmit = async e => {
        e.preventDefault();

        let response = await fetch('http://localhost:5000/', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: this.state.title,
                order: this.state.order
            })
        })
        .then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    ).then((results) => {
        this.props.postTodo(results)
    });

    };

    render() {
        return(
        <SubmitDiv>
            <form onSubmit={this.handleSubmit} id='form' >
                <input defaultValue={this.state.title} onChange={this.newTitle} placeholder='Todo Item' required/>
                <input defaultValue={this.state.order} onChange={this.newOrder} placeholder='Order number' type='number' required/>
                <button type="submit" onClick={this.clearForm}>Submit</button>
            </form>
        </SubmitDiv>
        )
    }
}


export default Submit;