import styled, {keyframes} from 'styled-components'

const TodoItem = styled.section`
    display: inline-block;
    border: 4px solid black;
    background-color: red;
    margin: 10px;
    padding: 5px;
    width: 50%;
`
const CompletedTodo = styled.section`
    display: inline-block;
    border: 4px solid black;
    background-color: green;
    margin: 10px;
    padding: 5px;
    width: 50%;
`
const TodoDiv = styled.div`
    display: inline-block;
    width: 80%;
`

export {
    TodoItem,
    CompletedTodo,
    TodoDiv
}