import { Link, useParams } from "react-router-dom"
import retex from "../data/retex"
import "./Retex.css"

export default () => {
  const { id } = useParams()
  if (!retex[id])
    return (
      <>
        <h1>Retex not found</h1>
        <h4>Please make sure the query parameter is a number and is correct</h4>
        <Link to="/" class="btn-index-error">
          Go back
        </Link>
      </>
    )
  return (
    <div className="Retex">
      <Link to="/" className="arrow">
        ←
      </Link>
      <div className="title">
        <h1>{retex[id].title}</h1>
      </div>
      <h3>{retex[id].description}</h3>
      <div className="info">
        <p className="stack">
          {" "}
          Technologies utilisées :
          {retex[id].stack.map((item) => (
            <span>{item}</span>
          ))}
        </p>
        {retex[id].link && (
          <a href={retex[id].link} target="_blank">
            <button className="btn">{retex[id].linktext}</button>
          </a>
        )}
      </div>
      <p className="stack">
        {" "}
        Compétences acquises :
        {retex[id].skills.map((item) => (
          <span>{item}</span>
        ))}
      </p>
      <p className="details">{retex[id].details}</p>
      <a href={retex[id].link} target="_blank">
        <img src={retex[id].image} alt={retex[id].title} className="main-img" />
      </a>
    </div>
  )
}
