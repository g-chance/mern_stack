import React, { useState, useContext } from 'react';
import Wrapper from './Wrapper'
import MyContext from '../context/MyContext';

const NavBar = props => {

    const context = useContext(MyContext)

    return (
        <div className="navbar">
            <div>Hi! {context.state.name}</div>
        </div>
    )
}

export default NavBar;