import backdoorImg from '../assets/backdoor.jpg'
import youtubeImg from  '../assets/playlist_dowloader.jpg'
import morpionImg from '../assets/morpion.png'
import bibliodbImg from '../assets/bibliodb.png'

export const ProjectList = [
    {
     name: "Backdoor client et serveur en Python",
     explain: "Ce projet permet de pouvoir se connecter et exécuter des commandes systèmes sur un hôte distant dans un même réseau.", 
     image: backdoorImg,
     skills: "Python et Python Socket Library",
     link: "https://github.com/Chadi-Mangle/backdoor_python",
    },
    {
    name: "Youtube Playlist Downloader en Python",
    explain: "Ce projet permet de télécharger des vidéos ainsi que des playlists grace au lien de la vidéo depuis un fichier executable. On retrouve ce fichier dans le projet github.", 
    image: youtubeImg,
    skills: "Python, API Request",
    link: "https://github.com/Chadi-Mangle/PlaylistDownloader", 
    },
    {
    name: "Morpion avec interface graphique en C",
    explain: "Ce projet m'a permis d'apprendre comment faire des interfaces graphiques avec le langagues C. Le code source du projet ce trouve sur github.", 
    image: morpionImg,
    skills: "C, GCC",
    link: "https://github.com/Chadi-Mangle/morpion-game",
    },
    {
    name: "Gestion de bibliothéque en Python",
    explain: "Ce projet réalisé en classe nous a permis d'en apprendre d'avantage sur les classes et les paquets en Python. Il nous a aussi permis de gerer des bases de donnés avec JSON.",
    image: bibliodbImg, 
    skills: "Python, JSON", 
    link: "https://github.com/Chadi-Mangle/R208"
    },
]