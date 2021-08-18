import { faCheckSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { Link } from 'react-router-dom'
import { headerAdmine } from '../style'

function affecter() {
    return (
        <div>
             <div style={headerAdmine.general}>  
                   <div style={headerAdmine.script}>   
                       
                            <div>
                                <Link to="/enregistrer">                                   
                                        <span style={{fontFamily: "cortana", fontSize:"25px", color: "green"}}> Enregistrer</span>                               
                                    </Link>
                            </div>
                            <div>
                                <Link to="stats">
                                    <span style={{fontFamily: "cortana", fontSize:"25px", color: "green"}}>statistiques</span>
                                </Link>
                            </div>
                            <div>
                                <div>
                                    <FontAwesomeIcon icon={faCheckSquare} color="white" size="2px"/>
                                </div>
                                <div>
                                    <Link to="/section&ms">                                  
                                    <span style={{fontFamily: "cortana", fontSize:"25px", color: "green"}}> Affecter</span>                                       
                                    </Link>
                                </div>
                            </div>
       
                   </div>
            </div>
                        <div className="form-group">
                                <div>
                                  Nom:   
                                </div>
                                 <div>
                                  AGBEGBO
                                </div>
                        </div>
                        <div className="form-group">
                            <div>
                                prénom:
                            </div>
                            <div>
                               ESPOIR
                            </div>
                        </div>
                        <div className="form-group">
                            <div>
                              Téléphone:
                            </div>
                            <div>
                                97874575
                            </div>
                        </div>
                        <div className="form-group">
                            <div>
                                Adresse:
                            </div>
                            <div>
                               ADIDOGOME
                            </div>
                        </div>
                        <div className="form-group">
                            <div>
                                Fin de stage:
                            </div>
                            <div>
                               18/09/2021
                            </div>
                        </div>
                        <div className="form-group">
                            <div>
                                Nombre de renouvellement:
                            </div>
                            <div>
                                2
                            </div>
                        </div>
                        <div className="form-group">
                            <div>
                                Rémunération:
                            </div>
                            <div>
                               35.000
                            </div>
                        </div>
                        <div className="form-group">
                            <div>
                                Nationalité:
                            </div>
                            <div>
                                TOGOLAISE
                            </div>
                        </div>
                        <div className="form-group">
                            <div>
                                Sexe:
                            </div>
                            <div>
                                MASCULIN
                            </div>
                        </div>
                        <div className="form-group">
                            <div>
                                Date de naissance:
                            </div>
                            <div>
                               17/06/01
                            </div>
                        </div>
                        <div>
                            <strong>Liste des maitres de stages</strong> 
                               <select>
                                    <option>Mr akogo</option>
                                    <option>Mr akogo</option>
                                    <option>Mr akogo</option>
                                    <option>Mr akogo</option>
                                </select>
                        </div>
        </div>
        
    )
}

export default affecter
