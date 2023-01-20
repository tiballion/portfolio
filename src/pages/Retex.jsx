import { Link, useParams } from "react-router-dom"
import retex from "../data/retex"
import "./Retex.css"

export default () => {
  const { id } = useParams()
  if (!retex[id - 1])
    return (
      <>
        <h1>Retex not found</h1>
        <h4>Please make sure the number you entered is correct</h4>
      </>
    )
  return (
    <div className="Retex">
      <Link to="/" className="arrow">
        ←
      </Link>
      <div className="title">
        <h1>{retex[id - 1].title}</h1>
      </div>
      <h3>{retex[id - 1].description}</h3>
      <div className="info">
        <p className="stack">
          {" "}
          Technologies utilisées :
          {retex[id - 1].stack.map((item) => (
            <span>{item}</span>
          ))}
        </p>
        {retex[id - 1].link && (
          <a href={retex[id - 1].link} target="_blank">
            <button className="btn">{retex[id - 1].linktext}</button>
          </a>
        )}
      </div>
      <p className="stack">
        {" "}
        Compétences acquises :
        {retex[id - 1].skills.map((item) => (
          <span>{item}</span>
        ))}
      </p>
      <p className="details">{retex[id - 1].details}</p>
      <a href={retex[id - 1].link} target="_blank">
        <img
          src={retex[id - 1].image}
          alt={retex[id - 1].title}
          className="main-img"
        />
      </a>
    </div>
  )
}
