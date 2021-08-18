import { faCheckSquare, faTrashAlt, faUserEdit } from '@fortawesome/free-solid-svg-icons'
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




function Admin() {
    const [data, setData]=useState([])
    const[ms, setMs]= useState([])
    
    const supSta= async (id)=>{
        await axios.delete(`http://localhost:5000/supSta/${id}`).then((response)=>{
           
        })
        .catch((err)=> console.log(err))
    }
    const fetchData= async ()=>{
        await axios.get('http://localhost:5000/stagiaire').then((response)=>{
            setData(response.data)
        })
        .catch((err)=> console.log(err))
    }
    const fetchMs= async ()=>{
        await axios.get('http://localhost:5000/MS').then((response)=>{
            setMs(response.data)
        })
        .catch((err)=> console.log(err))
    }
    useEffect(() => {
        console.log(ms)
        console.log(data)
    }, [ms, data])

    useEffect(() => {
        fetchData()
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
                            data &&
                            data.map((stagiaire,index)=>(
                                <tr key={index}>
                                    <td>{stagiaire.nomSta}</td>
                                    <td>{stagiaire.prenomSta}</td>
                                    <td>{stagiaire.telSta}</td>
                                    <td>{stagiaire.adrSta}</td>
                                    <td>
                                        <button onClick={ () => {
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
                                           {<FontAwesomeIcon icon={faTrashAlt} color="black" size="2x"/>}
                                        </button>
                                          
                                    </td>
                                    <td>
                                            <FontAwesomeIcon icon={faUserEdit} color="black" size="2x" onClick=""/>
                                    </td>
                              </tr>
                            ))
                        }
                        
                    </table> 
                </div>
                <div id="contenu">
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
                           ms &&
                            ms.map((m,index)=>(
                               <tr key={index}>
                                    <td>{m.nomMS}</td>
                                    <td>{m.prenomMS}</td>
                                    <td>{m.telMS}</td>
                                    <td>{m.adrMS}</td>
                                    <td>
                                        <FontAwesomeIcon icon={faTrashAlt} color="black" size="2x" onClick=""/>
                                    </td>
                                    <td>
                                        <FontAwesomeIcon icon={faUserEdit} color="black" size="2x" onClick=""/>
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
                    <p id="footer">Réalisation des codes HTML/CSS, du tutoriel et du design par ElMoustiko</p>
                </div>
            </div>
        
    )
}

export default Admin
