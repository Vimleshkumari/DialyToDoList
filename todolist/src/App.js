import logo from './logo.svg';
import './App.css';
import ToDoList from './ToDoList';
import Input from './Input';
import { useState } from 'react';
import TableToDo from './TableToDo';

function App() {

  const [input, setInput] = useState('')
  const [list, setList] = useState([])

  const ListStyle = {
    margin: "100px",
    display: "flex",
    justifyContent: "center",
    flexDirection:"column",
    width:"fit-content"
    // alignItems: "center"
  }

  const handleInput = (inp) => {
    setInput(inp.target.value)
  }

  const handleSubmit = () => {
    setList([...list, input])
    setInput("")
  }

  const handleEntered = (e) => {
    console.log(e)
    if (e.key === "Enter") {
      handleSubmit()
    }

  }


  return (
    <div className="App" style={ListStyle}>
      <div>Add your favourite items to list or table</div>
      <Input handleInput={handleInput} input={input} handleSubmit={handleSubmit} handleEntered={handleEntered} />
      <div>{list.length ? <ToDoList list={list} /> : <div>"No Item Added to the List"</div>}</div>
      <div >{list.length ? <TableToDo list={list} /> : <div>"No Item Added to the List"</div>}</div>

    </div>
  );
}

export default App;
