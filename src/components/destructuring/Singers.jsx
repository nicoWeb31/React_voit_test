//ua component  -  statless component
import React from 'react';

// const Useurs =({name,age})=>{

    
//     console.log(name,age);

//     return (
//         <div>
//             <p>Chanteurs : </p>
//         </div>
//     )
// }


// destucturing en classe ca donne  on ajoute le this qui fait ref au props de la classe:

class Useurs extends React.Component{



    render(){

        const {name,age} = this.props

        console.log(this.props)

        return (
            <div>
                <p>Chanteurs : {name} {age} ans</p>
            </div>
        )
    }

} 



export default Useurs;