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
            <hr style={{height:3, color: '#3e497a', backgroundColor: '#3e497a'}}></hr>
            <p> UI/UX Design | Front-End Development | Software Engineer </p>
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

      
      <div className="about-me"> 
        <div>
            <h1> About Me </h1>
          <hr></hr>
        </div>
        <ol className="list">
        <p className="about-me-text"> 
              Hi! My name is Roxanne Ruan and I am an aspiring <b>front-end developer</b> with experience in web development and UX design. <br></br> <br></br>
              I'm currently a <b> 3rd year Computer Science</b> student at UC Davis. <br></br>  <br></br> 
              
              <b>My mission in coding and design</b> is to approach problems with a creative and open mind to reach
              effective and efficient results. I hope to bridge the gap between creativity and technology through
              staying curious and adaptive in a rapidly evolving field. I will <b>embrace opportunities for growth</b> and
              inspire delight through my work. Through my dedication to coding and design, I aim to shape
              the way people interact with the digital world along with others in a harmonious collaboration. <br></br><br></br>

              Check out my <b>Experience</b>to learn more about my <b>proudest achievement in UX Design at UC Davis.</b> <br></br><br></br>
              
              Explore my <b>Projects</b> page to see my where my curiosity blooms and my skills blossom. <br></br><br></br>

              When I am not coding, I am decorating my bullet journal, learning new recipes, going for a walk, or listening to music.
              Fun fact: My longest playlist on Spotify currently has 571 songs, and spans 30.5 hrs. 
              <br></br><br></br>

              <b>Take a look at my skills and connect with me on my socials below!</b>
            
            </p> 
            <hr></hr>
          <li className="item">
            <h2> UX / Front-End </h2>
            <span> 
              ReactJS, HTML, CSS. Figma, User-Research, User-Testing, Wireframing, Prototyping, Presentation.
            </span>
          </li>
          <li className="item">
            <h2> Languages / Tools </h2>
            <span> 
            ReactJS, HTML, CSS, Figma, C++, C, C#, Unity, Object-Oriented Programming, Python, JSON, Git, R, RStudio. Currently studying for AWS Cloud Computing Certificate.
            </span>
          </li>
          <li className="item">
            <h2> Soft Skills </h2>
            <span> 
              Teamwork, Collaboration, Communication, Empathy, Self-Learning, Presentation, Time-Management.
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
