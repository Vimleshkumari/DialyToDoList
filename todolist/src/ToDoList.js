const ToDoList = ({ list }) => {
    return (
        <>< ul >
            {list.map((ele, id) => {
                return <li key={id}>{ele}</li>
            })}
        </ul >

        </>
    )
}

export default ToDoList