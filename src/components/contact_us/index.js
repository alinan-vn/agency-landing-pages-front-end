import React from 'react';

class Contact extends React.Component {

    render(){
        return(

            <main>
                <section className="contact">
                <div>
                    <h1 className="contact__title">Get In Touch</h1>
                </div>

                <div className="contact__para">
                    <p>Let us be your next step to move your idea forward.</p>
                    <p>Et velit veniam magna occaecat consectetur amet magna elit non. Exercitation elit consectetur minim tempor amet et in magna exercitation eu minim sunt dolore ipsum. Cupidatat dolor minim id magna elit magna. Ex et occaecat velit aute exercitation. Nisi incididunt minim est ullamco consequat cillum. Cillum dolor quis magna Lorem.</p>
                </div>

                <div>
                    <p className="contact__leftBox contact__para">Call: (312)450-0445</p>
                    <p className="contact__rightBox contact__para">Email: contact@cityofwinddesign.com</p>
                </div>
                

                </section>
            </main>
        )
    }
}

export default Contact