// exists at bottom of website, serve same purpose of navbar, but just for visual
import React from 'react'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import EmailIcon from '@material-ui/icons/Email'
import '../styles/Footer.css'

function Footer() {
  return (
    <div className="footer">
        <div className="socialMedia">
            <LinkedInIcon />
            <EmailIcon />
        </div>
        <p> &copy; 2023 roxanneruan.com</p>
    </div>
  )
}

export default Footer
