import React,{Component} from 'react';
import Car from './car'





class Form extends Component {

    state ={
        username : '',
        color: '',
        colors : ["","red","blue","green"],
        comment: ''
    }

    handlerPseudo = (e) => {
        //console.log(e.target.value)
        this.setState({
            username : e.target.value
        })
    }

    handelColor =(event) => {
        this.setState({
            color : event.target.value
        })
    }

    handlerComment = (event) => {
        this.setState({
            comment : event.target.value
        })
    }

    submitForm = (e) =>{
        e.preventDefault();
        console.log(`username : ${this.state.username} couleur :${this.state.color} comment : ${this.state.comment}`)

    }
    
    

    render() {



        return (

            <div >
                <Car height ="400" color = {this.state.color} name = {this.state.username}/>
                <h1>Commentaire</h1>
                
                <form action="" onSubmit={this.submitForm}>
                    <div>
                    <label htmlFor="">Pseudo</label>
                    <input type="text" value = {this.state.username} onChange = {this.handlerPseudo} name="usersName"/>
                    </div>
                    <div>
                        <select value = {this.state.color} onChange ={this.handelColor}>
                        {
                                this.state.colors.map((color,index) => { 
                                return <option hey = {index} value = {color}>{color}</option>
                                })
                        }
                        </select>

                    </div>
                    <div>
                        <label> Commentaire : </label>
                        <textarea value = {this.state.comment}  onChange = {this.handlerComment} cols="30" rows="10" />
                    </div>

                    <button >valider</button>
                </form>

            </div>
        )
    }
}

export default Form;