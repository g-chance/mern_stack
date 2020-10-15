import React from 'react'
import SearchResults from './SearchResults'
import Pokeinfo from './Pokeinfo'

const Wrapper = (props) => {
    return (
        <div className="wrapper">
            <div className="spacer"></div>
            <div className="main">
                <SearchResults></SearchResults>
                <Pokeinfo></Pokeinfo>
            </div>
        </div>
    )
}

export default Wrapper