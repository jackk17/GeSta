import { faBars, faChalkboardTeacher, faHandMiddleFinger, faHome, faUser, faUserShield } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { header } from './style'
import logo from '../../images/logoTGcell.png'

function Header() {

    const [vue, setVue] = useState(false) 
    const [disnone, setDisnone] = useState('')

    const location = useLocation()

    useEffect(() => {
        console.log(location.pathname)
        if(location.pathname=='/pdf'){
            setDisnone("none")
            console.log('none')
        }
    }, [])

    return (
        <div style={{...header.main, width:vue&&250, display:disnone}}>
             <nav>
                <div id="tete" style={{...header.tete, width:vue&&250}}>
                        <div style={{position:"absolute", display:!vue&&"none"}}>
                            <img src={logo} width={vue&&250}/>
                        </div>
                        <div
                        onClick={
                            (e)=>setVue(!vue)
                        }
                        style={{padding:0 ,position:vue&&'relative', zIndex:3, margin:0}}
                        >
                            <FontAwesomeIcon icon={faBars}  color={vue?"black":"white"} size="2x"/>
                        </div>
                </div>
                <ul id="menu" style={header.menu}>
                    
                    <div style={{display:"flex", flexDirection:"row", border:"thin solid yellow"}}>
                       <div style={{padding:10, width:30}}>
                         <FontAwesomeIcon icon={faHome} color="white" size="2x"/>
                       </div>
                       <div style={{padding:10,display:!vue&&"none" }}>
                            <Link to="/Acceuil">
                                  <span style ={{ fontFamily: "cortana", fontSize:"25px", color: "green"}}>Acceuil</span>  
                            </Link>
                       </div>  
                    </div>
                    <div style={{display:"flex", flexDirection:"row", border:"2px solid yellow"}}>
                        <div style={{padding:10, width:30}}>
                           <FontAwesomeIcon icon={faUser} color="white" size="2x"/>
                        </div>
                        <div style={{padding:10,display:!vue&&"none"}}>
                            <Link to="/Stagiaire">
                               <span style ={{ fontFamily: "cortana", fontSize:"25px", color: "green"}}>Stagiaire</span>
                            </Link> 
                        </div>
                    </div>
                    <div style={{display:"flex", flexDirection:"row", border:"2px solid yellow"}}>
                        <div style={{padding:10, width:30}}>
                          <FontAwesomeIcon icon={faChalkboardTeacher} color="white" size="2x"/>  
                        </div>
                        <div style={{padding:10,display:!vue&&"none"}}>
                            <Link to="/LogMs">
                              <span style ={{ fontFamily: "cortana", fontSize:"25px", color: "green"}}> Maitres de stage</span>
                            </Link>
                        </div>
                    </div>
                    <div style={{display:"flex", flexDirection:"row", border:"thin solid yellow"}}>
                        <div style={{padding:10, width:30}}>
                            <FontAwesomeIcon icon={faUserShield} color="white" size="2x"/>  
                        </div>
                       <div style={{padding:10,display:!vue&&"none"}}>
                            <Link to="/login">
                               <span style ={{ fontFamily: "cortana", fontSize:"25px", color: "green"}}>Administrateur</span>
                            </Link>
                       </div>
                    </div>
                    <div>
                    </div>
               </ul>
            </nav>
        </div>
    )
}

export default Header
