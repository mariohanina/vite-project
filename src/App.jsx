import './App.css'
import Chicken from './Chicken'
import Greeter from './Greeter'
import Die from './Die'
import LettersArray from './LettersArray'
import DoubleDiceGame from './DoubleDiceGame'
import Clicker from './Clicker'


function App() {
  return (
    <>
      {/* <Chicken /> */}
      {/* <Greeter person="Takada-chan" from="Uncle Mario" /> */}
      {/* <Die dieSides={12} /> */}
      {/* <LettersArray letters={["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K"]} /> */}
      {/* <DoubleDiceGame /> */}
      <Clicker buttonText="Click me" alertMessage="Yes, yes!" />
      <Clicker buttonText="Do not click me" alertMessage="Please stop clicking me!" />
    </>
  )
}

export default App
