import React, {Component} from 'react';

export default class Nav extends Component { 
render() {
    return (
       <header>
           <ul className='nav-ul'>
               <li className='nav-li'>
                   <a href="/">
                       Agency X
                   </a>
               </li>
               <li className='nav-li'>
                   <a href="/about">
                       About
                   </a>
               </li>
               <li className='nav-li'>
                   <a href="/projects">
                       Projects
                   </a>
               </li>
               <li className='nav-li'>
                   <a href="/staff">
                       Staff
                   </a>
               </li>
               <li className='nav-li'>
                   <a href="/contact-us">
                       Contact Us
                   </a>
               </li>
           </ul>
       </header>
    )
}
}