import React from "react";
import AboutMe from "./aboutMe";
import Contact from "./contact";
import Portfolio from "./portfolio";
import HomePage from "./home";
import ResumePage from "./resume";


export default function Content({ activeSection }) {
    if (activeSection === 'home') {
        return <HomePage />;
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
        return <ResumePage />;
    } 
    else {
        return null;
    }
}