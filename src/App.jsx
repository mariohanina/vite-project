import './App.css'
import Chicken from './Chicken'
import Greeter from './Greeter'
import Die from './Die'
import LettersArray from './LettersArray'
import DoubleDiceGame from './DoubleDiceGame'


function App() {
  return (
    <>
      <Chicken />
      <Greeter person="Takada-chan" from="Uncle Mario" />
      <Die dieSides={12} />
      <LettersArray letters={["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K"]} />
      <DoubleDiceGame />
    </>
  )
}

export default App
