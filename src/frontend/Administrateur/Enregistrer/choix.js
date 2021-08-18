import React from 'react'
import { Link } from 'react-router-dom'

function choix() {
    return (
        <div>
            <nav>
                <strong>Qui voulez enregistrer?</strong>
                <div>
                    <Link to="/EnregistrerMS">
                        <button>
                            Maître de stage
                        </button>
                    </Link>
                    <Link to="/EnregistrerSta">
                        <button>
                            Stagiaire
                        </button>
                    </Link>
                </div>
            </nav>
        </div>
    )
}

export default choix
