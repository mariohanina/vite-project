function Die({ dieSides = 6 }) {
    const dieRoll = Math.floor(Math.random() * dieSides) + 1;
    return (
        <div>
            <h2>Rolling {dieSides}-sided die. You got {dieRoll}!</h2>
            <br />
        </div>
    )
}

export default Die