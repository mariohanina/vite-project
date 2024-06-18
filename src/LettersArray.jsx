function LettersArray({ letters }) {
    const randIndex = Math.floor(Math.random() * letters.length);
    const randLetter = letters[randIndex];

    return (
        <div>
            <h2>The array is: {letters}.</h2>
            <p>And the letter we picked is: {randLetter}.</p>
            <br />
        </div>
    )
}

export default LettersArray