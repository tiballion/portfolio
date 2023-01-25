import React from "react"

import GitHubCalendar from "react-github-calendar"

import "./styles/calendar.css"

function Calendar() {
  const handleClick = () => {
    window.open("https://github.com/tiballion", "_blank")
  }

  return (
    <div
      className="Calendar"
      onClick={handleClick}
      style={{ cursor: "pointer" }}
    >
      <GitHubCalendar username="tiballion" />
    </div>
  )
}

export default Calendar
