const TableToDo = ({ list, handleDelete, handleEdit }) => {
    const tableStyle = {
        border: "1px solid",
        borderCollapse: "collapse",
        padding: "5px"
    }
    const tableRowStyle = {
        border: "1px solid",
        padding: "5px"
    }

    return (
        < table style={tableStyle} >
            <thead>
                <tr style={tableRowStyle}>
                    <th style={tableRowStyle}>Item Number</th>
                    <th style={tableRowStyle}>Item Name</th>
                    <th style={tableRowStyle}>Item Edit</th>
                    <th>Item Delete</th></tr>
            </thead>
            <tbody>
                {list.map((ele, id) => {
                    return <tr key={id} style={tableRowStyle}>
                        <td style={tableRowStyle}>{id + 1}</td>
                        <td style={tableRowStyle}>{ele}</td>
                        <td style={tableRowStyle}><button onClick={() => handleEdit(id, true)}>Edit</button></td>
                        <td><button onClick={() => handleDelete(id)}>Delete</button></td></tr>
                })}
            </tbody>
        </table >

    )
}

export default TableToDo