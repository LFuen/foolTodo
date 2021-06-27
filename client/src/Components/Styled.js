import styled from 'styled-components'

const TodoItem = styled.section`
    display: inline-block;
    border: 4px solid black;
    background-color: #FE5F55;
    margin: 10px;
    padding: 5px;
    width: 50%;
    border-radius: 10px;
`
const Individual = styled.div`
    background-color: grey;
    border: 2px solid whitesmoke;
    margin: 20px;
    padding: 10px;
`

const CompletedTodo = styled.section`
    display: inline-block;
    border: 4px solid black;
    background-color: #94C9A9;
    margin: 10px;
    padding: 5px;
    width: 50%;
    border-radius: 10px;
`
const IndividualComp = styled.div`
    background-color: whitesmoke;
    border: 2px solid grey;
    margin: 20px;
`

const TodoDiv = styled.div`
    display: flex;
    justify-content: space-around;
`
const SubmitDiv = styled.div`
    display: inline-block;
`

export {
    TodoItem,
    CompletedTodo,
    TodoDiv,
    SubmitDiv,
    Individual,
    IndividualComp
}