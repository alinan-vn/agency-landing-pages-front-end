import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

class Footer extends React.Component {

    goToSocial = (url) => {
        window.open(url)
    }

    render(){
        return(    
                <footer className='footer__ul'>
                    <div>
                        {/* <FontAwesomeIcon onClick={() => this.goToSocial('https://www.youtube.com/watch?v=dQw4w9WgXcQ')} className='social-icons' icon={faFacebook} />
                        <FontAwesomeIcon onClick={() => this.goToSocial('https://www.youtube.com/watch?v=dQw4w9WgXcQ')} className='social-icons' icon={faLinkedin} /> */}
                    </div>
                    <li className=''>
                        &copy; Copyright 2020
                    </li>
                </footer>
        )
    }
}

export default Footer;