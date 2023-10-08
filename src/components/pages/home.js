import React from 'react';
import profileImage from '../../assets/Third.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';


const HomePage = ({instagram, linkedin, github}) => {
    const skills = [
        "JavaScript ES6+", "jQuery", "Nodejs", "Expressjs", "Bootstrap", 
        "Tailwind CSS", "React", "MongoDB", "Mongoose", "MySQL", "PostGresSQL", 
        "Sequelize", "HTML5", "CSS3", "GitHub", "Figma", "Miro", "AutoDesk",
        "ChatGpt", "RestFul API", "Windows", "MAC", "Linux", "Java", "Docker",
        "Python", "PWA", "Graph-QL", "Apollo Server", "Webpack", "GSAP", 
        "GoogleWorkbox", "NodeMailer", "UUID", "Mailgun", "Palm2", "Multer","Emailjs",
        "Vite", "Handlebars", "Flask", "Jinja", "Mysqlalchemy"
    ];

    const getIconForSkill = (skill) => {
        switch(skill) {
            case "JavaScript ES6+":
                return <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Javascript_badge.svg/146px-Javascript_badge.svg.png?20160504163251" alt="JavaScript" className="skill-icon"/>;
            case "jQuery":
                return <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/JQuery-Logo.svg/1920px-JQuery-Logo.svg.png?20200715135602" alt="jQuery" className="skill-icon"/>;
            case "Nodejs":
                return <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/590px-Node.js_logo.svg.png?20170401104355" alt="Nodejs" className="skill-icon"/>;
            case "React":
                return <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png?20220125121207" alt="React" className="skill-icon"/>;
            case "Expressjs":
                return <img src="https://www.vectorlogo.zone/logos/expressjs/expressjs-ar21.svg" alt="Expressjs" className="skill-icon"/>;
            case "Bootstrap":
                return <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/512px-Bootstrap_logo.svg.png?20210507000024" alt="Bootstrap" className="skill-icon"/>;
            case "Tailwind CSS":
                return <img src="https://upload.wikimedia.org/wikipedia/commons/9/95/Tailwind_CSS_logo.svg" alt="Tailwind" className="skill-icon"/>;
            case "HTML5":
                return <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png?20170517184425" alt="HTML5" className="skill-icon"/>;
            case "CSS3":
                return <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/363px-CSS3_logo_and_wordmark.svg.png?20160530175649" alt="CSS3" className="skill-icon"/>;
            case "GitHub":
                return <img src="https://upload.wikimedia.org/wikipedia/commons/c/c2/GitHub_Invertocat_Logo.svg" alt="GitHub" className="skill-icon"/>;;
            case "Docker":
                return <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Docker_%28container_engine%29_logo.svg/610px-Docker_%28container_engine%29_logo.svg.png?20161017201350" alt="Docker" className="skill-icon"/>;;
            case "Python":
                return <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/115px-Python-logo-notext.svg.png?20220821155029" alt="Python" className="skill-icon"/>;;
            case "Java":
                return <img src="https://www.vectorlogo.zone/logos/java/java-ar21.svg" alt="Java" className="skill-icon"/>;;
            case "MongoDB":
                return <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Mongodb-ar21.svg/120px-Mongodb-ar21.svg.png?20230427111848" alt="MongoDB" className="skill-icon"/>;
            case "Mongoose":
                return <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--2I4vBvvN--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/t0p5suxwzq90eb2nr2rv.png" alt="Mongoose" className="skill-icon"/>;
            case "MySQL":
                return <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/MySQL_textlogo.svg/800px-MySQL_textlogo.svg.png?20210508081050" alt="jQuery" className="skill-icon"/>;
            case "Sequelize":
                return <img src="https://www.vectorlogo.zone/logos/sequelizejs/sequelizejs-ar21.svg" alt="MySQL" className="skill-icon"/>;
            case "PostGresSQL":
                return <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/540px-Postgresql_elephant.svg.png?20080116191800" alt="PostGresSQL" className="skill-icon"/>;
            case "Figma":
                return <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/400px-Figma-logo.svg.png?20190122211436" alt="Figma" className="skill-icon"/>;
            case "Miro":
                return <img src="https://seeklogo.com/images/M/miro-logo-4F00416377-seeklogo.com.png" alt="Miro" className="skill-icon"/>;
            case "AutoDesk":
                return <img src="https://upload.wikimedia.org/wikipedia/commons/f/f0/Autodesk_123D_logo.png" alt="AutoDesk" className="skill-icon"/>;
            case "MAC":
                return <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Apple_Logo.svg/136px-Apple_Logo.svg.png?20220821122334" alt="MAC" className="skill-icon"/>;
            case "Windows":
                return <img src="https://upload.wikimedia.org/wikipedia/commons/8/8d/Windows_darkblue_2012.svg" alt="Windows" className="skill-icon"/>;
            case "Linux":
                return <img src="https://upload.wikimedia.org/wikipedia/commons/d/dd/Linux_logo.jpg?20090908114920" alt="Linux" className="skill-icon"/>;
            case "Graph-QL":
                return <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/512px-GraphQL_Logo.svg.png?20161105194737" alt="Graph-QL" className="skill-icon"/>;
            case "Apollo Server":
                return <img src="https://cdn.worldvectorlogo.com/logos/apollo-graphql-1.svg" alt="Apollo Server" className="skill-icon"/>;
            case "Webpack":
                return <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Webpack.svg/512px-Webpack.svg.png?20210415142115" alt="Webpack" className="skill-icon"/>;
            case "GSAP":
                return <img src="https://i7x7p5b7.stackpathcdn.com/codrops/wp-content/uploads/2019/11/GSAP3.png?x15297" alt="GSAP" className="skill-icon"/>;
            case "GoogleWorkbox":
                return <img src="https://blog.logrocket.com/wp-content/uploads/2019/11/workbox.png" alt="GoogleWorkbox" className="skill-icon"/>;
            case "RestFul API":
                return <img src="https://www.payoda.com/wp-content/uploads/2021/05/1_mbP4Bjrs8Hshx7IgjsUNSg.jpeg" alt="RestFul API" className="skill-icon"/>;
            case "PWA":
                return <img src="https://user-images.githubusercontent.com/3104648/28969264-d14f6178-791b-11e7-9399-e7820d6aaa39.png" alt="PWA" className="skill-icon"/>;
            case "ChatGpt":
                return <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/768px-ChatGPT_logo.svg.png?20230318122128" alt="ChatGpt" className="skill-icon"/>;
            case "NodeMailer":
                return <img src="https://nodemailer.com/nm_logo_200x136.png" alt="Node-Mailer" className="skill-icon"/>;
            case "Mailgun":
                return <img src="https://camo.githubusercontent.com/a074f0beacc94a224c9179d5a453a102375549f458e6872d62e827169776bb7c/68747470733a2f2f7261772e6769746875622e636f6d2f6d61696c67756e2f6d656469612f6d61737465722f4d61696c67756e5f5072696d6172792e706e67" alt="Mailgun" className="skill-icon"/>;
            case "UUID":
                return <img src="https://plugins.jetbrains.com/files/8320/140213/icon/pluginIcon.svg" alt="UUID" className="skill-icon"/>;
            case "Palm2":
                return <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsZn2xhHdwIlBoiEt00eMqXeSuNBzq-3q9yEAaXmrY6SSf7UNIycFxlu_4XlauPAsSR_c&usqp=CAU" alt="Palm2" className="skill-icon"/>;
            case "Multer":
                return <img src="https://miro.medium.com/v2/resize:fit:1358/1*QTZvtnHWanNxBQBynhtlIA.png" alt="Multer" className='skill-icon'/>
            case "Emailjs":
                return <img src="https://blog.openreplay.com/images/sending-emails-from-react-with-emailjs/images/hero.png" alt="EmailJS" className='skill-icon'/>
            case "Vite":
                return <img src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg" alt="Vite" className='skill-icon'/>
            case "Flask":
                return <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Flask_logo.svg/640px-Flask_logo.svg.png" alt="Flask" className='skill-icon'/>
            case "Jinja":
                return <img src="https://jinja.palletsprojects.com/en/3.1.x/_images/jinja-logo.png" alt="Jinja" className='skill-icon'/>
            case "Mysqlalchemy":
                return <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/SQLAlchemy.svg/640px-SQLAlchemy.svg.png" alt="EmailJS" className='skill-icon'/>
            case "Handlebars":
                return <img src="https://handlebarsjs.com/images/handlebars_logo.png" alt="Handlebars" className='skill-icon'/>
            default:
                return null;

        }
    }
    
    return (
        <div className="home-page bg-gray-100 min-h-screen p-6 flex items-center justify-center">
            <div className="card-container max-w-xl w-full bg-white p-6 rounded-lg shadow-md mb-10">
                <span className="pro block text-sm mb-2"></span>
                <img className="rounded w-40 h-32 mx-auto mb-4" src={profileImage} alt="guy beals" />
                <h3 className="text-center text-2xl font-bold mb-1">Guy Beals</h3>
                <h6 className="text-center text-sm text-gray-500 mb-4">Colorado Native</h6>
                <p className="text-center text-gray-700 mb-4">CS Student 🎓 entrapanuer 📈 human 👤 son 👪 brother 👪 lover of learning 🌎. Despite calculus ∫∫ and physics λ, still believes in magic ✨<br />aspiring full-stack developer</p>
                <div className="flex justify-center space-x-4 mb-6">
                <a className="primary rounded text-white icon" href={instagram} target="_blank" rel="noopener noreferrer">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg" alt="Instagram Logo" className="icon-image w-11 h-11 " />
                </a>
                <a className="rounded text-blue-500 icon" href={linkedin} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} size="3x" color="#00ACEE" />
                </a>
                <a className="rounded icon" href={github} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} size="3x" color="#1D1D1D" />
                </a>
                </div>
                <div className="skills">
                    <h6 className="text-xl font-bold mb-4">Projects I've created in the past have used:</h6>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                        {skills.map(skill => (
                            <li key={skill} title={skill} className="text-gray-700 py-1 px-2 rounded bg-gray-200 hover:bg-gray-300 transition duration-300 flex items-center space-x-2">
                                {getIconForSkill(skill)}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
