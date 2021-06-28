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

    #delete {
        background: red;
        text-decoration: none;
        border-radius: 10px;
        padding: 0.5rem 1rem;
        font-weight: bold;
        font-family: Rockwell;
        margin-top: 15px;
        margin-bottom: 20px;
        border-style: none;
      }
      
      #delete:hover {
        transition: all 0.3s ease-out;
        background-color: #0d3b4c;
        color: whitesmoke;
        font-weight: bold;
        text-shadow: 2px 2px 2px #0d3b4c;
      }
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

    #delete {
        background: red;
        text-decoration: none;
        border-radius: 10px;
        padding: 0.5rem 1rem;
        font-weight: bold;
        font-family: Rockwell;
        margin-top: 15px;
        margin-bottom: 20px;
        border-style: none;
      }
      
      #delete:hover {
        transition: all 0.3s ease-out;
        background-color: #0d3b4c;
        color: whitesmoke;
        font-weight: bold;
        text-shadow: 2px 2px 2px #0d3b4c;
      }
`

const TodoDiv = styled.div`
    display: flex;
    justify-content: space-around;
`
const SubmitDiv = styled.div`
    width: 25%;    
    display: inline-block;
    text-align: center;

    label {
        font-weight: bold;
    }

    #submit {
        background: #b9e6ff;
        text-decoration: none;
        border-radius: 10px;
        padding: 0.5rem 1rem;
        font-weight: bold;
        font-family: Rockwell;
        margin-top: 15px;
        margin-bottom: 20px;
        border-style: none;
      }

      #submit:hover {
        transition: all 0.3s ease-out;
        background-color: #0d3b4c;
        color: whitesmoke;
        font-weight: bold;
        text-shadow: 2px 2px 2px #0d3b4c;
      }
`

export {
    TodoItem,
    CompletedTodo,
    TodoDiv,
    SubmitDiv,
    Individual,
    IndividualComp
}