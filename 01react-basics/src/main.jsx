import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

const reactElement = <>
    <h1>Hey, From react element</h1>
</>

function MyApp() {
  return <>
    <h1>Hey, from My APP</h1>
  </>
}

createRoot(document.getElementById('root')).render(
  <MyApp />
)
