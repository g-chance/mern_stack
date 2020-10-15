import React, { useState } from 'react';
import MyContext from '../context/MyContext'

const Wrapper = props => {
    
    const [state, setState] = useState(
        {
            'name': '',
        }
    )
    
    return (
        <div className="wrapper">
            <MyContext.Provider value={{state, setState}}>
            {props.children}
            </MyContext.Provider>
        </div>
    )
}

export default Wrapper;