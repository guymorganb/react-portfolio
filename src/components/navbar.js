import React from "react";

export default function Navbar ({ activeSection, setActiveSection }) {
    return(
        <div className="navbar-banner">
            <nav>
                <button onClick={() => setActiveSection("AboutMe")}>About Me</button>
                <button onClick={() => setActiveSection("Porfolio")}>Porfolio</button>
                <button onClick={() => setActiveSection("Contact")}>Contact</button>
                <button onClick={() => setActiveSection("Resume")}>Resume</button>
            </nav>
        </div>
    )
}
