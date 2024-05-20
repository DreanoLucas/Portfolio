import backdoorImg from "../assets/SKYCORD.png";
import youtubeImg from "../assets/RATP.png";
import morpionImg from "../assets/morpion.png";
import bibliodbImg from "../assets/bibliodb.png";
import mitmImg from "../assets/MiMT.png";
import microprocesseurImg from "../assets/microprocesseur.png";
import microprocesseurCr from "../assets/SAE13_GR3_Dreano_Lucas.pdf";

import GithubItem from "@material-ui/icons/GitHub";
import PDFIcon from "@material-ui/icons/Description";

export const ProjectList = [
    {
        name: "Skycord",
        explain:
            "Conçu comme un logiciel privé, SkyCord s'engage à fournir une plateforme sécurisée où la simplicité d'utilisation se combine à des fonctionnalités avancées, permettant aux professionnels R&T de gérer efficacement leurs communications et échanges de données confidentielles.",
        image: backdoorImg,
        skills: ["Python", "Socket IO", "Flask", "SQL", "ORM"],
        link: "https://github.com/DreanoLucas/Skycord",
        linktype: GithubItem,
    },
    {
        name: "Site Sanitaire RATP",
        explain:
            "Ce projet permet de savoir quelle sanitaires sont disponibles selon la ligne de metro/RER que l'on emprunte et à quelle station.",
        image: youtubeImg,
        skills: ["Python", "CSV", "API Request", "JSON"],
        link: "https://github.com/Chadi-Mangle/dlplaylist",
        linktype: GithubItem,
    },
    {
        name: "Morpion avec interface graphique en C",
        explain:
            "Ce projet m'a permis d'apprendre comment faire des interfaces graphiques avec le langagues C. Le code source du projet ce trouve sur github.",
        image: morpionImg,
        skills: ["C", "GCC"],
        link: "https://dreanolucas.github.io/SAE23/ludique.html",
        linktype: GithubItem,
    },
    {
        name: "Gestion de bibliothéque en Python",
        explain:
            "Ce projet réalisé en programation orienté objet nous a permis d'en apprendre d'avantage sur les classes et les paquets en Python. Il nous a aussi permis de gerer des bases de donnés avec JSON.",
        image: bibliodbImg,
        skills: ["Python", "POO", "JSON"],
        link: "",
        linktype: GithubItem,
    },
    {
        name: "Attaque MiTM avec Scapy",
        explain:
            "Projet effectué à deux qui nous a permis de réaliser une attaque de l'homme du millieu (MiTM) dans un réseaux privé en Python grâce à Scapy. Rapport disponible dans le README du Github",
        image: mitmImg,
        skills: ["Python", "Oracle Virtual Box", "Scapy"],
        link: "https://github.com/DreanoLucas/SAE24",
        linktype: GithubItem,
    },
    {
        name: "Microprocesseur en Arduino",
        explain:
            "Projet effectué seul dans lequel on devait réaliser un microprocesseur contrôlable depuis un site web.",
        image: microprocesseurImg,
        skills: ["Adruino", "C++", "HTML", "Électronique"],
        link: microprocesseurCr,
        linktype: PDFIcon,
    },
];
