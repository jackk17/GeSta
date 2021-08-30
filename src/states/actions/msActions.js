import axios from "axios"
import { ms_failure, ms_request, ms_success, ms_created } from "../slices/msSlice"

export const requestMs = () => {
    
    return async (dispatch, getState) => {
        dispatch(ms_request())
        axios.get('http://localhost:5000/MS')
        .then((response)=>{
            dispatch(ms_success(response.data))
        })
        .catch((err)=> {
            dispatch(ms_failure(err.error))
        })
    }
}

export const createMs = (payload) => {
    return async (dispatch, getState) => {    
        dispatch(ms_request)
        axios.post('http://localhost:5000/MS', payload)
        .then((response)=>{
            dispatch(ms_created(payload))
        })
        .catch((err)=> {
            dispatch(ms_failure(err.error))
        })
    }
}
