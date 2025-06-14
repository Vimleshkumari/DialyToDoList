const Input = ({ input, handleInput, handleSubmit, handleEntered, buttonText }) => {
    return (
        <>
            <input value={input} onChange={handleInput} onKeyDown={handleEntered} style={{ marginTop: "10px" }} />
            <button type="button" onClick={handleSubmit} style={{ marginTop: "10px" }}>{buttonText} </button>
        </>
    )
}

export default Input