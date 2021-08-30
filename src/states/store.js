import  { configureStore } from '@reduxjs/toolkit'
import stagiaireSlice from './slices/stagiaireSlice'
import msSlice from './slices/msSlice'

//L'ensemble des reducers. Un reducer est une fonction qui prend pour parametre l'etat actuel et une action pour retourner l'etat resultant de l'action
//Example: A l'etat actuel nous avons 5 stagiares si on passe ces 5 stagiares avec l'action supprimer a un reducer elle doit retourner 4 stagiares

export default configureStore({
    reducer: {
        //les parts de l'etat:
        stagiaires: stagiaireSlice,
        ms: msSlice,
        /* sections: sectionSlice,
        rapports: rapportSlice,
        provenances: provenanceSlice,
        materiels: materielSlice,
        divisions: divisionSlice,
        directions:directionSlice*/
        
    }
})