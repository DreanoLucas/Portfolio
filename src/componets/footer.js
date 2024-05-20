import React from "react";
import LInkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/footer.css";

function Footer() {
    return (
        <div className="footer">
            <div className="socialMedia">
                <a
                    href="https://www.linkedin.com/in/lucas-dreano-9b3bab259/"
                    target="_blank"
                >
                    <LInkedInIcon />
                </a>
                <a href="mailto:lucas.dreano@gmail.com" target="_blank">
                    <EmailIcon />
                </a>
                <a href="https://github.com/DreanoLucas" target="_blank">
                    <GitHubIcon />
                </a>
            </div>
            <span> Lucas DRÉANO - &copy;2024 </span>
        </div>
    );
}

export default Footer;
