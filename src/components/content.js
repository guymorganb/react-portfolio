import React from "react";
import AboutMe from "./aboutMe";
import Contact from "./contact";
import Portfolio from "./portfolio";


export default function Content({ activeSection }) {
    if (activeSection === 'home') {
        return <div>Home content</div>;
    } 
    else if (activeSection === 'AboutMe') {
        return <AboutMe />;
    } 
    else if (activeSection === 'Portfolio') {
        return <Portfolio />
    } 
    else if (activeSection === 'Contact') {
        return <Contact />;
    } 
    else if (activeSection === 'Resume') {
        return <div>Download Resume</div>;
    } 
    else {
        return null;
    }
}