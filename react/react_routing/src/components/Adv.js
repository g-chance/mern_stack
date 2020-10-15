import React from 'react'

const Adv = (props) => {



    return (
        <div style={{color: props.color, backgroundColor: props.bgColor}}>
            The Word is {props.word}
        </div>
    )
}

export default Adv
