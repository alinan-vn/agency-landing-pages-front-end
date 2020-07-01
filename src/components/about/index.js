import React, { Component } from 'react';

class About extends React.Component {


    render() {
        return (
            <main className="about">
                <div className="bg-img">
                    <h2 className='about__title'>About Us</h2>
                    
                </div> 

                <div className='about__display'>

                    <div>
                        <div className="one">
                            <h2 >Our Philosophy</h2>

                            <p>
                                Do dolor eiusmod adipisicing ad ullamco sint eu proident. Est  duis sunt anim et. Ea dolore nulla aliqua proident tempor. Nostrud aliquip consectetur et officia eu dolor ipsum pariatur aute esse.
                            </p>

                            <p>
                                Magna officia officia et eu cillum Lorem veniam ad excepteur mollit incididunt. Officia ut duis sit aliquip est aliqua sint eiusmod ad voluptate labore. Ex mollit veniam laborum amet in laborum nulla velit. Consectetur velit dolore fugiat eiusmod ipsum non nostrud exercitation non fugiat commodo do fugiat exercitation.
                            </p>

                            <p>
                                We offer a wide variety of services from Logo create to web apps.
                            </p>
                        </div>

                        <div className='one'>
                            <img className='img' src={require('../../img/team/tools/example-tools.jpg')} />
                        </div>

                        <div className="one">
                            <h2>Title Three Test</h2>

                            <p>Dolore elit officia reprehenderit occaecat ipsum reprehenderit est quis consectetur amet do et. Sunt et qui consectetur reprehenderit sint occaecat id sunt consectetur officia eu. Pariatur ex quis reprehenderit incididunt elit voluptate id cillum incididunt. Lorem ipsum ut fugiat eiusmod nostrud ullamco. Adipisicing amet qui cillum laborum. Ipsum deserunt labore adipisicing officia consectetur commodo commodo aute.</p>
                        </div>
                    </div>

                    <div>
                        <div className='two'>
                            <img className='img' src={require('../../img/team/tools/example-tools.jpg')} />
                        </div>

                        <div className="two">
                            <h2 >Our Team</h2>
                            <p>Nisi quis amet Lorem aliqua magna aute voluptate esse nostrud.</p>

                            <p>Ea irure elit occaecat et consectetur minim magna esse dolor occaecat. Mollit nostrud qui consequat labore exercitation consectetur deserunt est eiusmod consequat reprehenderit laborum deserunt. Lorem commodo commodo non cillum anim nisi culpa cillum qui incididunt nulla deserunt fugiat do.</p>

                            <p>
                                We are a team of many backgrounds who collaborate with each other through the whole process of your product.
                            </p>
                        </div>

                        <div className='two'>
                            <img className='img' src={require('../../img/team/tools/example-tools.jpg')} />
                        </div>
                    </div>

                </div>
            </main>
        )
    }
}

export default About