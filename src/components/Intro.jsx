import React from 'react';

import './styles/intro.css';


function Intro() {
  return (
    <div className='Intro'>
      <h1 className="App-header">Timothée Ballion</h1>
      <h2 className="App-subheader">Computer science student</h2>
      <div className="App-content">
        <p>
            Hello, I'm Timothée ! and I'm a computer science student at the University of Bordeaux in France.
            I started my developer journey when I was 14 years old in 9th grade by making simple apps in visual basic.
            I then quickly changed to C# and Python to continue making apps.
            After I gratuated from high school, I joined the University of Bordeaux to study computer science.
            Lately, I've discovered web development and I'm currently learning to use Javascript frameworks.
        </p>
      </div>
    </div>
  );
}

export default Intro;