import React,{Component} from 'react';
import Users from './Singers'

class Display extends Component {

render(){
    return(
        <div>
            <h2>Musiscien</h2>
            <Users name ="bob" age ="45" />
            <Users name ="santana" age ="56"/>
            <Users name ="tio" age ="34"/>

        </div>
    )
}
}

export default Display