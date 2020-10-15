import React, { useContext } from 'react'
import MyContext from '../context/MyContext'
import { Link } from '@reach/router'
import Axios from 'axios'

const SearchResults = (props) => {

    const context = useContext(MyContext)

    const onClickHandler = (e, url) => {
        e.preventDefault();
        Axios.get(url)
        .then((response) => {
            console.log(response.data)
            context.setState({...context.state, 'pokeinfo': response.data})
        })
        .catch((err) => console.log(err))
    }

    return (
        <div className="main-1">
            {context.state.pokemon.length > 0 && 
            
            <h1>Search Results:</h1>}
            {
            context.state.pokemon.map((val, i) => (
            <div key={i}>
                <a href={val.url} onClick={(e) => onClickHandler(e, val.url)}>{val.name}</a>
            </div>
            ))}
        </div>
    )
}

export default SearchResults
