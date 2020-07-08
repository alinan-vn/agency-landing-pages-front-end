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
                            <p>Startups are the heart of the Chicago tech community, so we want you to succeed. Many start-ups fail because they scale too fast. We use data-backed design in order to make sustainable product decisions, increasing the odds your startup will be around making lives better, forever. Our ongoing business partnerships and design community make us experts in building sustainable products and cultures.
                            </p>

                            <h2>~ Person Two</h2>
                        </div>

                        <div className='one'>
                            <img className='img' src={require('../../img/team/tools/example-tools.jpg')} />
                        </div>

                        <div className="one">
                            <p>We are “experience explorers.” We get to the core of the problem, delve deep into our users, and uncover the domain in which we are working. Empathy and a ridiculous (staggering/vast??) amount of curiosity (or innate curiosity?) drive us and our work.</p>

                            <p>Researchers, detectives, explorers...call us what you want. We know it is critical to uncover the true problem and deeply understand your users and your business. Our exploration is ongoing - before, during, and after we design. (OR...We never stop exploring; curiosity drives us through the entire design thinking process)</p>

                            <h2>~ Ingrid <em>Designer extra-Overlord</em></h2>
                        </div>

                        <div className='one'>
                            <img className='img' src={require('../../img/team/tools/example-tools.jpg')} />
                        </div>
                    </div>

                    {/* {//////////////////} */}

                    <div>
                        <div className='two'>
                            <img className='img' src={require('../../img/team/tools/example-tools.jpg')} />
                        </div>

                        <div className="two">
                            <p>As designers, we go into great lengths about the depths of our empathy but sometimes forget about our ethical and pragmatic responsibilities to not just our users and stakeholders, but to the environment, too.  Our unified goal at City of Wind Design is to create sustainable digital products that accommodate everyone, not just a few.  It’s just good business.</p>

                            <h2>~ Person One</h2>
                        </div>

                        <div className='two'>
                            <img className='img' src={require('../../img/team/tools/example-tools.jpg')} />
                        </div>

                        <div className="two">
                            <p>Were intentional in our design approach. Bringing lenses of accessibility, inclusivity  and sustainability into our design practices. The evidence shows higher ROI impact for your startups and reaching a wider range of users.</p>

                            <p>Beyond digital products, our team specializes in cutting edge design practices to craft exceptional experiences, services, workshops and even delightful pitch decks for your startup needs.</p>

                            <h2>~ David <em>CEO/CFO/COO/CIO/Founder/Wonder Boy extrodonaire/Designer Overlord</em></h2>
                        </div>

                        <div className='two'>
                            <img className='img' src={require('../../img/team/tools/example-tools.jpg')} />
                        </div>

                        <div className="two">
                            <p>Including the products or services we offer, we always create so that we leave our corner in a better state than how we found it. We work hard to deliver our services at the highest quality while thinking ahead to minimize unintentional symptoms/ side effects (probably a better wording here) by always maintaining a ‘future-proofing’ mindset. We aren’t just designers and engineers, we are people that work to preserve while we improve.</p>

                            <h2>~ Alejandro</h2>
                            <h2><em>I'm just a poor boy nobody loves me</em></h2>
                            <h2><strong>HE'S JUST A POOR BOY, FROM A POOR FAMILY</strong></h2>
                        </div>
                    </div>

                </div>
            </main>
        )
    }
}

export default About