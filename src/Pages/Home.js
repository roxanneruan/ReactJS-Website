import React from 'react'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import EmailIcon from '@material-ui/icons/Email'
import GithubIcon from '@material-ui/icons/GitHub'
import '../styles/Home.css'

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Roxanne</h2>
        <div className="prompt"> 
        <p> Short descrpition about myself here.</p>
        <LinkedInIcon />
        <EmailIcon />
        <GithubIcon />
        
        </div>
      </div>
      <div className="skills">
        <h1> Skills </h1>
        <ol className="list">
          <li className="item">
            <h2> skill category 1</h2>
            <span> 

            </span>
          </li>
          <li className="item">
            <h2> skill category 2</h2>
            <span> 

            </span>
          </li>
          <li className="item">
            <h2> skill category 3</h2>
            <span> 

            </span>
          </li>
        </ol>
      </div>
    </div>
  )
}
// <ol> is ordered list

export default Home
