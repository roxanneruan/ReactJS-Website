import React from 'react'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import EmailIcon from '@material-ui/icons/Email'
import GithubIcon from '@material-ui/icons/GitHub'
import '../styles/Home.css'

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi I'm Roxanne </h2>
        <div className="prompt"> 
        <p> UI/UX Design | Front-End Development | Software Engineer </p>
        <LinkedInIcon />
        <EmailIcon />
        <GithubIcon />
        
        </div>
      </div>
      <div className="skills">
        <h1> Skills </h1>
        <ol className="list">
          <li className="item">
            <h2> UX / Front-End </h2>
            <span> 
              Currently self-learning ReactJS, HTML, CSS. Figma, User-Research, User-Testing, Wireframing, Prototyping.
            </span>
          </li>
          <li className="item">
            <h2> Languages / Tools </h2>
            <span> 
              C, C++, C#, Unity, Object-Oriented Programming, Python, JSON, Git, ReactJS, HTML, CSS, Figma. Currently studying for AWS Cloud Computing Certificate.
            </span>
          </li>
          <li className="item">
            <h2> Soft Skills </h2>
            <span> 
              Teamwork, Collaboration, Communication, Empathy, Self-Learning.
            </span>
          </li>
        </ol>
      </div>
    </div>
  )
}
// <ol> is ordered list

export default Home
