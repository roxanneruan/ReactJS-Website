// exists at bottom of website, serve same purpose of navbar, but just for visual
import React from 'react'
import { Link } from 'react-router-dom'
import EmailIcon from '@material-ui/icons/Email'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub'
import '../styles/Footer.css'

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
      <Link to ='https://www.linkedin.com/in/roxanne-ruan/'>
              <LinkedInIcon />
            </Link>
            <Link to ='https://github.com/roxanneruan'>
              <GitHubIcon /> 
            </Link>
            <a href = 'mailto: roxanneruan@gmail.com'> 
              <EmailIcon />
            </a>
      </div>
      <p> &copy; 2023 rorosy.com</p>
    </div>
  )
}

export default Footer
