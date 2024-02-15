import { useState } from 'react'
import { Picker } from './Picker'
import './App.css'
import { Clicker } from './CLicker'
import { Horloge } from './Horloge'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>CCH : Sofian BOUDRAA</h1>
      <Picker />
      <Clicker />
      <Horloge />
    </>
  )
}

export default App
