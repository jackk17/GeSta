import { faCheckSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import { headerAdmine } from '../style'

function stats() {
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
           
             <p>hey</p>
        </div>
    )
}

export default stats
