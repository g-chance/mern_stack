import React, { useState } from 'react'

const Pokemon = (props) => {
    
    const [state, setState] = useState({
        'snackycakes': [],
    })

    const onClickHandler = e => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")
        .then(response => {
            return response.json();
        })
        .then(response => {
            let temp = [...state.snackycakes];
            response.results.map((val, i) => (
                temp = [...temp, val.name]
            ))
            setState(
                {...state, 'snackycakes': [...temp]}
            )
            console.log(response.results.map((val, i) => (
                val.name
            )
            ));
            console.log("GHGHGHGH",state)
        })
        .catch(err=>{
            console.log(err);
        })
    }
    
    return (
        <div>
            <button onClick={onClickHandler}>Fetch Pokemon</button>
            <div>
                {state.snackycakes.map((val, i) => (
                    <p>{val}</p>
                ))}
            </div>
        </div>
    )
}

export default Pokemon
