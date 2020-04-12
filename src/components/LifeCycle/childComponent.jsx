import React, { Component } from 'react'

export class ChildComponent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
        }
        console.log(`etape : ${this.state.step} : je suis dans le constructeur enfant`)
    }

    componentDidMount() {
        console.log(`etape : ${this.state.step} : je suis dans le componentDidMount enfants`);

    }
    
    
    render() {
        console.log(`etape : ${this.state.step} : je suis dans le render enfant`)
        return (
            <div>
                {console.log(`etape : ${this.state.step} : je suis dans le return maj du dom Enfants`)}
                <h1>hello</h1>
            </div>
        )
    }
}

export default ChildComponent
