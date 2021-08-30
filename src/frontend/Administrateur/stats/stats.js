import { faCheckSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import { headerAdmine } from '../style'

function stats() {
    return (
        <div style={{width:'100%'}}>
             <nav style={headerAdmine.script}>
                           <ul style={{float:'right', marginRight:'20px', display:'flex', width:'40%', flexDirection:'row', justifyContent:'space-around'}} > 
                                   <li style={{margin:'6px'}}>
                                      <Link to="/login">        
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
             <p>hey</p>
        </div>
    )
}

export default stats
