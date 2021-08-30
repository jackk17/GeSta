import { faKey } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState }  from 'react'
import { confirmAlert } from 'react-confirm-alert';
import Admin from '../Admin'
import { forme } from './style'
import Session from 'react-session-api'



  
function Login() {

    const [login, setLogin]=useState("")
    const [mdp, setMdp] = useState("")
    const [loggedIn, setloggedIn] = useState(false)
    const [numOfChange, setnumOfChange] = useState(0)
    const [user, setUser] = useState({login:'', mdp:''})

    const checkUser = () => {
        //const user = sessionStorage.get("user")
        setUser({login: sessionStorage.getItem("login"), mdp:sessionStorage.getItem("mdp")})
    }

    useEffect(() => {
        checkUser()
    }, [numOfChange])



    return (
        
        <div style={{flex:1}} >
            {
                user.login=='admin' && user.mdp=='togocel'?
                <Admin/>:
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
                            sessionStorage.setItem("login", "admin");
                            sessionStorage.setItem("mdp", "togocel");
                            setnumOfChange(numOfChange+1)
                        }
                        else{
                            const options = {
                                title:'Authentification',
                                message: 'logi ou mot de passe incorrect',
                                buttons:[
                                    {
                                    label: 'okay',
                                    onClick: ''
                                    },
                                ],
                                childrenElement: () => <div />,
                                closeOnEscape: true,
                                closeOnClickOutside: true,
                                willUnmount: () => {},
                                afterClose: () => {},
                                onClickOutside: () => {},
                                onKeypressEscape: () => {},
                                overlayClassName: "overlay-custom-class-name"
                            };
                            confirmAlert(options);
                        }
                    }}/>
                </form>
                </div>
            }
        </div>  
            
            
    )
}

export default Login

{/*user!=={login: 'admin', mdp: 'togocel'}?
            <Admin/> : */

/*
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
                        Session.setItem("user", {
                            login: login,
                            mdp: mdp
                        })
                        checkUser()
                    }
                    else{
                        const options = {
                            title:'Authentification',
                            message: 'logi ou mot de passe incorrect',
                            buttons:[
                                {
                                label: 'okay',
                                onClick: ''
                                },
                            ],
                            childrenElement: () => <div />,
                            closeOnEscape: true,
                            closeOnClickOutside: true,
                            willUnmount: () => {},
                            afterClose: () => {},
                            onClickOutside: () => {},
                            onKeypressEscape: () => {},
                            overlayClassName: "overlay-custom-class-name"
                        };
                        confirmAlert(options);
                    }
                }}/>
            </form>
            </div>
            }
        </div>
        */}