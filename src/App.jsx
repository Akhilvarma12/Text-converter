import { useState } from 'react'
import Textform from'./Textform.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Textform/>
    </>
  )
}

export default App
