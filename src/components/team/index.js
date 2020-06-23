import React from 'react';
// import ToolImg from '../../img/team/tools/example-tools.jpg';
// import FaceImg from '../../img/team/faces/pepe-face.jpg';

class Team extends React.Component {
    constructor(){
        super()
        this.state = {
            img: require('../../img/team/tools/example-tools.jpg'),
            imgTwo: require('../../img/team/tools/example-tools.jpg')
        }
    }

    mouseEnter = (e) => {
        const target = e.target.name.split(' ')
        this.setState({
            ...this.state,
            [target[1]]: require(`../../img/team/faces/${target[0]}-face.jpg`)
        })
    }

    mouseLeave = (e) => {
        const target = e.target.name.split(' ')
        this.setState({
            ...this.state,
            [target[1]]: require(`../../img/team/tools/${target[0]}-tools.jpg`)
        })
    }

    render(){
        return(
            <section className='team'>
                <h1 className='team__header'>About the Staff</h1>
                <div className='columns'>
                    <div className='columns__one'>
                        <div className='set'>
                            <img 
                                name='example img'
                                className='tool-img'
                                onMouseEnter={(e) => this.mouseEnter(e)} 
                                onMouseLeave={(e) => this.mouseLeave(e)} 
                                src={this.state.img} 
                            />
                            <ul>
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
                        <div className='set'>
                            <img 
                                name='example img'
                                className='tool-img'
                                onMouseEnter={(e) => this.mouseEnter(e)} 
                                onMouseLeave={(e) => this.mouseLeave(e)} 
                                src={this.state.img} 
                            />
                            <ul>
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
                        <div className='set'>
                            <img 
                                name='example img'
                                className='tool-img'
                                onMouseEnter={(e) => this.mouseEnter(e)} 
                                onMouseLeave={(e) => this.mouseLeave(e)} 
                                src={this.state.img} 
                            />
                            <ul>
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
                        <div className='set'>
                            <img 
                                name='example img'
                                className='tool-img'
                                onMouseEnter={(e) => this.mouseEnter(e)} 
                                onMouseLeave={(e) => this.mouseLeave(e)} 
                                src={this.state.img} 
                            />
                            <ul>
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
                    </div>
                    <div className='columns__two'>
                        <div className='set'>
                            <img 
                                name='example imgTwo'
                                className='tool-img'
                                onMouseEnter={(e) => this.mouseEnter(e)} 
                                onMouseLeave={(e) => this.mouseLeave(e)} 
                                src={this.state.imgTwo} 
                            />
                            <ul>
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
                        <div className='set'>
                            <img 
                                name='example imgTwo'
                                className='tool-img'
                                onMouseEnter={(e) => this.mouseEnter(e)} 
                                onMouseLeave={(e) => this.mouseLeave(e)} 
                                src={this.state.imgTwo} 
                            />
                            <ul>
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
                        <div className='set'>
                            <img 
                                name='example imgTwo'
                                className='tool-img'
                                onMouseEnter={(e) => this.mouseEnter(e)} 
                                onMouseLeave={(e) => this.mouseLeave(e)} 
                                src={this.state.imgTwo} 
                            />
                            <ul>
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
                        <div className='set'>
                            <img 
                                name='example imgTwo'
                                className='tool-img'
                                onMouseEnter={(e) => this.mouseEnter(e)} 
                                onMouseLeave={(e) => this.mouseLeave(e)} 
                                src={this.state.imgTwo} 
                            />
                            <ul>
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
                    </div>
                </div>
            </section>
        )
    }
}

export default Team