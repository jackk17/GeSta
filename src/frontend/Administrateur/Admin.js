import { faCheckSquare, faTrashAlt, faUserEdit } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import React, { useEffect,createElement, useState } from 'react'
import { BrowserRouter, Link, Route, Switch} from 'react-router-dom'
import { header } from '../Header/style'
import { headerAdmine } from './style'




function Admin() {
    const [data, setData]=useState([])
    const[ms, setMs]= useState([])
    const fetchData= async ()=>{
        await axios.get('http://localhost:5000/stagiaire').then((response)=>{
            setData(response.data)
        })
        .catch((err)=> console.log(err))
    }

    useEffect(() => {
       fetchData()
    }, [])
    const fetchMs= async ()=>{
        await axios.get('http://localhost:5000/MS').then((resp)=>{
            setMs(resp.ms)
        })
        .catch((err)=> console.log(err))
    }

    useEffect(() => {
       fetchMs()
    }, [])

    return (
        <div className="admin" style={headerAdmine.general}>
                       <nav style={headerAdmine.script}>
                           <ul style={{float:'right', marginRight:'20px'}} >
                               
                                    <Link to="/Enregistrer/choix">                                   
                                     <li style={{display:'inline-block',lineHeight:'80px',margin:'0 5px'}}>
                                         <a style={{color:'green',fontSize:'17px'}}>Enregistrer</a></li>       
                                    </Link>
                           
                                    <Link to="stats">
                                      <li style={{display:'inline-block',lineHeight:'80px',margin:'0 5px'}}>
                                          <a style={{color:'green',fontSize:'17px'}}>statistiques</a>
                                        </li> 
                                    </Link>

                                    <Link to="/section&ms">    
                                     <li style={{display:'inline-block',lineHeight:'80px',margin:'0 5px'}}>
                                         <a style={{color:'green',fontSize:'17px'}}>Affecter</a>
                                        </li>                       
                                    </Link>                             
                           </ul>
                       </nav>
            <div id="conteneur">    
                <h1 id="header"><a title="Colored Design - Accueil"><span>ADMINISTRATEUR</span></a></h1>
                <div id="contenu">
                    <h1>Liste des Stagiaires</h1>
                    <table border="1">
                        <tr>
                            <th>Nom</th>
                            <th>Prénom</th>
                            <th>Téléphone</th>
                            <th>Adresse</th>
                            <th>supprimer</th>
                            <th>modifier</th>
                        </tr>

                        {
                            data.map((stagiaire,index)=>(
                                <tr>
                                    <td>{stagiaire.nomSta}</td>
                                    <td>{stagiaire.prenomSta}</td>
                                    <td>{stagiaire.telSta}</td>
                                    <td>{stagiaire.adrSta}</td>
                                    <td>
                                        <Link>
                                            <FontAwesomeIcon icon={faTrashAlt} color="black" size="2x"/>
                                        </Link>
                                    </td>
                                    <td>
                                        <Link>
                                            <FontAwesomeIcon icon={faUserEdit} color="black" size="2x"/>
                                        </Link>
                                    </td>
                              </tr>
                            ))
                        }
                        
                    </table> 
                    <h1>Liste des maîtres de stage</h1>
                   <table border="1">
                       <tr>
                            <th>Nom</th>
                            <th>Prénom</th>
                            <th>Téléphone</th>
                            <th>Adresse</th>
                            <th>supprimer</th>
                            <th>modifier</th>
                       </tr>

                       {
                            data.map((m,index)=>(
                                <tr>
                                    <td>{m.nomSta}</td>
                                    <td>{m.prenomSta}</td>
                                    <td>{m.telSta}</td>
                                    <td>{m.adrSta}</td>
                                    <td>
                                        <Link>
                                            <FontAwesomeIcon icon={faTrashAlt} color="black" size="2x"/>
                                        </Link>
                                    </td>
                                    <td>
                                        <Link>
                                            <FontAwesomeIcon icon={faUserEdit} color="black" size="2x"/>
                                        </Link>
                                    </td>
                              </tr>
                            ))
                        }
                        
                   </table>
                    <p id="footer">Réalisation des codes HTML/CSS, du tutoriel et du design par ElMoustiko</p>
                </div>
            </div>
        </div>
    )
}

export default Admin
