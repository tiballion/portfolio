import React from "react"

import "./styles/projectsitem.css"

function ProjectsItem({
  title,
  description,
  description_fr,
  image,
  link,
  stack,
  lang,
}) {
  return (
    <div className="ProjectsItem">
      <h3> {title} </h3>
      <img src={image} alt={title} />
      <p style={{ marginBottom: "0px" }}>
        {lang === "en" ? description : description_fr}
      </p>
      <a href={link} target="_blank" rel="noreferrer">
        {" "}
        {link}{" "}
      </a>
      <p>
        {stack.map((item) => (
          <span>{item}</span>
        ))}
      </p>
    </div>
  )
}

export default ProjectsItem
