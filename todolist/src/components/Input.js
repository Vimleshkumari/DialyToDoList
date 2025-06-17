const Input = ({ input, handleInput, handleSubmit, handleEntered, buttonText, handleDeleteAll }) => {
    return (
        <>
            <input value={input} onChange={handleInput} onKeyDown={handleEntered} style={{ marginTop: "10px" }} />
            <button type="button" onClick={handleSubmit} style={{ marginTop: "10px" }} disabled={!input.length}>{buttonText} </button>
            <button type="button" onClick={handleDeleteAll}>Delete All</button>
        </>
    )
}

export default Input