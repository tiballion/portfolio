import React from 'react';

import projects from '../data/projects.js';
import ProjectsItem from './ProjectsItem';

import './styles/projects.css';

function Projects() {
    return (
        <div className="Projects">
            <h2>Featured projects</h2>
            <div className="Projects-content">
                { projects.map( (project) => (
                    <ProjectsItem
                        title={ project.title }
                        description={ project.description }
                        image={ project.image }
                        link={ project.link }
                    />
                ))}
            </div>
        </div>
    )
}

export default Projects