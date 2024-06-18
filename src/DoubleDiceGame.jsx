function DoubleDiceGame() {
    const num1 = Math.floor(Math.random() * 3) + 1;
    const num2 = Math.floor(Math.random() * 3) + 1;

    return (
        <div>
            <h2>Double Dice</h2>
            {num1 === num2 ? <p>You win!</p> : <p>You lose dude!</p>}
            <p>{num1} : {num2}</p>
            <br />
        </div>
    );
}

export default DoubleDiceGame