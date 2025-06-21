import React from 'react'

export default function SearchInput({ SearchInput, handleChange }) {
    const mainStyle = {
        display: "flex",
        flexDirection: "column",
        gap: "5px"
    }
    return (
        <div style={mainStyle}>
            <label>Please fell free to search items</label>
            <input type='text' placeholder='Search text' onChange={handleChange} value={SearchInput} style={{ margin: "5px", padding: "8px" }} />
        </div>
    )
}
