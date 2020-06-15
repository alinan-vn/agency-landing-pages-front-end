import React, { Component } from 'react';

class Projects extends React.Component {
    constructor(){
        super()
        this.state = {
            projectImages: [
                '../../img/project_images/example.jpg',
                '../place one', 
                '../asdfasdf'
            ]
        }
    }

    render(){
        return(
            <main>
                <section className='projects'>
                    <div className='projects__landing-image'>
                        <h3 className='projects__header-text'>
                            Here, peacefully, lie our projects may they rest in peace. Take a gander and see what you like ;)
                        </h3>
                    </div>
                    <div>
                        <div>
                            <img src={require('../../img/project_images/example.jpg')} alt='example' />
                            <p>image should be here</p>
                        </div>
                        <div>
                            <img src={require('../../img/project_images/example.jpg')} alt='example' />
                            <p>image should be here</p>
                        </div>
                        <div>
                            <img src={require('../../img/project_images/example.jpg')} alt='example' />
                            <p>image should be here</p>
                        </div>
                    </div>
                </section>
            </main>
        )
    }
}

export default Projects