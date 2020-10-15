import React, { useContext, useEffect } from 'react'
import MyContext from '../context/MyContext'
import Axios from 'axios'

const Pokeinfo = (props) => {
    
    const context = useContext(MyContext)

    // let forms = ""
    useEffect(() => {
        context.state.pokeinfo.species &&
        Axios.get(context.state.pokeinfo.species.url)
        .then((response) => {
            console.log(response.data)
            return Axios.get(response.data.evolution_chain.url)
            .then((response) => {
                console.log(response.data)
                response.data.chain.evolves_to[0] ?
                context.setState(
                    {...context.state, 'forms': response.data.chain.evolves_to[0].species}
                )
                :
                context.setState(
                    {...context.state, 'forms': response.data.chain.species}
                )
                // forms = response.data.chain.evolves_to[0].species.name
                console.log(response.data.chain.evolves_to[0].species)
            })
        })
        .catch((err) => console.log(err))
    }, [context.state.pokeinfo])

    const onClickHandler = (e, url) => {
        e.preventDefault();
        Axios.get(`https://pokeapi.co/api/v2/pokemon/${context.state.forms.name}`)
        .then((response) => {
            console.log(response.data)
            context.setState({...context.state, 'pokeinfo': response.data})
        })
        .catch((err) => console.log(err))
    }

    return (
        <div>
            {context.state.pokeinfo.base_experience &&
            <>
            <h2>{context.state.pokeinfo.name}</h2>
            <img src={context.state.pokeinfo.sprites.front_shiny}></img>
            <p>Base Experience: {context.state.pokeinfo.base_experience}</p>
            {context.state.pokeinfo.forms &&
            <p>Next Form:{" "}
            <a href={context.state.forms.url} onClick={(e) => onClickHandler(e, context.state.forms.url)}>{context.state.forms.name}</a>
            </p>
            }
            </>
            }
        </div>
    )
}

export default Pokeinfo
