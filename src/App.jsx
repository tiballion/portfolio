import React, {useState} from 'react'
import './App.css'
import Intro from './components/Intro'
import Projects from './components/Projects'
import Calendar from './components/Calendar'

function App() {

  const [lang, setLang] = useState('en')
  const [flag, setFlag] = useState('🇬🇧')

  const switchLang = () => {
    if (lang === 'en') {
      setLang('fr')
      setFlag('🇫🇷')
    } else {
      setLang('en')
      setFlag('🇬🇧')
    }
  }

  return (
    <>
      <button onClick={switchLang}>{flag}</button>
      <div className="App">
        <Intro lang={lang}/>
        <Projects />
        <Calendar />
      </div>
    </>
  )
}

export default App
