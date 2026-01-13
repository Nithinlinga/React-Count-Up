import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AutoCounter from './AutoCounter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AutoCounter/>
    </>
  )
}

export default App
