import React from 'react'
import LInkedInIcon from "@material-ui/icons/LinkedIn"
import EmailIcon from "@material-ui/icons/Email"
import GitHubIcon from '@material-ui/icons/GitHub'
import '../styles/footer.css'

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <a href="https://www.linkedin.com/in/chadi-md-362b08265/" target='_blank'><LInkedInIcon/></a>
            <a href="mailto:chadimangled@gmail.com" target='_blank'><EmailIcon/></a>
            <a href='https://github.com/Chadi-Mangle' target='_blank'><GitHubIcon/></a>
        </div>
        <span> Chadi Manglé - &copy;2024 </span>
    </div>
  )
}

export default Footer