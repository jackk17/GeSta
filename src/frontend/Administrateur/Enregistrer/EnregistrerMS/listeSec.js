import React from 'react'

function listeSec({code}, {lib}) {

    return (
        <div>
           <select>
               <option value={lib}>
                  {code}
               </option>
           </select>
        </div>
    )
}

export default listeSec
