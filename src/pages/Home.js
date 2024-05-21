import React from "react";
import { useState } from "react";

import ProjectItem from "../componets/projectItem";
import { ProjectList } from "../helper/ProjectsList";

import SkillItem from "../componets/skillItem";
import { SkillList } from "../helper/SkillList";

import Contact from "../componets/contact";

import cv from "../assets/CV_DREANO_Lucas.pdf";

import "../styles/Home.css";

import LInkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GitHubIcon from "@material-ui/icons/GitHub";

import headerImg from "../assets/header.png";

function Home() {
    const [currentDescription, setCurrentDescription] = useState("");

    return (
        <div className="home" id="home">
            <div className="about">
                <div className="header">
                    <div className="header-text">
                        <h2>Bonjour, je suis</h2>
                        <h1>
                            <span>Lucas</span> DRÉANO.
                        </h1>
                    </div>
                    <img className="header-img" src={headerImg}></img>
                </div>
                <div className="prompt">
                    <p>
                        Futur étudiant à Télécom SudParis en cycle ingénieur
                        informatique et réseaux en apprentissage, je suis à la
                        recherche d'un contrat d'apprentissage d'une durée de 36
                        mois.{" "}
                    </p>

                    <p>
                        L'intégration de cette formation, représente une étape
                        cruciale vers ma carrière d'architecte réseaux.
                        L'apprentissage, en tant qu'expérience professionnelle
                        enrichissante me permettra d'acquérir des compétences
                        techniques avec une véritable expérience
                        professionnelle.
                    </p>

                    <p>
                        Ainsi, cette synergie entre théorie et pratique me
                        préparera efficacement aux responsabilités et aux
                        innovations exigées par le métier d'architecte réseaux,
                        tout en m'assurant une insertion professionnelle rapide
                        et réussie.
                    </p>

                    <p>
                        Je suis prêt à relever de nouveaux défis en tant
                        qu'apprenti. En plus des compétences techniques, je
                        possède également de bonnes capacités d'analyse et de
                        résolution de problèmes techniques et relationnels.
                        J'aime travailler en équipe et je suis capable de
                        communiquer efficacement.
                    </p>
                </div>
                <div className="contain-button">
                    <a href={cv} target="_blank" rel="noreferrer">
                        <div className="button">
                            {" "}
                            <p>
                                <span>Mon CV</span>
                            </p>
                        </div>
                    </a>
                </div>
            </div>

            <div className="skills" id="skills">
                <h1>Compétences</h1>

                <div className="list">
                    {SkillList.map((skill) => {
                        return (
                            <SkillItem
                                name={skill.name}
                                image={skill.image}
                                description={skill.description}
                                skills={skill.skills}
                                setCurrentDescription={setCurrentDescription}
                            />
                        );
                    })}

                    <div id="skill-area">{currentDescription}</div>
                </div>
            </div>

            <div className="projects" id="projects">
                <h1>Projets personnels</h1>
                <div className="projectList">
                    {ProjectList.map((project, index) => {
                        return (
                            <ProjectItem
                                id={index}
                                name={project.name}
                                image={project.image}
                            />
                        );
                    })}
                </div>
            </div>
            <div className="contact" id="contact">
                <h1>Contact</h1>

                <div className="container">
                    <div className="form">
                        <h3>Me contacter </h3>
                        <Contact />
                    </div>
                    <div className="more">
                        <h3>En savoir plus</h3>
                        <p>
                            Pour toute demande, n'hésitez pas à me contacter
                            grâce à l'un de ces moyens.
                        </p>
                        <ul className="contact-link">
                            <li>
                                {" "}
                                <EmailIcon />{" "}
                                <a
                                    href="mailto:lucas.dreano@gmail.com"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    lucas.dreano@gmail.com
                                </a>
                            </li>
                            <li>
                                {" "}
                                <LInkedInIcon />{" "}
                                <a
                                    href="https://www.linkedin.com/in/lucas-dreano-9b3bab259/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Lucas DREANO
                                </a>
                            </li>
                            <li>
                                {" "}
                                <GitHubIcon />{" "}
                                <a
                                    href="https://github.com/DreanoLucas"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    DreanoLucas
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
