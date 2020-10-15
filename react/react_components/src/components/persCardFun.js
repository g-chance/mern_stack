import React, { Component } from 'react';

import StyledBox from './StyledBox';

const PersCardFun = props => {
    return (
        
            <StyledBox>
            <h1>{props.lastName} {props.firstName}</h1>
            <p>{props.age}</p>
            <p>{props.hairColor}</p>
            <button>BURTHDOY</button>
            {props.children}
            </StyledBox>
        
    )
}

export default PersCardFun;