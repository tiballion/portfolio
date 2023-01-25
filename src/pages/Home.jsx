import React, { useState } from "react"
import "./Home.css"
import Intro from "../components/Intro"
import Projects from "../components/Projects"
import Calendar from "../components/Calendar"
import Footer from "../components/Footer"

function Home() {
  const [lang, setLang] = useState("en")

  const switchLang = () => {
    lang === "en" ? setLang("fr") : setLang("en")
  }

  return (
    <>
      <button className="langbutton" onClick={switchLang}>
        {lang == "en" ? "🇫🇷" : "🇬🇧"}
      </button>
      <div className="Home">
        <Intro lang={lang} />
        <Projects lang={lang} />
        <Calendar />
        <Footer />
      </div>
    </>
  )
}

export default Home
