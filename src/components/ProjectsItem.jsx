import React from 'react';
import './styles/projectsitem.css'

function ProjectsItem( { title, description, image, link } ) {
    return (
        <div className="ProjectsItem">
            <p> { title } </p>
            <p> { description } </p>
            <img src={ image } alt={ title } />
            <a href={ link } target="_blank" rel="noreferrer"> { link } </a>
        </div>
    )
}

export default ProjectsItem