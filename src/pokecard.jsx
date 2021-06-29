import React from "react"
import './pokecard.css'

const Pokecard = ({id,name,type,base_experience}) => (
    <div className="pokecard">
        <h2 className="name">{name}</h2>
        <img className="img" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt="" />
        <p>Type: {type}</p>
        <p>EXP: {base_experience}</p>
    </div>
)

export default Pokecard