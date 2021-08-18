import './App.css';
import { Acceuil } from './frontend/Acceuil';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Admin } from './frontend/Administrateur';
import { Stagiaire } from './frontend/Stagiaire';
import { MS } from './frontend/MS';
import { Header } from './frontend/Header';
import affecter from './frontend/Administrateur/section&ms/affecter';
import { stats } from './frontend/Administrateur/stats';
import Enregistrer from './frontend/Administrateur/Enregistrer/EnregistrerSta/Enregistrer';
import { EnregistrerMS } from './frontend/Administrateur/Enregistrer/EnregistrerMS';
import { choix } from './frontend/Administrateur/Enregistrer';
import { login } from './frontend/Administrateur/login';





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
              <Route path="/section&ms" component={affecter}/>
              <Route path="/stats" component={stats}/>
              <Route path="/Enregistrer" component={choix}/>
              <Route path="/EnregistrerMS" component={EnregistrerMS}/>
              <Route path="/EnregistrerSta" component={Enregistrer}/>
              <Route path="/login" component={login}/>
        </Switch>
     </div>
    </BrowserRouter>
  );
}

export default App;
