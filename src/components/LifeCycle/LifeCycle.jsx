import React,{Component} from 'react';
// import ChildComponent from './childComponent';



// rce raccourci vs pour component de type classe
class MyappLifeCycle extends Component {


    //rconste raccourci vs
    constructor(props) {
        super(props)
    
        this.state = {
            name : "toto",
            step : 1
        }
        console.log(`etape : ${this.state.step} : je suis dans le constructeur()`)
    }

    // cdm vs
    componentDidMount() {
        console.log(`etape : ${this.state.step} : je suis dans le componentDidMount`)
        this.setState({
            name : this.props.name,
            step : this.state.step +1
        })
        console.log(`etape : ${this.state.step} : je suis dans le componentDidMount apres maj du state`)

    }

    //cdu vs
    componentDidUpdate(prevProps, prevState) {
        console.log(`etape : ${this.state.step} : je suis dans le cdupdate apres maj du state`)
        
    }

    componentWillUnmount() {
        console.log('je suis dans le components will unmount')
    }
    
    

    render() {

        console.log(`etape : ${this.state.step} : je suis dans le render()`)
        
        return (

            <div className = "borderBox">
                {console.log(`etape : ${this.state.step} : je suis dans le return maj du dom`)}

                <p>chargement : {this.state.step}</p>
                <p> name : {this.state.name}</p>
                {/* <ChildComponent/> */}
            </div>
        )
    }
}

export default MyappLifeCycle;