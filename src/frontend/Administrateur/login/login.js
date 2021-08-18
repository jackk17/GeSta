import { faKey } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState }  from 'react'
import Admin from '../Admin'
import { forme } from './style'


function log({l,m}){
    
    if ((l="admin")&&(m="togocel")) {
      return <Admin/>;
    }
    return ("erreur");
}
  
function Login() {
    const [login, setLogin]=useState("")
    const [mdp, setMdp] = useState("")
    return (
        <div style={forme.body}>
            <form onSubmit="" style={forme.box} >
                <header style={{display:"flex", flexDirection:"row"}}>
                   <FontAwesomeIcon icon={faKey}/>
                   <h3>login</h3>
                </header>         
                <input type="text" name="" placeholder="login" style={forme.input} value={login} onChange={(e)=>setLogin(e.target.value)}/>
                <input type="password" name="" placeholder="mot de passe" style={forme.input} value={mdp} onChange={(e)=>setMdp(e.target.value)}/>
                <input type="submit" name="" value="login" style={forme.input} onClick={log({login,mdp})}/>
            </form>
        </div>
    )
}

export default Login
