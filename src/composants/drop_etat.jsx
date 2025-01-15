import React from 'react'
import "./style.css"


function Etat({onchange,Name,Id,Options }) {
  
    return (
        <select className="input" name={Name} id={Id} onChange={onchange}>
            {
                Options.map((val, key) => {
                    return (
                        <option key={key} value={val.abbreviation}>{val.name }</option>
                        )
                })
            }
        </select>

        )

}

export default Etat
