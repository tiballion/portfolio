import React from "react"
import { Link } from "react-router-dom"

import "./styles/projectsitem.css"

function ProjectsItem({
  index,
  title,
  description,
  description_fr,
  image,
  link,
  linktext,
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
        {linktext}{" "}
      </a>
      <p>
        {stack.map((item) => (
          <span>{item}</span>
        ))}
      </p>
      <Link to={`/retex/${index}`} className="btn-see-more">
        {lang === "en" ? "See more" : "Voir plus"}
      </Link>
    </div>
  )
}

export default ProjectsItem
