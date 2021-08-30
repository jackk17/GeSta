import { faCheckSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import React, {useEffect, useState } from 'react'
import { confirmAlert } from 'react-confirm-alert'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { createMs } from '../../../../states/actions/msActions'
import { Confirm } from '../../../confirm'
import { Stagiaire } from '../../../Stagiaire'
import { form } from '../../../Stagiaire/style'
import { headerAdmine } from '../../style'


function EnregistrerMS() {
    const[codeMS, setCodeMS]= useState("")
    const[nom, setNom]= useState("")
    const[prenom, setPrenom]= useState("")
    const[tel, setTel]= useState("")
    const[adr, setAdr]= useState("")
    const[fonction,setFonction]= useState("")
    const[code, setCode]= useState("")
    const[log, setLog]= useState("")
    const[mdp, setMdp]= useState("")
    const dispatch = useDispatch()
    var msg
    const soumettre = async (e)=>{
        e.preventDefault()
        const payload = {
            codeMS:codeMS,
            nom: nom,
            prenom: prenom,
            tel: tel,
            adr: adr, 
           fonction:fonction,
            code: code,
            log:log,
            mdp:mdp
        }
        dispatch(createMs(payload))
    };
    const [data, setData]=useState([])

    const fetchData= async ()=>{
        await axios.get('http://localhost:5000/section').then((response)=>{
            setData(response.data)
        })
        .catch((err)=> console.log(err))
    }

    useEffect(() => {
       fetchData()
    }, [])

    return (
        <div style={{width:'100%'}}>
            <nav style={headerAdmine.script}>
                           <ul style={{float:'right', marginRight:'20px', display:'flex', width:'40%', flexDirection:'row', justifyContent:'space-around'}} > 
                                   <li style={{margin:'6px'}}>
                                      <Link to="">        
                                        Déconnecter                  
                                      </Link> 
                                    </li>     
                                   <li style={{margin:'6px'}}>
                                      <Link to="/Admin">        
                                         Acceuil                  
                                      </Link> 
                                    </li>                                                           
                                    <li style={{margin:'6px'}}>
                                       <Link to="/Enregistrer/choix"> 
                                           Enregistrer
                                        </Link>
                                    </li>       
                                    <li style={{margin:'6px'}}>
                                     <Link to="stats">
                                         statistiques
                                     </Link>
                                    </li> 
                                    <li style={{margin:'6px'}}>
                                      <Link to="/section&ms">        
                                         Affecter                  
                                      </Link> 
                                    </li>                             
                           </ul>
                       </nav>
          <div id="contenu" style={{backgroundColor:"red", width:"100%", fontFamily:"cortana",fontSize:"20px"}}>
                    <p>Enregistrez un Maître de stage</p>
                </div>
                <div className="utilisateurs" style={{fontFamily:"cortana",fontSize:"20px"}}>
                <form onSubmit="" style={form.forme} >
                        <div  style={form.allpartie}>
                            <div style={form.partie1}>
                            <div className="form-group">
                                    <div style={{display:"flex"}}>
                                        Code:
                                    </div>
                                    <div style={{display:"flex"}}>
                                        <input type="text" value={codeMS} onChange={(e)=>setCodeMS(e.target.value)}></input>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div style={{display:"flex"}}>
                                        Nom:
                                    </div>
                                    <div style={{display:"flex"}}>
                                        <input type="text" value={nom} onChange={(e)=>setNom(e.target.value)}></input>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div style={{display:"flex"}}>
                                        prénom:
                                    </div>
                                    <div style={{display:"flex"}}>
                                        <input type="text" value={prenom} onChange={(e)=>setPrenom(e.target.value)}></input>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div style={{display:"flex"}}>
                                    Téléphone:
                                    </div >
                                    <div style={{display:"flex"}}>
                                        <input type="" value={tel} onChange={(e)=>setTel(e.target.value)}></input>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div style={{display:"flex"}}>
                                        Adresse:
                                    </div>
                                    <div style={{display:"flex"}}>
                                        <input type="text" value={adr} onChange={(e)=>setAdr(e.target.value)}></input>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div style={{display:"flex"}}>
                                        Fonction:
                                    </div>
                                    <div style={{display:"flex"}}>
                                        <input type="text" value={fonction} onChange={(e)=>setFonction(e.target.value)}></input>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div style={{display:"flex"}}>
                                        Code de sécurité:
                                    </div>
                                        <select onChange={(e) => setCode(e.target.value)}>
                                           {
                                                    data?
                                                    data.map((user)=>(
                                                      <option value={user.codSec} key={user.codSec}>
                                                           {user.libSec}
                                                      </option>
                                                    )):
                                                    undefined
                                            }
                                        </select>
                              </div>
                              <div className="form-group">
                                    <div style={{display:"flex"}}>
                                        Login:
                                    </div>
                                    <div style={{display:"flex"}}>
                                        <input type="text" value={log} onChange={(e)=>setLog(e.target.value)}></input>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div style={{display:"flex"}}>
                                        Mot de passe:
                                    </div>
                                    <div style={{display:"flex"}}>
                                        <input type="text" value={mdp} onChange={(e)=>setMdp(e.target.value)}></input>
                                    </div>
                                </div>
                            </div> 
                       </div>
                        <button onClick={soumettre, alert("Maître de stage bien enrégistré.")}>Soumettre</button>
                    </form>
                </div>
              

        </div>
    )
}

export default EnregistrerMS
