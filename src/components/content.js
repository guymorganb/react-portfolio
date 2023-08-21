import React from "react";

export default function Content ({ activeSection }) {
    if (activeSection === 'home') {
        return <div>Home Content</div>;
        } 
        else if (activeSection === 'AboutMe') {
        return <div>About Content</div>;
        } 
        else if (activeSection === 'Porfolio') {
        return <div>Contact Content</div>;
        } 
        else if (activeSection === 'Contact') {
        return <div>About Content</div>;
        } 
        else if (activeSection === 'Resume') {
        return <div>Contact Content</div>;
        } 
        else {
        return null;
        }
}