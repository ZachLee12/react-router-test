import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Link } from 'react-router-dom'
import './App.css'
function App() {

  return (
    <div className="App">
      <h1>App</h1>
      <h3><Link to={'/other-page'}>Go to other page</Link></h3>

    </div>
  )
}

export default App
