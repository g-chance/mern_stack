import React from 'react'
import {Link} from '@reach/router';
const Header = (props) => {
    return (
        <div>
            <h1>Hello Everybody!</h1>
            <Link style={{margin:'5px'}} to="/">Home</Link>
            <Link style={{margin:'5px'}} to="/new">New</Link>
            <Link style={{margin:'5px'}} to="/dashboard">Dashboard</Link>
        </div>
    )
}

export default Header