import React from 'react';

const HomePage = () => {
    const skills = [
        "JavaScript ES6+", "jQuery", "Nodejs", "Expressjs", "Bootstrap", 
        "Tailwind CSS", "React", "MongoDB", "MySQL", "Post-GreSQL", "HTML5", "CSS3", 
        "Agile", "UI/UX (User Interface/User Experience)", "GitHub", "Figma", 
        "Miro", "Promises", "API (Application Program Interface)", "CCC1", "AutoDesk", 
        "Problem Solving", "RestFul API", "Windows", "MAC", "Linux", "Monorepo", 
        "Java", "Docker", "Python", "PWA", "Graph-QL", "Apollo Server", 
        "Webpack", "Service Workers", "GSAP"
    ];

    return (
        <div className="home-page bg-gray-100 min-h-screen p-6">
            <header className="home-header text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-900 mb-2">Guy Beals</h1> 
                <p className="text-2xl text-gray-700">Programmer & Designer</p> 
            </header>

            <section className="intro-section bg-white p-6 rounded-lg shadow-md mb-10">
                <p className="text-lg mb-4">Welcome to my portfolio!</p>
                <p>I have a diverse set of skills, spanning from frontend to backend development, soft design, and collaboration tools. I'm passionate about continuous learning and leveraging the latest technologies to deliver high-quality projects.</p>
            </section>

            <section className="skills-section bg-white p-6 rounded-lg shadow-md mb-10">
                <h2 className="text-2xl font-bold mb-4">Skills</h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {skills.map(skill => (
                        <li key={skill} className="text-gray-700 py-1 px-2 rounded bg-gray-200 hover:bg-gray-300 transition duration-300">{skill}</li>
                    ))}
                </ul>
            </section>

        </div>
    );
}

export default HomePage;
