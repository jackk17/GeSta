import { createSlice } from '@reduxjs/toolkit'

const stagiaireSlice = createSlice({
    //nom du slice(slice=une partie de l'etat)
    name: 'stagiaires',
    //valeurs initiales 
    initialState:{
        stagiaires: [], //Initialement c'est une liste vide avant qu'on ne la remplisse avec les donnees de la base
        loading: false, //Ceci peut controler quand afficher un gif de loading si la requete charge
        error: null,//Ceci contient les messages d'erreur}
    },
    //Maintenant les reducers
    reducers:{
        //Pendant la requete html
        //la fonction prend l'etat actuel: state et l'action: action
        stagiaire_request: (state, action) => {{
            //etourne l'etat suivant
            return {
                ...state,
                loading: true,
                error: null
            }
               
        }},
        
        stagiaire_success: (state, action) => {
            return {
                ...state,
                stagiaires: [...action.payload]
            }
        },

        stagiare_created: (state, action) => {
            return {
                ...state,
                stagiaires: [...state.stagiaires, action.payload]
            }
        },
       
        stagiaire_failure:(state, action)=>{

            return{
                ...state,
                loading:false,
                error: action.payload
            }
        }          
    }
})

export const {stagiaire_request, stagiaire_created, stagiaire_failure, stagiaire_success } = stagiaireSlice.actions

export default stagiaireSlice.reducer