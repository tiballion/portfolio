import React from 'react';
import projects from '../data/projects.js';
import ProjectsItem from './ProjectsItem';

function Projects() {
    return (
        <div className="Projects">
            <h1>Projects</h1>
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