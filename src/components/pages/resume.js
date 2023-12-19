import React, {  useEffect, useRef } from 'react';
import logo from '../../logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import resume from "../../assets/ITApplicationManagerResume.pdf"
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
gsap.registerPlugin(MotionPathPlugin);
const svgPath = "M 193 368 A 200 168 0 1 1 194 368"
const svgPath2 = "M 200 32 A 200 168 0 1 1 199 32"

const ResumePage = () => {
    const resumeLink = "https://docs.google.com/document/d/1-Jeezp5JYBiuO8-xY32_9y_rn3sgl9bR/edit?usp=sharing&ouid=102883667238096375202&rtpof=true&sd=true"; // Replace with your Google Docs resume link
    const spinTL1 = useRef(null);
    const spinTL2 = useRef(null);
    useEffect(() => {
        const tl = gsap.timeline({ defaults: { duration: 2.0 } });
        tl.to(".resume-btn", { opacity: 1, y: -50, stagger: 0.5 })
        .to(".atom", { opacity: 1, y: -50 }, "<")
        .to(".resumeText", { opacity: 1, y: -50 }, "<")
        .to(".start-spinning-button", { opacity: 1, y: -50 }, "<")
    }, []);
    // const generatePath = (a, b, steps = 100000) => {
    //     const path = [];
    //     for (let i = 0; i < steps; i++) {
    //         const theta = (2 * Math.PI / steps) * i;
    //         const r = a + b * theta;
    //         const x = r * Math.cos(theta);
    //         const y = r * Math.sin(theta);
    //         path.push({x, y});
    //     }
    //     return path;
    // };
    const startSpinning = () => {
        const buttons = document.querySelectorAll(".resume-btn");
        buttons.forEach(btn => btn.classList.add("spinning"));
        //const path1 = generatePath(500, 0); // You can change the values of a and b for desired effects
        // const path2 = generatePath(-500, 0); // Different values for the second button
    
        spinTL1.current = gsap.timeline({ repeat: -1 });
        spinTL1.current.to(".resume-btn1", { 
            duration: 3, 
            motionPath: {
                path: svgPath,
                align: ".resume-btn1",
                alignOrigin: [0.5, 0.5]
            },
            ease: "power4.inOut",
        });
    
        spinTL2.current = gsap.timeline({ repeat: -1 });
        spinTL2.current.to(".resume-btn2", { 
            duration: 2, 
            motionPath: {
                path: svgPath2,
                align: ".resume-btn2",
                alignOrigin: [0.5, 0.5]
            },
            ease: "power5.inOut",
        });
    }
    const stopSpinning = () => {
  
        
        if (spinTL1.current) spinTL1.current.pause();
        if (spinTL2.current) spinTL2.current.pause();
    }

    // const startSpinning = () => {
    //     spinTL1.current = gsap.timeline({ repeat: -1 });
    //     spinTL1.current.to(".resume-btn1", { 
    //         duration: 1, 
    //         x: '+=100',
    //         rotation: 360,
    //         yoyo: true,
    //         y: gsap.utils.wrap([-50, 50]),
    //         ease: "power2.inOut",
    //         repeat: -1
    //     });

    //     spinTL2.current = gsap.timeline({ repeat: -1 });// Loop indefinitely
    //     spinTL2.current.to(".resume-btn2", { 
    //         duration: 1, 
    //         x: '-=100',
    //         rotation: -360,
    //         yoyo: true,
    //         y: gsap.utils.wrap([50, -50]),
    //         ease: "power2.inOut",
    //         repeat: -1
    //     });
    // }


    return (
        <div className="resume-page flex flex-col items-center justify-center min-h-screen bg-beige p-6">
            <h1 className="resumeText opacity-0 text-3xl font-bold mb-8 text-dark">My Resume</h1>

            {/* <button 
                className="start-spinning-button p-4 rounded-full mb-6 bg-blue-500 text-white"
                onClick={startSpinning}>
                Spin
            </button> */}
    
            <button 
                onClick={() => window.open(resumeLink, "_blank")} 
                className="resume-btn resume-btn1 opacity-0 bg-medium text-dark p-4 rounded-full mb-6 w-56 text-center hover:bg-mediumLight transition duration-300 flex items-center justify-center space-x-3">
                <FontAwesomeIcon icon={faExternalLinkAlt} />
                <span>Open in Browser</span>
            </button>
            
            <div className="atom my-6 opacity-0 transform">
                <img src={logo} alt="Logo" className="App-logo"/>
            </div>
    
            <a 
                href={resume} 
                download="GuyBealsResume.pdf" 
                className="resume-btn resume-btn2 opacity-0 bg-light text-dark p-4 rounded-full w-56 text-center hover:bg-mediumLight transition duration-300 flex items-center justify-center space-x-3">
                <FontAwesomeIcon icon={faDownload} />
                <span>Click to Download Resume</span>
            </a>

            <button className="start-spinning-button p-4 rounded-full mb-6 bg-blue-500 text-white"
            onClick={stopSpinning}>
                Stop
            </button>
        </div>
    );
}

export default ResumePage;
