const Input = ({ input, handleInput, handleSubmit, handleEntered }) => {
    return (
        <>
            <input value={input} onChange={handleInput} onKeyDown={handleEntered} style={{ marginTop: "10px" }} />
            <button type="button" onClick={handleSubmit} style={{ marginTop: "10px" }}>Add Item </button>
        </>
    )
}

export default Input