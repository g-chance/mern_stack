import React, {useState} from 'react'
import StyledBox from './StyledBox'

const BoxGen2 = (props) => {
    const [state, setState] = useState(
        {
            'boxes': [],
            'color': "",
            'height': "",
        }
    )
    
    const onChangeHandler = e => {
        e.preventDefault()
        setState(
            {...state, [e.target.name]: e.target.value}
        )
    }

    const onSubmitHandler = e => {
        e.preventDefault()
        setState(
            {...state, 'boxes': [...state.boxes,{'color': state.color, 'height': state.height}] }
        )
        e.target.reset()
    }

    return (
        <div>
            <form action="" onSubmit={onSubmitHandler}>
                <label htmlFor="">Color</label>
                <input type="text" name="color" id="" onChange={onChangeHandler}/>
                <label htmlFor="">Height</label>
                <input type="text" name="height" id="" onChange={onChangeHandler}/>
                <input type="submit" value="Add"/>
            </form>
            {state.color}
            {state.height}
            {state.boxes.map((val, i) => (
                <StyledBox key={i} bgColor={val.color} height={val.height}></StyledBox>
            ))}
        </div>
    )
}

export default BoxGen2
