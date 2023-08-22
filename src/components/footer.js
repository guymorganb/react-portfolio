import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram, faSpotify } from '@fortawesome/free-brands-svg-icons';

export default function Footer({ children, github, linkedin, instagram, spotify }) {
  return ( 
      <footer>
          {children}
          <div className='links'>
              <a className="icon" href={github} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} size="3x" color="#1D1D1D" />
              </a>
              <a className="icon"  href={linkedin} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} size="3x" color="#00ACEE" />
              </a>
              <a className="icon"  href={instagram} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faInstagram} size="3x" color="#E25822" />
              </a>
              <a className="icon"  href={spotify} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faSpotify} size="3x" color="#1DB954" />
              </a>
          </div>
      </footer>
  );
}








