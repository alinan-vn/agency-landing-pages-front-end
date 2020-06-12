import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';


class Footer extends React.Component {

    render(){
        return(    
                <footer className='footer__ul'>
                    <a href='!#' className=''>
                        <FontAwesomeIcon className='fa__social-media' icon={faFacebook} />
                    </a>
                    <a href='!#' className=''>
                        <FontAwesomeIcon className='fa__social-media' icon={faTwitter} />
                    </a>
                    <a href='!#' className=''>
                        <FontAwesomeIcon className='fa__social-media' icon={faInstagram} />
                    </a>
                    <li className=''>
                        &copy; Copyright 2020
                    </li>
                </footer>
        )
    }
}

export default Footer;