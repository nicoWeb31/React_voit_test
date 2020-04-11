import React from 'react';


const Toto = ({name,stateMam,repTot}) =>{

    const btnRep = stateMam.messageMaman !== null ? (<button onClick = {repTot}>Réponse</button>) : (<button disabled> Réponse</button>);
    console.log(repTot)
    return (
        <div>
            <h2>{name}</h2>
            {btnRep}
            {/* recupere le message toto du stats Maman */}
            <p>{stateMam.messageToto}</p> 
        </div>
    )
}

export default Toto;