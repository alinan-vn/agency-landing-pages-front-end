import React from 'react';

class Team extends React.Component {
    constructor(){
        super()
        this.state = {
            namesOne: ['example', 'alejandro'],
            namesTwo: ['linda', 'david'],
            example: require('../../img/team/tools/example-tools.jpg'),
        }
    }

    mouseEnter = (e) => {
        const name = e.target.name
        this.setState({
            ...this.state,
            [name]: require(`../../img/team/faces/${name}-face.jpg`)
        })
    }

    mouseLeave = (e) => {
        const name = e.target.name
        this.setState({
            ...this.state,
            [name]: require(`../../img/team/tools/${name}-tools.jpg`)
        })
    }

    setOne = () => {
        return this.state.namesOne.map(name => {
            return(
                <div className='set'>
                    <img 
                        name={`${name}`}
                        className='tool-img'
                        onMouseEnter={(e) => this.mouseEnter(e)} 
                        onMouseLeave={(e) => this.mouseLeave(e)} 
                        src={this.state[name]} 
                    />
                    <ul>
                        <li>
                            <strong>{name}</strong>
                        </li>
                        <li>
                            pizza
                        </li>
                        <li>
                            polyphia
                        </li>
                        <li>
                            bouldering
                        </li>
                        <li>
                            the strokes
                        </li>
                        <li>
                            yosi horikawa
                        </li>
                    </ul>
                </div>
            )
        })
    }

    setTwo = () => {
        return this.state.namesTwo.map(name => {
            return(
                <div className='set'>
                    <img 
                        name={`${name}`}
                        className='tool-img'
                        onMouseEnter={(e) => this.mouseEnter(e)} 
                        onMouseLeave={(e) => this.mouseLeave(e)} 
                        src={this.state[name]} 
                    />
                    <ul>
                        <li>
                            <strong>{name}</strong>
                        </li>
                        <li>
                            pizza
                        </li>
                        <li>
                            polyphia
                        </li>
                        <li>
                            bouldering
                        </li>
                        <li>
                            the strokes
                        </li>
                        <li>
                            yosi horikawa
                        </li>
                    </ul>
                </div>
            )
        })
    }

    render(){
        return(
            <section className='team'>
                <div className='team__bg-img'>
                    <h1>About the Staff</h1>
                    <p>
                        Here are Windy City Design industries we offer the finest of servies. From the most exquisite design of a gentle flower, to the most hardcore, rigidness, of a killer sting bee.
                    </p>
                </div>
                <div className='columns'>
                    <div className='columns__one'>
                        {this.setOne()}
                    </div>
                    <div className='columns__two'>
                        {this.setTwo()}
                    </div>
                </div>
            </section>
        )
    }
}

export default Team