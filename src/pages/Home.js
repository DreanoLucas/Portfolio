import React from "react";
import ProjectItem from "../componets/projectItem";
import { ProjectList } from "../helper/ProjectsList"

import cv from "../assets/Chadi_Mangle_CV_Apprentissage.pdf"
import "../styles/Home.css"
// import "../styles/Projects.css"  

function Home(){
    return(
        <div className="home" id="home">
            <div className="about">
                <h2>Bonjour, je suis</h2>
                <h1><span>Chadi</span> Manglé.</h1>
                <div className="prompt"> <p>Étudiant en Bachelor Universitaire de Technologie en Réseaux et Télécommunications à l'Université Sorbonne Paris Nord, je souhaite devenir Architecte Technique. Pour ce faire je recherche un contrat d'apprentissage pour une durée de deux ans dès la rentrée prochaine. </p>
                        <p>J’ai développé des compétences techniques essentielles en administration des réseaux et d’internet, en administrant et concevant des réseaux avec Linux ou des outils comme GNS3. Mais aussi en création d’outils et d’application informatique en Python, JavaScript, Bash et HTML. Ensuite des compétences comme connecter les entreprises et les d’usagers plus particulièrement dans la Téléphonie sur IP et les outils IOT.</p> 
                        <p>J'apprécie aussi le design que se soit la création de logo l’annimation et même la modélisation 3D.</p>
                        <p>Grâce à ces compétences, je suis prêt à relever de nouveaux défis en tant qu'apprenti. En plus des compétences techniques, je possède également de bonnes capacités d'analyse et de résolution de problèmes. J'ai l'habitude de travailler en équipe et je suis capable de communiquer efficacement.</p></div>
                <div className="contain-button"><a href={cv} target="_blank"><div className="button"> <p><span>Mon CV</span></p></div></a></div>
            </div>
            <div className="skills" id="skills">
                <h1>Compétences</h1>
                <ol className="list">
                    <li className="item"> 
                        <h2>Administrer les réseaux et l’Internet</h2> 
                        <span>Je maîtrise DHCP pour gérer des IP dynamiques et statiques, SSH pour les  connexions sécurisées à distance. J'ai expérimenté Apache2 pour faire des sites web dynamiques, FTP/SFTP pour le transfert de fichiers. Je connais le modèle TCP/IP et Iptables pour la sécurité réseau. J’utilise GitLab CI/CD, et AWS pour le déploiement continu. J’ai créé des réseaux virtuels avec VirtualBox, GNS3. J'ai administré la téléphonie via HyperTerminal.</span> 
                    </li>
                    <li className="item"> 
                        <h2>Créer des outils et applications informatiques pour les R&T</h2> 
                        <span>Je maîtrise Python pour la création de programmes et l'automatisation de tâches. J'utilise Bash pour l'automatisation des processus. Mes compétences en Javascript et React me permettent de développer des interfaces pour les applications web. J'ai une expérience en gestion et manipulation de bases de données grâce à SQL. Je conçois des solutions et mets en œuvre des algorithmes en utilisant C ou C++.</span> 
                    </li>
                    <li className="item"> 
                        <h2>Créer des outils et applications informatiques pour les R&T</h2> 
                        <span>J’utilise Arduino et TinkerCad pour faire de l’éléctronique. J’ai des connaissances théorique en fibre optiques et en transmition de signaux.</span> 
                    </li>
                </ol>
            </div>
            <div className="projects" id="projects">
            <h1>Projets personnels</h1>
            <div className="projectList">
                {ProjectList.map((project, index) => {
                    return <ProjectItem id={index} name={project.name} image={project.image} />
                })}
            </div>
        </div>
        </div>
    )
}

export default Home