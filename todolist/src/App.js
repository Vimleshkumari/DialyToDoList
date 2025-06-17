import logo from './logo.svg';
import './App.css';
import ToDoList from './components/ToDoList';
import Input from './components/Input';
import { useEffect, useState } from 'react';
import TableToDo from './components/TableToDo';
import { Counter } from './features/counter/counter';

function App() {

  const [input, setInput] = useState('')
  const [list, setList] = useState([])
  const [editElement, setEditElement] = useState({ isEdit: false, currentIndex: null })
  const [buttonText, setButtonText] = useState("Add Item")
  const [selectedList, setSelectedList] = useState([])

  const ListStyle = {
    margin: "100px",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    width: "fit-content"
    // alignItems: "center"
  }

  const handleInput = (inp) => {
    setInput(inp.target.value)
  }

  const handleSubmit = () => {
    if (editElement?.isEdit) {
      let copy = list
      copy[editElement.currentIndex] = input
      // let newarray = copy.splice(editElement.currentIndex, 0, input);
      console.log("copy", copy);

      setList([...copy])
      setEditElement({ ...editElement, isEdit: false, currentIndex: null })
      setInput("")
      setButtonText("Add Item")

    } else {
      setList([...list, input])
      setInput("")
    }
  }

  const handleEntered = (e) => {
    if (e.key === "Enter") {
      handleSubmit()
    }
  }

  const handleDelete = (ind) => {
    let copy = [...list]
    const deletedItem = copy.splice(ind, 1)
    setList(copy)
    setButtonText("Add Item")
  }

  const handleEdit = (id) => {
    setEditElement({ ...editElement, isEdit: true, currentIndex: id })
    setInput(list[id])
    setButtonText("Update")
  }

  const handleCheck = (e) => {
    let index = parseInt(e.target.value)
    if (e.target.checked) {
      setSelectedList([...selectedList, index])
    }
    else {
      setSelectedList((prev) => prev.filter(i => i != index))
    }

  }

  const handleDeleteAll = () => {
    let arr = list.filter((ele, ind) => !selectedList.includes(ind))
    setList([...arr])
    setSelectedList([])
  }


  useEffect(() => {
    console.log("selected list", selectedList)
  }, [selectedList])


  return (
    <div className="App" style={ListStyle}>
      <div>Add your favourite items to list or table</div>
      {/* <Input handleInput={handleInput} input={input} handleSubmit={handleSubmit} handleEntered={handleEntered} buttonText={buttonText} handleCheck={handleCheck} handleDeleteAll={handleDeleteAll} /> */}
      {/* <div>{list.length ? <ToDoList list={list} handleDelete={handleDelete} handleEdit={handleEdit} handleCheck={handleCheck} /> : <div>"No Item Added to the List"</div>}</div> */}
      {/* <div >{list.length ? <TableToDo list={list} handleDelete={handleDelete} handleEdit={handleEdit} handleCheck={handleCheck} selectedList={selectedList}/> : <div>"No Item Added to the List"</div>}</div> */}
      <Counter />
    </div>
  );
}

export default App;
