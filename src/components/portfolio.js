import React from "react";
import CMA from '../assets/CMA.png'
import petSearch from '../assets/pet-search.png'
import NWE from '../assets/Notes_with_Express.png'
import WAPI from '../assets/WeatherApp.png'
import techBlog from '../assets/techBlog.png'


const projects = [
    {
        title: "The Tech Blog",
        url: "https://cms-styleblog-b43fd1e13c1e.herokuapp.com/",
        description: "A blog where users can interact with each others accounts write & comment on posts",
        techStack: "BootstrapCSS/Express/Handlebars/Heroku/HTML/Javascript/JawsDB/MySQL2/MySQL Workbench/Node.js/Sequelize/UUID",
        image: techBlog
    },
    {
        title: "Weather API",
        url: "https://guymorganb.github.io/Weather_App/",
        description: "Responsive Weather App.",
        techStack: "jQuery/JavaScript/API's/BootStrap",
        image: WAPI
    },
    { 
        title: "Notes with Express",
        url: "https://notes-with-express-0330a20c1e26.herokuapp.com/",
        description: "Web App deployment with express backend",
        techStack: "Express.js/Node.js/Tailwind CSS/Heroku/jQuery/CRD ops",
        image: NWE
    },
    { 
        title: "Pet Search",
        url: "https://guymorganb.github.io/Pet-Search/",
        description: "Frontend application to search animals for adoption/Use ChatGPT",
        techStack: "JavaScript/API's/ChatGPT Prompting/Pagination/Bootstrap",
        image: petSearch
    },
    { 
        title: "Center for Mycological Analytics",
        url: "https://center-mycological-analytics-3e13791937a3.herokuapp.com/",
        description: "Website redesign for the Center for Mycological Analytics",
        techStack: "Animate.CSS,Bootstrap,CSS,Express,Express-Handlebars,Handlebars,Heroku,HTML,Javascript,JawsDB,Mailgun,Multer,MySQL2,MySQL Workbench,Node.js,Nodemail,Sequelize,Short ID,UUID",
        image: CMA
    },
]

function Project({ project }) {
    return (
        <article className="projectContainer" title={project.description}>
            <div className="containerDiv">
                <a href={project.url} id={project.title.replace(" ", "-")}>
                    <div className="title-wrapper">
                        <h3>{project.title}</h3>
                    </div>
                    <div className="label" data-id={project.description}>
                    <div className="TS"><strong>TechStack:</strong>{project.techStack}</div>
                    </div>
                    <div className="imgWrapper">
                    <img src={project.image} alt={project.title} /> {/* Keep the image as the last element */}
                    </div>
                </a>
            </div>
        </article>
    );
}

function Portfolio() {
    return (
        <section className="Portfolio">
            <h1 className="portfolio-header">Portfolio</h1>
            <div className="projects-grid">
                {projects.map(project => <Project key={project.title} project={project} />)}
            </div>
        </section>
    );
}


export default Portfolio;