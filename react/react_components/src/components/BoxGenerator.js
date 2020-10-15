import React, { useState } from 'react'
import StyledBox from './StyledBox'

const BoxGenerator = (props) => {

    const [state, setState] = useState(
        []
    )
    const [formState, setFormState] = useState({
        color:""
    })

    const onChangeHandler = e => {
        setFormState({
            color:e.target.value
        })
    }
    const onSubmitHandler = e => {
        e.preventDefault();
        setState([...state,formState])
       
    }
    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <label htmlFor="">Color</label>
                <input type="text" name="color" onChange={onChangeHandler}/>
                <input type="submit" value="Submit"/>
            </form>
            {state.map((val,i) => (
                <StyledBox key={i} bgColor={val.color} />
            ))}
        </div>
    )
}

export default BoxGenerator;