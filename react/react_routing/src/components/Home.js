import React from 'react'
import { Link } from '@reach/router'

const Home = (props) => {
    return (
        <div>
            <h1>Home</h1>
            {props.childen}
        </div>
    )
}

export default Home
