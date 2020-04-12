import React, { Component } from 'react';
import './App.css';
import MyCard from './components/MyCard'
import MyappFunctionProps from './components/parent_enfant_funct_props/propsFunction';
import MyappDestructuring  from './components/destructuring/destructuringApp';
import MyappCondtionGame  from './components/conditionGame/conditionGames';





class App  extends Component {

  state = {
    "titre" : "Mon catalogue voiture"
  }

  // changeTitle = (e) =>{
  //   console.log(e.target)
  //   this.setState ({"titre" : "Mon nouveau super titre"})
  // };

  // changTiltleParam =(titre) =>{
  //   this.setState({titre : titre})
  // }

  // changeViaBind = (param) =>{
  //   this.setState({titre : param})
  // }

  // changeInput = (e) =>{
  //   console.log(e.target.value)
  //   this.setState({titre : e.target.value })
  // }


  render(){

    return (
      <div className="App">
        <MyCard/>
        {/* <button onClick = {this.changeTitle} >changer le noms en dur</button>
        <button onClick = {()=>this.changTiltleParam("Encore un nouveau titre")} >changer le noms via param</button>
        <button onClick = {this.changeViaBind.bind(this,"titre via le bind")} >changer le noms via un bind</button>
        <input type="text" onChange = {this.changeInput} value ={this.state.titre}/> */}

        <MyappFunctionProps ></MyappFunctionProps>

        <MyappDestructuring></MyappDestructuring>

        <MyappCondtionGame></MyappCondtionGame>


      </div>
    );

  }
}

export default App;
