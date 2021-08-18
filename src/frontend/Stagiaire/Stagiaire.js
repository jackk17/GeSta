import { faColumns } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { form } from './style'

function Stagiaire() {
    return (
        <div>
            <div id="conteneur">    
                <header style={form.header}>
                   <h1 id="header"><a title="Colored Design - Accueil"><span>STAGIAIRE</span></a></h1>
                </header> 
                <footer>
                <p id="footer">Réalisation des codes HTML/CSS, du tutoriel et du design par ElMoustiko</p>
                </footer>
            </div>
        </div>
    )
}

export default Stagiaire
