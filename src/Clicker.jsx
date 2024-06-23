function Clicker({ buttonText, alertMessage }) {
    const alertUser = () => {
        alert(alertMessage)
    }

    return (
        <button onClick={alertUser}>
            {buttonText}
        </button>
    )
}

export default Clicker