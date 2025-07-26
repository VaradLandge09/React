import { useState } from 'react'

function App() {

  const [color, setColor] = useState("olive");

  return (

    <div className='w-full h-screen'
    style={{backgroundColor: color}}>
      <div className='fixed rounded flex flex-wrap justify-center top-10 inset-x-0 px-4'>
        <div className='bg-white flex flex-wrap justify-center rounded-2xl p-2 gap-3 cursor-pointer'>
          <button className='bg-red-500 rounded-full px-3 py-2 outline-0'
          onClick={() => setColor("red")}
          >Red</button>

          <button className='bg-blue-500 rounded-full px-3 py-2'
          onClick={() => setColor("blue")}
          >Blue</button>

          <button className='bg-yellow-500 rounded-full px-3 py-2'
          onClick={() => setColor("yellow")}
          >Yellow</button>

          <button className='bg-green-500 rounded-full px-3 py-2'
          onClick={() => setColor("green")}
          >Green</button>

          <button className='bg-purple-500 rounded-full px-3 py-2'
          onClick={() => setColor("lavender")}
          >Lavender</button>

        </div>

      </div>
    </div>
  )
}

export default App
