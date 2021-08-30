import { faCheckSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { createStagiaires } from '../../../../states/actions/stagiareActions'
import { form } from '../../../Stagiaire/style'
import { headerAdmine } from '../../style'

function Enregistrer() {

    const [nom, setNom]= useState("")
    const [prenom, setPrenom]= useState("")
    const [tel, setTel]= useState("")
    const [adr, setAdr]= useState("")
    const [fin, setFin]= useState("")
    const [nbr, setNbr]= useState("")
    const [som, setSom]= useState("")
    const [nat, setNat]= useState("")
    const [sex, setSex]= useState("")
    const [naiss, setNaiss]= useState("")
    const dispatch = useDispatch()
    const soumettre = async (e)=>{
        e.preventDefault()
        const payload = {
            nom: nom,
            prenom: prenom,
            tel: tel,
            adr: adr, 
            fin: fin,
            nbr: nbr,
            som: som,
            nat: nat,
            sex: sex,
            naiss: naiss
        }
        dispatch(createStagiaires(payload))
    };
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
                    <p>Enregistrez un stagiaire</p>
                </div>
                <div className="utilisateurs" style={{fontFamily:"cortana",fontSize:"20px"}}>
                    <form onSubmit="" style={form.forme} >
                        <div  style={form.allpartie}>
                            <div style={form.partie1}>
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
                                        <input type=""value={tel} onChange={(e)=>setTel(e.target.value)}></input>
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
                                        Fin de stage:
                                    </div>
                                    <div style={{display:"flex"}}>
                                        <input type="date" value={fin} onChange={(e)=>setFin(e.target.value)}></input>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div style={{display:"flex"}}>
                                        Nombre de renouvellement:
                                    </div>
                                    <div style={{display:"flex"}}>
                                        <input type="number"value={nbr} onChange={(e)=>setNbr(e.target.value)}></input>
                                    </div>
                                </div>
                            </div>
                        
                            <div style={form.partie2}>
                                    <div className="form-group">
                                    <div style={{display:"flex"}}>
                                        Rémunération:
                                    </div>
                                    <div style={{display:"flex"}}>
                                        <input type="" value={som} onChange={(e)=>setSom(e.target.value)}></input>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div style={{display:"flex"}}>
                                        Nationalité:
                                    </div>
                                    <div style={{display:"flex"}}>
                                        <input type="text" value={nat} onChange={(e)=>setNat(e.target.value)}></input>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div style={{display:"flex"}}>
                                        Sexe:
                                    </div>
                                    <div style={{display:"flex"}}>
                                        <input type="" value={sex} onChange={(e)=>setSex(e.target.value)}></input>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div style={{display:"flex"}}>
                                        Date de naissance:
                                    </div>
                                    <div style={{display:"flex"}}>
                                        <input type="date" value={naiss} onChange={(e)=>setNaiss(e.target.value)}></input>
                                    </div>
                                </div>
                            </div>
                       </div>
                        <button onClick={soumettre}>Soumettre</button>
                    </form>
                </div>
              
        </div>
    )
}

export default Enregistrer
