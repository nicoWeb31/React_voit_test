import React,{Component,Fragment} from 'react';
import Car from './Cars'


class MyCard extends Component {

    state = {
        voitures :[
            {
                "name": "ford",
                "color":"blue",
                "date":"2012"
            },
            {
                "name": "bmw",
                "color":"rouge",
                "date":"2000"
            },
            {
                "name": "panda",
                "color":"gris",
                "date":"2005"
            },
        ],
        titre : "Mon catalogue de caisse"
    }

    // noCopie = () => {
    //     alert('ce text est proteger')
    // } 

    addStyle = (e) =>{
        console.log(e.target)
        e.target.classList.toggle('styled')

    }

    addTenYears =(e)=>{

        const updateState = this.state.voitures.map((p)=>{
            return p.date -=10 ; 
        })
        this.setState(
        {updateState}
        )
    }


    render() {

        const year = new Date().getFullYear();
        return (
            // fragment remplace la div utile pour validation du code html utilsation avec key ou <> -- </> mais key pas utilisable
            <Fragment > 
                <h1 onMouseOver ={this.addStyle}>{this.state.titre}</h1>
                {/* <p onCopy = {this.noCopie}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id, esse sit accusantium, fugiat dolorem rem nostrum similique voluptatibus laudantium odit iusto vel placeat inventore temporibus exercitationem quos aperiam minima optio!
                </p> */}
                <button onClick = {this.addTenYears}> + 10 ans </button>
                <table className ="carsTable">
                <tr>
                    <th>Marque</th>
                    <th>Age</th>
                    <th>Couleur</th>

                </tr>
                


                {/* data en dur  */}
                {/* <Car color ={this.state.voitures[0].color} annee = {year - this.state.voitures[0].date + " ans"} >{this.state.voitures[0].name}</Car>
                <Car color ={this.state.voitures[1].color} annee ={year - this.state.voitures[1].date + " ans"}>{this.state.voitures[1].name}</Car>
                <Car color = {this.state.voitures[2].color} annee ={year - this.state.voitures[2].date + " ans"}>{this.state.voitures[2].name}</Car> */}

                {/* maper sur le tableau */}
                {
                    this.state.voitures.map((voiture,index) =>{
                        
                        return(
                            <Fragment key = 'index'>
                                    <Car name = {voiture.name} key ={index} color ={voiture.color} annee = {year - voiture.date}/>
                            </Fragment>
                                )
                    })

                }
                </table>
            </Fragment>

        )
    }
}

export default MyCard;