// import React from "react";

// export default function Navbar ({ activeSection, setActiveSection }) {
//     return(
//         <div className="navbar-banner">
//             <nav>
//                 <button onClick={() => setActiveSection("home")}>Home</button>
//                 <button onClick={() => setActiveSection("AboutMe")}>About Me</button>
//                 <button onClick={() => setActiveSection("Porfolio")}>Porfolio</button>
//                 <button onClick={() => setActiveSection("Contact")}>Contact</button>
//                 <button onClick={() => setActiveSection("Resume")}>Resume</button>
//             </nav>
//         </div>
//     )
// }

import React, { useEffect } from "react";
import gsap from "gsap";


export default function Navbar({ activeSection, setActiveSection }) {
    useEffect(() => {
        const card = document.querySelector('.activator');
        const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });
        
        let toggle = false;
        
        tl.to('.activator', {
            background: 'linear-gradient(#006d77 0%, #e29578 100%)',
            borderRadius: '5em 0 0 5em',
            boxShadow: '0 0 3em #e29578, -10px 10px 2em #83c5be',
            border: '#0D598B'
        })
        .to('#slideBar', {
            clipPath: 'ellipse(100% 100% at 50% 50%)',
            boxShadow: '0 0 3em #edf6f9, -10px 10px 2em #e29578'
        }, "-=.5")
        .to('.nav-button button', {
            opacity: 1,
            transform: 'translateX(0)'
        }, "-=.5")
       

        card.addEventListener('click', () => {
            toggle = !toggle;
            toggle ? tl.reverse() : tl.play();
        });

        // Cleanup listener on component unmount
        return () => {
            card.removeEventListener('click', () => {});
        };
    }, []); // The empty dependency array ensures the effect runs once after component mount

    return (
        <section id="Social">
            <img
                className="activator"
                id="activator"
                src="https://s2.svgbox.net/loaders.svg?ic=bars&color=000000"
                alt="Click to expand"
            />
            <nav id="slideBar">
                <ul id="slideOut">
                    <li className="nav-button">
                        <button onClick={() => setActiveSection("home")}>Home</button>
                    </li>
                    <li className="nav-button">
                        <button onClick={() => setActiveSection("AboutMe")}>About Me</button>
                    </li>
                    <li className="nav-button">
                        <button onClick={() => setActiveSection("Portfolio")}>Portfolio</button>
                    </li>
                    <li className="nav-button">
                        <button onClick={() => setActiveSection("Contact")}>Contact</button>
                    </li>
                    <li className="nav-button">
                        <button onClick={() => setActiveSection("Resume")}>Resume</button>
                    </li>
                </ul>
            </nav>
        </section>
    );
}


