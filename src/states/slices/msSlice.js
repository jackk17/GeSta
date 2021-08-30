import { createSlice } from '@reduxjs/toolkit'

const msSlice = createSlice({
    //nom du slice(slice=une partie de l'etat)
    name: 'maître de stage',
    //valeurs initiales 
    initialState:{
        ms: [], 
        loadings: false, //Ceci peut controler quand afficher un gif de loading si la requete charge
        err: null,//Ceci contient les messages d'erreur}
    },
    reducers:{
        
        ms_request: (state, action) => {{
            return {
                ...state,
                loadings: true,
                err: null
            }
               
        }},
        
        ms_success: (state, action) => {
            return {
                ...state,
                ms: [...action.payload]
            }
        },

        ms_created: (state, action) => {
            return {
                ...state,
                ms: [...state.ms, action.payload]
            }
        },
       
       ms_failure:(state, action)=>{

            return{
                ...state,
                loadings:false,
                err: action.payload
            }
        }          
    }
})

export const {ms_request, ms_created, ms_failure, ms_success } = msSlice.actions

export default msSlice.reducer