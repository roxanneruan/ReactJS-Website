import React from 'react'
import { Link } from 'react-router-dom'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import EmailIcon from '@material-ui/icons/Email'
import GithubIcon from '@material-ui/icons/GitHub'
import '../styles/Home.css'
import TempPicture from '../images/temp_portrait.jpg'

function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <div className='left-half'>
          <h2> Hi, I'm Roxanne. </h2>
          <div className='prompt'>
            <p> UI/UX Design | Front-End Development | Software Engineer </p>
            <hr style={{height:2, color: '#3e497a', backgroundColor: '#3e497a'}}></hr>
            <p className="about-me-text"> 
              I'm a ... with experience in ... <br></br>
              I'm most familiar with .... and learning ..... <br></br>
              I'm currently a stuent education stuff <br></br>

              As an aspriing.. my goal is to... <br></br>

              Check out my experience in UX and one of my proudest awards thus far..

              Explore my projects to see where I ... <br></br>

              In my free time..... <br></br>

              Connect with me on my socials.
            
            </p> 
            <Link to ='https://www.linkedin.com/in/roxanne-ruan/'>
              <LinkedInIcon />
            </Link>
            <Link to ='https://github.com/roxanneruan'>
              <GithubIcon /> 
            </Link>
            <a href = 'mailto: roxanneruan@gmail.com'> 
              <EmailIcon />
            </a>
          </div>
        </div>

        <div className='right-half'>
          <img src={TempPicture} className="image" alt="" />
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
 //  <img src={TempPicture} className="picture" alt="" /> 

export default Home
