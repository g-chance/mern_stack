import React, { useState } from 'react'
import axios from 'axios'

const PokemonAxios = props => {
    
    const [state, setState] = useState(
        {
            'pokemon': [],
        }
    )

    const onClickHandler = e => {
        let temp = [...state.pokemon]
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807&offset=0')
            .then(response => {    
                console.log(response.data.results)
                response.data.results.map((val, i) => {
                    temp = [...temp, val.name]
                })
                console.log(temp)
                setState(
                    {...state, 'pokemon': temp}
                )
            })
    }
    
    return (
        <div>
            <button onClick={onClickHandler}>Pokemon Axios</button>
            <p>{state.pokemon.map((val, i) => (
                val
            ))}
            </p>
        </div>
    )
}

export default PokemonAxios