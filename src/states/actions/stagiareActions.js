import axios from "axios"
import { stagiaire_failure, stagiaire_request, stagiaire_success, stagiaire_created } from "../slices/stagiaireSlice"

export const requestStagiaires = () => {
    
    return async (dispatch, getState) => {
        dispatch(stagiaire_request())
        axios.get('http://localhost:5000/stagiaire')
        .then((response)=>{
            dispatch(stagiaire_success(response.data))
        })
        .catch((err)=> {
            dispatch(stagiaire_failure(err.error))
        })
    }
}

export const createStagiaires = (payload) => {
    return async (dispatch, getState) => {    
        dispatch(stagiaire_request)
        axios.post('http://localhost:5000/Enregistrer', payload)
        .then((response)=>{
            dispatch(stagiaire_created(payload))
        })
        .catch((err)=> {
            dispatch(stagiaire_failure(err.error))
        })
    }
}
