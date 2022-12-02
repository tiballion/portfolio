import React from 'react'
import './App.css'
import Intro from './components/Intro'
import Projects from './components/Projects'
import Calendar from './components/Calendar'

function App() {
  return (
    <>
      <div className="App">
        <Intro />
        <Projects />
        <Calendar />
      </div>
    </>
  )
}

export default App
