import React from 'react';

import projects from '../data/projects.js';
import translation from '../data/translation.js';
import ProjectsItem from './ProjectsItem';

import './styles/projects.css';

function Projects( {lang} ) {
    return (
        <div className="Projects">
            <h2>
                {lang === 'en' ? translation.en.projects : translation.fr.projects}
            </h2>
            <div className="Projects-content">
                { projects.map( (project) => (
                    <ProjectsItem
                        title={ project.title }
                        description={ project.description }
                        image={ project.image }
                        link={ project.link }
                        stack={ project.stack}
                    />
                ))}
            </div>
            <h3>
            {lang === 'en' ? translation.en.projectsgit : translation.fr.projectsgit} : <a href="https://github.com/tiballion" target="_blank" rel="noopener noreferrer" >github.com/tiballion</a>
            </h3>
        </div>
    )
}

export default Projects