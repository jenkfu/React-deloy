import React from 'react';
//import logo from './logo.svg';
import nectar from './nectar.png'
import './App.css';
import Hello from './components/Hello';
import Card from './components/Card';
import JsxExemple from './components/JsxExemple';
import Table from './components/Table';
import data from './json/Users.json';
import data2 from './json/Users2.json';
import StateExemple from './Hooks/StateExemple';
import Counter from './Hooks/Count.js';
import Example from './Hooks/UseEffectExemple.js';
import Header from './Hooks/Header.js';
// import Routeur from './Route/Routeur.js'


function App() {

  const Users = [
    { name: 'Alice', job: 'Secrétaire', mail: 'sophie@iim.fr' },
    { name: 'Anna', job: 'RH', mail: 'anna@iim.fr' },
    { name: 'Guillaume', job: 'Salarié', mail: 'guillaume@iim.fr' },
    { name: 'Kevin', job: 'Cadre', mail: 'kevin@iim.fr' },
    { name: 'Jennifer', job: 'Alternante', mail: 'jennifer@iim.fr' },
  ]
  return (
    
    <React.Fragment>
       {/* <Routeur/> */}
      <Header/>
      <header className="App-header">
     
      <Table dataUser= {Users}/>
      <br></br>
      <Table dataUser= {data.users}/>
      <br></br>
      <Table dataUser= {data2}/>
       
        <p>
         <Hello name = "Jennifer NUKAFU"/>
        </p>
       
        <Card title="Nectar" desc="Nectar est la dernier album de l'artiste joji" image={nectar}/>

        <br></br>
       <StateExemple/>
       <br></br>
       <Counter/>
      
       <JsxExemple/>

       <Example/>
      </header> 
      </React.Fragment>
  );
}

export default App;
