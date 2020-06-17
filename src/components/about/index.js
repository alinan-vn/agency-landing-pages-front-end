import React, { Component } from 'react';

class About extends React.Component {


    render() {
        return (
            <main className="about">
                <div className="trans-box">
                    <h2>About Us</h2>
                </div>

                <div className="content-left">
                    <h3 >Our Philosophy</h3>

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

                <div className="content-right">
                    <h3 >Our Team</h3>
                    <p>Nisi quis amet Lorem aliqua magna aute voluptate esse nostrud.</p>

                    <p>Ea irure elit occaecat et consectetur minim magna esse dolor occaecat. Mollit nostrud qui consequat labore exercitation consectetur deserunt est eiusmod consequat reprehenderit laborum deserunt. Lorem commodo commodo non cillum anim nisi culpa cillum qui incididunt nulla deserunt fugiat do.</p>

                    {/* <p>
                        We are a team of many backgrounds who collaborate with each other through the whole process of your product.
                    </p> */}
                </div>
            </main>
        )
    }
}

export default About