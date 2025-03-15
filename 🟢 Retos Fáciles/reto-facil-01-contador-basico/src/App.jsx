import { useState } from 'react'
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);

  const increaseByOne = () => setCounter(counter + 1)

  const Display = (props) => {
    console.log(props.counter)
    return(
      <div>
        <p className='pb-5 text-2xl'>Contador {props.counter}</p>
      </div>
    )
  }

  const Button = (props) => {
    return (
      <button onClick={props.onClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer">
        Aumentar Contador
      </button>
    )
  }


  return (
    <div className='grid justify-items-center pt-20'>
      <h1 className="text-3xl font-bold underline pb-10"> Reto 1 Contador Básico</h1>
      <Display counter = {counter} />
      <Button onClick={increaseByOne} />
    </div>
  )
}

export default App
