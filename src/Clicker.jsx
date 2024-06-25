function Clicker({ buttonText, alertMessage }) {
    return (
        <button onClick={() => alert(alertMessage)}>
            {buttonText}
        </button>
    )
}

export default Clicker