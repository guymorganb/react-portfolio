import './App.css'
import logo from '../logo.svg'
import Navbar from './navbar';
import Content from './content';
import Footer from './footer';
import React, {useState} from 'react';


function App() {
  const[activeSection, setActiveSection] = useState('home');

  return (
    <div className="App">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection}/>
      <Content activeSection={activeSection}
         linkedin="https://www.linkedin.com/in/guymorganb/"
         instagram="https://www.instagram.com/zero.to.fullstack/"
          github="https://github.com/guymorganb" 
          />
      <Footer 
      github="https://github.com/guymorganb"
      linkedin="https://www.linkedin.com/in/guymorganb/"
      instagram="https://www.instagram.com/zero.to.fullstack/"
      spotify="https://open.spotify.com/user/12151690322">
      <span className="typewriter-text">A React App</span>
      <img src={logo} alt="Logo" className="App-logo" />
      </Footer>
    </div>
  );
}

export default App;
