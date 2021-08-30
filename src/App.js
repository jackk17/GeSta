import './App.css';
import { Acceuil } from './frontend/Acceuil';
import { BrowserRouter, Route, Switch, useLocation } from 'react-router-dom';
import { Admin } from './frontend/Administrateur';
import { Stagiaire } from './frontend/Stagiaire';
import { MS } from './frontend/MS';
import { Header } from './frontend/Header';
import { stats } from './frontend/Administrateur/stats';
import Enregistrer from './frontend/Administrateur/Enregistrer/EnregistrerSta/Enregistrer';
import { EnregistrerMS } from './frontend/Administrateur/Enregistrer/EnregistrerMS';
import { login } from './frontend/Administrateur/login';
import { Affecter } from './frontend/Administrateur/section&ms';
import { choix } from './frontend/Administrateur/choix'
import { Pdf } from './frontend/pdf';
import { useEffect, useState } from 'react';
import LogMs from './frontend/MS/logMs/LogMs';
import bg from './images/Togo-cellulaire.jpg'


function App() {

  

  return (
    <BrowserRouter>
     <div className="App">
        <Header/>  
        <headerAdmin/>
        <Switch>
              <Route path="/Acceuil" component={Acceuil}/>
              <Route path="/Stagiaire" component={Stagiaire}/>
              <Route path="/MS" component={MS}/>
              <Route path="/Admin" component={Admin}/> 
              <Route path="/section&ms" component={Affecter}/>
              <Route path="/stats" component={stats}/>
              <Route path="/Enregistrer" component={choix}/>
              <Route path="/EnregistrerMS" component={EnregistrerMS}/>
              <Route path="/EnregistrerSta" component={Enregistrer}/>
              <Route path="/login" component={login}/>
              <Route path="/pdf" component={Pdf}/>
              <Route path="/LogMs" component={LogMs}/>
        </Switch>
     </div>
    </BrowserRouter>
  );
}

export default App;
