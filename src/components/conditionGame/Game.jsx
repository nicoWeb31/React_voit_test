import React,{Component} from 'react';




class ResultGame extends Component {

    state = {
        name : "Mario",
        winner : false
    }

    

    render() {

        //avec le terner version rapide et moderne
        return (
            this.state.winner ? <h2>Resut Game bravo {this.state.name} tu as gagner</h2> : <h2>Resut Game bravo {this.state.name} tu as perdu </h2>
            // this.state.winner ? <h2>Resut Game bravo {this.state.name} tu as gagner</h2> : ''
            // ou si retourne qu'une chose -- return this.state.winner && <h2>Resut Game bravo {this.state.name} tu as gagner</h2>
        )


        // Avec le if a l'ancienne
        // let result ;

        // if(this.state.winner){
        //     result = (
        //         <div >
        //             <h2>Resut Game bravo {this.state.name} tu as gagner</h2>
        //         </div>
        //             )
            
        // }else{
        //     result = (
        //         <div >
        //             <h2>Resut Game bravo {this.state.name} tu as perdu </h2>
        //         </div>
        //     )
        // }
        // return result;
    }
}

export default ResultGame;