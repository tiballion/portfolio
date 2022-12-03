import React, {useState} from 'react'
import './App.css'
import Intro from './components/Intro'
import Projects from './components/Projects'
import Calendar from './components/Calendar'
import Contact from './components/Contact'

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
      <button className="langbutton" onClick={switchLang}>{flag}</button>
      <div className="App">
        <Intro lang={lang}/>
        <Projects lang={lang}/>
        <Contact />
        <Calendar />
      </div>
    </>
  )
}

export default App
