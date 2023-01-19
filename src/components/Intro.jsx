import React from "react"
import translation from "../data/translation"
import "./styles/intro.css"

function Intro({ lang }) {
  return (
    <div className="Intro">
      <h1 className="App-header">Timothée Ballion</h1>
      <h2 className="App-subheader">
        {lang === "en" ? translation.en.header : translation.fr.header}
      </h2>
      <div className="App-content">
        <p>{lang === "en" ? translation.en.bio : translation.fr.bio}</p>
      </div>
    </div>
  )
}

export default Intro
