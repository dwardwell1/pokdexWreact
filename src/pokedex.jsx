import React from "react"
import './pokedex.css'
import Pokecard from "./pokecard"
import pokemon from "./pokemon"
const Pokedex = ({props}) => {
    return (
        <div className="Pokedex">
            
           
            {props.map((i) => (
                <Pokecard id={i.id} name={i.name} type={i.type} 
                base_experience={i.base_experience} />
            )

            )}

            
           
        </div>
    )
}

export default Pokedex