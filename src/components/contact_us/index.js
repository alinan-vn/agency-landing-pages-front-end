import React from "react";

class Contact extends React.Component {
  constructor(){
    super();
    this.state={
      first_name: "",
      last_name: "",
      email: ""
    }
  }

  handleInputChange = (event) => {
    // console.log(event.target.value)

    this.setState({
      ...this.state, [event.target.name]:[event.target.value]
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    const postObj = {
      method: "POST",
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify(this.state)
    }

    fetch("http://localhost:3000/prospects", postObj)
    .then( resp => resp.json() )
    .then( data => {console.log(data)})

  }

  render() {
    return (
      <main>
        <section className="contact">
          <div>
            <h1 className="contact__title">Get In Touch</h1>
          </div>

          <div className="contact__para">
            <p>Let us be your next step to move your idea forward.</p>
            <p>
              Et velit veniam magna occaecat consectetur amet magna elit non.
              Exercitation elit consectetur minim tempor amet et in magna
              exercitation eu minim sunt dolore ipsum. Cupidatat dolor minim id
              magna elit magna. Ex et occaecat velit aute exercitation. Nisi
              incididunt minim est ullamco consequat cillum. Cillum dolor quis
              magna Lorem.
            </p>
          </div>

          <div>
            <p className="contact__leftBox contact__para">
              Call: (312)450-0445
            </p>
            <p className="contact__rightBox contact__para">
              Email: contact@cityofwinddesign.com
            </p>
          </div>

          <div class="">
            <form  onSubmit={this.handleSubmit}>
              <input name="first_name" onChange={this.handleInputChange} placeholder="First Name" />
              <input name="last_name" onChange={this.handleInputChange} placeholder="Last Name" />
              <input name="email" onChange={this.handleInputChange} placeholder="Email" />
              <input type="submit" onChange={this.handleInputChange} value="Submit" />
            </form>
          </div>
        </section>
      </main>
    );
  }
}

export default Contact;
