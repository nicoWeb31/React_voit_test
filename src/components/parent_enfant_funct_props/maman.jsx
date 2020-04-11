import React,{Component} from 'react';
import Toto from './Toto'

class Maman extends Component {
    state = {
        messageMaman : null,
        messageToto : null
    
    };
    ordreMams =()=>{
        this.setState({
            messageMaman : 'range ta chambre'
        });
    };

    reponseToto = () =>{
        this.setState({
            messageToto : "ok mams"
        });
    };

    render() {
        return (
            <div className ="maman">
                <h1>Maman</h1>
                <button onClick ={this.ordreMams} >ordre de la mams</button>
                <p>{this.state.messageMaman}</p>
                
                <hr/>
                <Toto name = "Toto" stateMam = {this.state} repTot ={this.reponseToto}/>
            </div>
        )
    }
}

export default Maman;