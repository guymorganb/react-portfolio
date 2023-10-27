import React, {useState} from 'react';
import CMA from '../../assets/CMA.png'
import PWA from '../../assets/PWA.png'
import RRX from '../../assets/RRX.png'
import techBlog from '../../assets/techBlog.png'
import python from '../../assets/pythonfeed.png'
import aws from "../../assets/aws-thoughts.png"
import terraform from "../../assets/terraformVM.png"
import kube from "../../assets/kubernetes.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareNodes, faHeart } from '@fortawesome/free-solid-svg-icons';



const projects = [
    { 
        title: "Python-Fullstack-TechNews",
        url: "https://lit-peak-52472-1a68e5bb8b71.herokuapp.com/",
        description: "Fullstack Python Tech news blog",
        techStack: "Python, JavaScript, Flask, Mysqalchemy, RestFUL, Sessions, Jinja, GitHub",
        image: python
    },
    { 
        title: "AWS Deep-Thoughts",
        url: "http://levelupco.com/",
        description: "Fullstack Web-blog, AWS-S3 image/object uploads and re-serving, stores user text in AWS-DynamoDB serves it back up with images, Nginx reverse proxy handles front/backend/external communications.",
        techStack: "AWS, AWS-SDK for JavaScript, Remote VM SSH, RestFUL, ReactJS, NodeJS, Linux Command Line, DNS, Nginx, PM2(Process Manager),GitHub, AWS EC2, AWS S3, AWS DynamoDB, AWS Security Policies, ExpressJS, CORS",
        image: aws
    },
    {
        title: "AWS/Terraform Remote-Dev",
        url: "https://github.com/guymorganb/terraform-remote-vm-dev-node",
        description: "Manipulation/Generation of AWS services using Terraform, no website for this, visit repository for more info",
        techStack: "AWS, Subnet, CIDR-Blocks, Routing tables, Internet gateway, Security groups, ACL's, EC2, VS-Code, SSH, this setup is for both windows and MAC, AWS-SDK, Linux Command Line, GitHub",
        image: terraform
    },
    {
        title: "RecoverRx Massage-Spa",
        url: "https://stark-eyrie-30974-cec0733bf8b2.herokuapp.com/",
        description: "Fullstack ReactJS Website For a local business providing massage",
        techStack: "React, Vite, GraphQL-Apollo, Express, JavaScript, Chakra-UI",
        image: RRX
    },
    {
        title: "The Tech Blog",
        url: "https://cms-styleblog-b43fd1e13c1e.herokuapp.com/",
        description: "Fullstack NodeJS blog, authenticates using sessions, allows profile interaction, built in 4 days",
        techStack: "BootstrapCSS, Express, RestFUL, Express-Handlebars, Heroku, HTML, Javascript, MySQL2, Node, Sequelize",
        image: techBlog
    },
    { 
        title: "Jate Text Editor",
        url: "https://pwa-editor-text-23103ec48792.herokuapp.com/",
        description: "Progressive web app text editor utilizing services workers",
        techStack: "JavaScript, Service Workers, Express, Node, Webpack, RestFUL, IndexDB. Google Workbox, Google Lighthouse",
        image: PWA
    },
    { 
        title: "Center for Mycological Analytics",
        url: "https://center-mycological-analytics-3e13791937a3.herokuapp.com/",
        description: "Fullstack Website redesign for the Center for Mycological Analytics",
        techStack: "Bootstrap, CSS, Express, Express-Handlebars, Handlebars, RestFUL, Javascript, Mailgun, Multer, MySQL2, Node.js, Nodemail, Sequelize, Short ID, UUID",
        image: CMA
    },
    { 
        title: "...Upcoming Project",
        url: "https://github.com/guymorganb",
        description: "Currently building a containerized microservice social media web-blog, architechted to accept plug-ins to be easily added, Im also writig comprehencsive documentation for this one, and run on AWS, Kubernetes, Docker, Java, Networking, DNS, CDN etc....",
        techStack: "JavaScript, Java, Spring, NodeJS, ReactJS, Content Delivery Network, MinIO-DB, Kubernetes(KOPS), Docker, Terraform, MySQL2, Redis, Web Sockets, GraphQL-Apollo, Nginx, ExpressJS, Service Workers, Vite, AWS Stack: EC2/Route Tables/Route55-DNS/CIDR Blocks/DynamoDB/AWS-SDK/AWS CLI/...probably more I havent learned yet",
        image: kube
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