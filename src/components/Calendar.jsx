import React from "react"

import GitHubCalendar from "react-github-calendar"

import "./styles/calendar.css"

function Calendar() {
  return (
    <div className="Calendar">
      <GitHubCalendar username="tiballion" />
    </div>
  )
}

export default Calendar
