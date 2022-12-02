import React from 'react';

import './styles/projectsitem.css'

function ProjectsItem( { title, description, image, link } ) {
    return (
        <div className="ProjectsItem">
            <p> { title } </p>
            <img src={ image } alt={ title } />
            <p> { description } </p>
            <a href={ link } target="_blank" rel="noreferrer"> { link } </a>
        </div>
    )
}

export default ProjectsItem