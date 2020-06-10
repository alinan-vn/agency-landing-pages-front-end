import React, {Component} from 'react';

export default class Nav extends Component { 
render() {
    return (
       <nav>
           <ul>
               <li>
                   <a href="/">
                       Agency X
                   </a>
               </li>
               <li>
                   <a href="/about">
                       About
                   </a>
               </li>
               <li>
                   <a href="/projects">
                       Projects
                   </a>
               </li>
               <li>
                   <a href="/staff">
                       Staff
                   </a>
               </li>
               <li>
                   <a href="/contact-us">
                       Contact Us
                   </a>
               </li>
           </ul>
       </nav>
    )
}
}