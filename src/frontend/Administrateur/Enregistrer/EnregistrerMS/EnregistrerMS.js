import { faCheckSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import React, {useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
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
    const soumettre = async (e)=>{
        e.preventDefault()
        await axios.post('http://localhost:5000/MS', {
            codeMS:codeMS,
            nom: nom,
            prenom: prenom,
            tel: tel,
            adr: adr,
            fonction: fonction,
            code: code,
        }).then((response)=>{
            console.log(response)
        }).catch((error)=>{
            console.log(error)
        });
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
                            </div> 
                       </div>
                        <button onClick={soumettre}>Soumettre</button>
                    </form>
                </div>
              

        </div>
    )
}

export default EnregistrerMS
