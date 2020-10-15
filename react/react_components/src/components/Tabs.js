import React, { useState } from 'react'
import StyledBox from './StyledBox'

const Tabs = (props) => {
    
    const [state, setState] = useState(
        {
            'display': props.tabinfo[0].content,
            // 'tab1': 'you have clicked tab 1',
            // 'tab2': 'you have clicked tab 2',
            // 'tab3': 'you have clicked tab 3',
        }
    )
    
    const onClickHandler = e => {
        let temp = e.target.id;
        console.log(e.target.id)
        setState(
            {'display': props.tabinfo[temp].content}
        )
    }


    return (
        <div>
            {props.tabinfo.map((val, i) => (
                <button id={i} key={i} name={val.label} onClick={onClickHandler}>{val.label}</button>
            ))}
            <StyledBox>{state.display}</StyledBox>
        </div>
    )
}

export default Tabs