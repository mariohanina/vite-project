function Greeter(props) {
    return (
        <div>
            <h2>Hello {props.person}! Greetings from {props.from}.</h2>
            <br />
        </div>
    )
}

export default Greeter