import React, {useState} from 'react';
import CMA from '../../assets/CMA.png'
import PWA from '../../assets/PWA.png'
import RRX from '../../assets/RRX.png'
import techBlog from '../../assets/techBlog.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareNodes, faHeart } from '@fortawesome/free-solid-svg-icons';



const projects = [
    {
        title: "The Tech Blog",
        url: "https://cms-styleblog-b43fd1e13c1e.herokuapp.com/",
        description: "Fullstack Blog that authenticates users, & allows profile interaction",
        techStack: "BootstrapCSS,Express,Express-Handlebars,Heroku,HTML,Javascript,JawsDB,MySQL2,Node,Sequelize,UUID",
        image: techBlog
    },
    {
        title: "RecoverRx Massage-Spa",
        url: "https://stark-eyrie-30974-cec0733bf8b2.herokuapp.com/",
        description: "Fullstack Website For a local business providing massage",
        techStack: "React,Vite,GraphQL-Apollo,Express,JavaScript,Chakra-UI",
        image: RRX
    },
    { 
        title: "Jate Text Editor",
        url: "https://pwa-editor-text-23103ec48792.herokuapp.com/",
        description: "Progressive web app text editor",
        techStack: "JavaScript,Express,Node,Webpack,Heroku,IndexDB",
        image: PWA
    },
    { 
        title: "Center for Mycological Analytics",
        url: "https://center-mycological-analytics-3e13791937a3.herokuapp.com/",
        description: "Fullstack Website redesign for the Center for Mycological Analytics",
        techStack: "Animate.CSS,Bootstrap,CSS,Express,Express-Handlebars,Handlebars,Heroku,HTML,Javascript,JawsDB,Mailgun,Multer,MySQL2,MySQL Workbench,Node.js,Nodemail,Sequelize,Short ID,UUID",
        image: CMA
    },
]





function Project({ project }) {
    const [isLiked, setIsLiked] = useState(false);  // State to track if the project is liked
    const handleLikeClick = () => {
        setIsLiked(!isLiked);
        // You can also add further code here, for example, to update a backend system or show a notification.
    };
    
    const handleShareClick = () => {
        // Example: Display a notification that the project has been shared.
        alert('Project shared!');  // You might replace this with a more sophisticated notification system.
        
        // If you want to copy the project's URL to the clipboard:
        // navigator.clipboard.writeText(project.url);
    };
    return (
        <article className="projectContainer p-2">
            <div className="header">
                <div className="title">
                    <h1><b>{project.title}</b></h1>
                    <ul className='p-2 '><i><u>Hover to view tech stacks...</u></i></ul>
                </div>
            </div>
            <div className="cardImage">
                <a className="thumbnail" title={project.techStack} href={project.url}><img src={project.image} alt={project.title} className="icon-image w-19 h-20" /></a>
            </div>
            <div className="Description">
                <ul>{project.description}</ul>
            </div>
            <div className="cardFooter p-3">
                <a className="callToAction2 border-2 border-gray-500 rounded mr-5 p-1" href={project.url} target="_blank" rel="noopener noreferrer">Visit Site </a>
                <div>
                <button className="like" onClick={handleLikeClick}>
                    <FontAwesomeIcon icon={faHeart} size="3x" color="#e29578" className="icon-image pr-2 w-7 h-7" />
                </button>
                <button className="share" onClick={handleShareClick}>
                    <FontAwesomeIcon icon={faShareNodes} size="3x" color="#006d77" className="icon-image w-7 h-7" />
                </button>
                </div>
            </div>
        </article>
    );
}


function Portfolio() {
    return (
        <section className="Portfolio">
            <h1 className="portfolio-header">Portfolio : most interesting work so far</h1>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {projects.map(project => <Project key={project.title} project={project} />)}
            </div>
        </section>
    );
}


export default Portfolio;