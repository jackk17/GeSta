import { faKey } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { confirmAlert } from 'react-confirm-alert'
import { forme } from '../../Administrateur/login/style'
import MS from '../MS'

function LogMs() {
    const [login, setLogin]=useState("")
    const [mdp, setMdp] = useState("")
    const [numOfChange, setnumOfChange] = useState(0)
    const [ms, setMs] = useState({login:'', mdp:''})
    const [data, setData] = useState([])
    var[retour, setRetour]=useState("false")
    const checkMs = () => {
        setMs({login: sessionStorage.getItem("login"), mdp:sessionStorage.getItem("mdp")})
    }
    var l
    var m
    const fetchData= async (l,m)=>{
        await axios.get(`http://localhost:5000/logMs/${l}/${m}`).then((response)=>{
            setData(response.data)
        })
        .catch((err)=> console.log(err))
    }

    useEffect(() => {
        checkMs()
        fetchData(l,m)
    }, [numOfChange])

    if (data==null) {
        retour="false"
    }else{
       retour="true"
       /*  {
            data.map(d=>(
                a=d.codMS,
                b=d.nomMS
            ))
            undefined
       }*/
    }
   
    return (
        <div>
             <div style={{flex:1}} >
            {
                
                <div style={forme.body}>
                <form onSubmit="" style={forme.box} >
                    <header style={{display:"flex", flexDirection:"row"}}>
                       <FontAwesomeIcon icon={faKey}/>
                       <h3>IDENTIFIEZ VOUS</h3>
                    </header>         
                    <input type="text" name="" placeholder="login" style={{...forme.input,borderRadius:50}} value={login} onChange={(e)=>setLogin(e.target.value)}/>
                    <input type="password" name="" placeholder="mot de passe" style={{...forme.input,borderRadius:50}} value={mdp} onChange={(e)=>setMdp(e.target.value)}/>
                    <input type="submit" name="" value="LOGIN" style={{...forme.input,borderRadius:50}} onClick={() => {
                        fetchData(login,mdp)
                        if (retour=="true") {
                            sessionStorage.setItem("login", "admin");
                            sessionStorage.setItem({login}, {mdp});
                             <MS/>
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
            
       
        </div>
    )
}

export default LogMs
