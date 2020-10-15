import React from 'react'

const Word = (props) => {
    let text = ""
    if(isNaN(props.id)){
        text = `The word is ${props.id}`
    }
    else{
        text = `The number is ${props.id}`
    }
    
    return (
        
        <div>
            {text}
        </div>
    )
}

export default Word
