import { faAngleDown, faArrowCircleUp, faArrowDown, faArrowsAlt, faArrowUp, faCheckSquare, faSign, faTrashAlt, faUserEdit, faWonSign } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import React, { useEffect,createElement, useState } from 'react'
import { confirmAlert } from 'react-confirm-alert'
import { BrowserRouter, Link, Route, Switch} from 'react-router-dom'
import { Confirm } from '../confirm'
import { header } from '../Header/style'
import { MS } from '../MS'
import { headerAdmine } from './style'
import 'react-confirm-alert/src/react-confirm-alert.css'
import './Admin.css'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { requestStagiaires } from '../../states/actions/stagiareActions'
import { requestMs } from '../../states/actions/msActions'


function Admin() {
    const [data, setData]=useState([])
    const[m, setMs]= useState([])
    const dispatch = useDispatch()

    const stagiairesState = useSelector(state => state.stagiaires)
    const msState = useSelector(state => state.ms)
    const {loading, stagiaires, error} = stagiairesState
    const {loadings, ms, err} = msState
    const supSta= async (id)=>{
        await axios.delete(`http://localhost:5000/supSta/${id}`).then((response)=>{
        })
        .catch((err)=> console.log(err))
    }
    const supMs= async (id)=>{
        await axios.delete(`http://localhost:5000/supMs/${id}`).then((response)=>{
        })
        .catch((err)=> console.log(err))
    }
    useEffect(() => {
        console.log(ms)
        console.log(data)
    }, [ms, data])

    useEffect(() => {
        dispatch(requestStagiaires())
        dispatch(requestMs())
     }, [dispatch])

    return (
        <div className="admin" style={{...headerAdmine.general,width:'100%'}}>
                       <nav style={headerAdmine.script}>
                           <ul style={{float:'right', marginRight:'20px', display:'flex', width:'40%', flexDirection:'row', justifyContent:'space-around'}} > 
                                    <li style={{margin:'6px'}}>
                                      <Link to="/login" onClick={
                                          (e) => {
                                              sessionStorage.removeItem('login')
                                              sessionStorage.removeItem('mdp')
                                              window.location.reload()
                                          }
                                      }>        
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
            <div id="conteneur">    
                <h1 id="header" title="Colored Design - Accueil" style={{color:'yellow'}}>ADMINISTRATEUR</h1>
                <div id="contenu">
                    <h1 style={{color:'yellow'}}>Liste des Stagiaires</h1>
                    <table border="1">
                        <tr>
                            <th>Nom</th>
                            <th>Prénom</th>
                            <th>Téléphone</th>
                            <th>Adresse</th>
                            <th>Fin de stage</th>
                            <th>supprimer</th>
                            <th>modifier</th>
                            <th>Renouveler</th>
                        </tr>

                        {
                            stagiaires &&
                            stagiaires.map((stagiaire,index)=>(
                                <tr key={index}>
                                    <td>{stagiaire.nomSta}</td>
                                    <td>{stagiaire.prenomSta}</td>
                                    <td>{stagiaire.telSta}</td>
                                    <td>{stagiaire.adrSta}</td>
                                    <td>{stagiaire.finSta}</td>
                                    <td>
                                        <button style={{width:'100%', backgroundColor:'white'}} onClick={ () => {
                                        const options = {
                                            title:'Supprimer le stagiaire',
                                            message: 'Voulez-vous vraiment supprimer ce stagiaire?',
                                            buttons:[
                                                {
                                                label: 'Oui',
                                                onClick: () => supSta(stagiaire.idSta)
                                                },
                                                {
                                                label: 'Annuler',
                                                onClick: () => alert('Suppression annulée')
                                                }
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
                                    }>
                                           {<FontAwesomeIcon icon={faTrashAlt} color="black" size="2x"/>}
                                        </button>
                                          
                                    </td>
                                    <td>
                                        <button style={{width:'100%', backgroundColor:'white'}}>
                                          <FontAwesomeIcon icon={faUserEdit} color="black" size="2x" onClick=""/>
                                        </button>
                                    </td>
                                    <td>
                                        <button style={{width:'100%', backgroundColor:'white'}}>
                                          <FontAwesomeIcon icon={faArrowCircleUp} color="black" size="2x" onClick=""/>
                                        </button>
                                    </td>
                              </tr>
                            ))
                        }
                        
                    </table> 
                </div>
                <div id="contenu">
                    <h1 style={{color:'yellow'}}>Liste des maîtres de stage</h1>
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
                           ms &&
                            ms.map((m,index)=>(
                               <tr key={index}>
                                    <td>{m.nomMS}</td>
                                    <td>{m.prenomMS}</td>
                                    <td>{m.telMS}</td>
                                    <td>{m.adrMS}</td>
                                    <td>
                                        <button style={{width:"100%", backgroundColor:'white'}} onClick={ () => {
                                        const options = {
                                            title:'Supprimer le maître de stage',
                                            message: 'Voulez-vous vraiment supprimer ce maître de stage?',
                                            buttons:[
                                                {
                                                label: 'Oui',
                                                onClick: () => supMs(m.codMS)
                                                },
                                                {
                                                label: 'Annuler',
                                                onClick: () => alert('Click No')
                                                }
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
                                    }>
                                         <FontAwesomeIcon icon={faTrashAlt} color="black" size="2x" onClick=""/>
                                        </button>
                                    </td>
                                    <td>
                                        <button style={{width:"100%", backgroundColor:'white'}}>
                                          <FontAwesomeIcon icon={faUserEdit} color="black" size="2x" onClick=""/>
                                        </button>
                                    </td>
                            </tr> 
                            
                            ))
                        }
                        
                   </table>
                   </div>
                   {
                           ms &&
                            ms.map((m,index)=>(   
                        <div>{m.nomMs}</div>
                        ))
                    }
                    <p id="footer"style={{color:'yellow'}}>TOGOCEL LE LEADER</p>
                </div>
            </div>
        
    )
}

export default Admin
