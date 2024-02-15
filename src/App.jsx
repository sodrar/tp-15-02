import { useState } from 'react'
import { Picker } from './Picker'
import './App.css'
import { Clicker } from './Clicker'
import { Horloge } from './Horloge'
import { Chrono } from './Chrono'
import { ListString } from './ListString'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>CCH : Sofian BOUDRAA</h1>
      <Picker />
      <Clicker />
      <Horloge />
      <Chrono />
      <ListString />
    </>
  )
}

export default App
