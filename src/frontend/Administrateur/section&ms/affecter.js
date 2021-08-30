import { faCheckSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { headerAdmine } from '../style'
import { requestStagiaires } from '../../../states/actions/stagiareActions'
import { requestMs } from '../../../states/actions/msActions'
import { forme } from '../login/style'
import { affecter } from './style'

function Affecter() {
     const dispatch = useDispatch()
    const stagiairesState = useSelector(state => state.stagiaires)
    const {loading, stagiaires, error} = stagiairesState
    const [data, setData]=useState([])
    const [sec, setSec]=useState([])
   // const {loading, ms, error} = msState
   const fecthSec= async ()=>{
    await axios.get(`http://localhost:5000/section`).then((response)=>{
        setSec(response.data)
    })
    .catch((err)=> console.log(err))
}

    const fetchData= async (id)=>{
        await axios.get(`http://localhost:5000/msSec/${id}`).then((response)=>{
            setData(response.data)
        })
        .catch((err)=> console.log(err))
    }
    useEffect(() => {
        dispatch(requestStagiaires())
        fecthSec()
        fetchData()
     }, [dispatch])

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
           <div style={affecter.body}>
               <form style={affecter.box}>
                   
                    <select onChange={(e) => {
                      fetchData(e.target.value)
                      console.log(new Date())
                    }} style={affecter.input} >
                                           {
                                                    sec?
                                                    sec.map((s)=>(
                                                      <option value={s.codSec} key={s.codSec}>
                                                           {s.libSec}
                                                      </option>
                                                    )):
                                                    undefined
                                            }
                    </select>

                  <select style={affecter.input} >
                  {
                                                    stagiaires?
                                                    stagiaires.map((u)=>(
                                                      <option value={u.idSta} key={u.idSta}>
                                                           {u.nomSta}
                                                      </option>
                                                    )):
                                                    undefined
                                            }
                  </select>
                  <select style={affecter.input} onChange=''>
                                           {
                                                    data?
                                                    data.map((user)=>(
                                                      <option value={user.codeMS} key={user.codeMS}>
                                                           {user.nomMS}
                                                      </option>
                                                    )):
                                                    undefined
                                            }
                    </select>
                    <button>valider</button>
               </form>
           </div>
        </div>
        
    )
}

export default Affecter
