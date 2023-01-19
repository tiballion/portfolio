import React, { useState } from "react"
import "./App.css"
import Intro from "./components/Intro"
import Projects from "./components/Projects"
import Calendar from "./components/Calendar"
import Footer from "./components/Footer"

function App() {
  const [lang, setLang] = useState("en")
  const [flag, setFlag] = useState("🇬🇧")

  const switchLang = () => {
    if (lang === "en") {
      setLang("fr")
      setFlag("🇫🇷")
    } else {
      setLang("en")
      setFlag("🇬🇧")
    }
  }

  return (
    <>
      <button className="langbutton" onClick={switchLang}>
        {flag}
      </button>
      <div className="App">
        <Intro lang={lang} />
        <Projects lang={lang} />
        <Calendar />
        <Footer />
      </div>
    </>
  )
}

export default App
