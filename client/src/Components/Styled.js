import styled, {keyframes} from 'styled-components'

const TodoItem = styled.section`
    display: inline-block;
    border: 4px solid black;
    background-color: #FE5F55;
    margin: 10px;
    padding: 5px;
    width: 50%;
    border-radius: 10px;
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
const TodoDiv = styled.div`
    display: flex;
    justify-content: space-around;
`

export {
    TodoItem,
    CompletedTodo,
    TodoDiv
}