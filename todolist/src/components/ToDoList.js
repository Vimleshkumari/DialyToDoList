const ToDoList = ({ list, handleDelete, handleEdit }) => {
    return (
        <>< ul >
            {list.map((ele, id) => {
                return <li key={id}><span>{ele}</span><button style={{ marginLeft: "10px" }} onClick={() => handleEdit(id)}>Edit</button>
                    <button style={{ marginLeft: "10px" }} onClick={() => handleDelete(id)}>Delete</button></li>
            })}
        </ul >

        </>
    )
}

export default ToDoList