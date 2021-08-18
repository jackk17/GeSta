import { faKey } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState }  from 'react'
import Admin from '../Admin'
import { forme } from './style'



  
function Login() {

    const [login, setLogin]=useState("")
    const [mdp, setMdp] = useState("")
    const [loggedIn, setloggedIn] = useState(false)
    return (
        <div >
            {
            loggedIn?
            <Admin/> :
            <div style={forme.body}>
            <form onSubmit="" style={forme.box} >
                <header style={{display:"flex", flexDirection:"row"}}>
                   <FontAwesomeIcon icon={faKey}/>
                   <h3>IDENTIFIEZ VOUS</h3>
                </header>         
                <input type="text" name="" placeholder="login" style={{...forme.input,borderRadius:50}} value={login} onChange={(e)=>setLogin(e.target.value)}/>
                <input type="password" name="" placeholder="mot de passe" style={{...forme.input,borderRadius:50}} value={mdp} onChange={(e)=>setMdp(e.target.value)}/>
                <input type="submit" name="" value="LOGIN" style={{...forme.input,borderRadius:50}} onClick={(e) => {
                    e.preventDefault()
                    if ((login=="admin")&&(mdp=="togocel")) {
                        setloggedIn(true)
                      }
                }}/>
            </form>
            </div>
            }
        </div>
    )
}

export default Login
