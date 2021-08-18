import React from 'react'
import { confirmAlert } from 'react-confirm-alert';

function Confirm() {
    const options = {
        title:'Supprimer le stagiaire',
        message: 'Voulez-vous vraiment supprimer ce stagiaire?',
        buttons:[
            {
            label: 'Oui',
            onClick: () => alert('Click Yes')
            },
            {
            label: 'Annuler',
            onClick: () => alert('Click No')
            }
        ],
        childrenElement: () => <div />,
        customUI: ({ onClose }) => <div>Custom UI</div>,
        closeOnEscape: true,
        closeOnClickOutside: true,
        willUnmount: () => {},
        afterClose: () => {},
        onClickOutside: () => {},
        onKeypressEscape: () => {},
        overlayClassName: "overlay-custom-class-name"
    };
        confirmAlert(options);
    return (
        
        <div>
            
        </div>
    )
}

export default Confirm
