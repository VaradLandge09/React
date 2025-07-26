import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Chai from './components/Chai'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='bg-green-500 p-4 rounded-2xl text-white mb-1'>Tailwind test</h1>
    <Chai username={"varad"} age={21} />
    <Chai username={"Don"} age={24} />
    </>
  )
}

export default App
