import React, { useState } from 'react';

const ToDoList = (props) => {
    
    const [state, setState] = useState(
        {
            'thing': [],
            'task': "",
        }
    )
    
    const onChangeHandler = e => {
        e.preventDefault();
        setState(
            {...state, 'task': e.target.value}
        )
        console.log(state.task)
    }

    const onSubmitHandler = e => {
        console.log(e.target.name)
        e.preventDefault();
        console.log(state)
        setState(
            {...state, 'thing': [...state.thing, {'content': state.task, 'done': false, 'deleted': false}]}
        )
        console.log(state.thing)
    }

    const onClickHandler = (e,i) => {
        // let temp = {...state.thing};
        if(e.target.name != 'delete') {
            let temp = [...state.thing]
            console.log("^^^^^^^^^", temp[i])
            temp[i].done = true
            setState(
                {...state, 'thing': [...temp] }
            )
        }
        if(e.target.name == 'delete') {
            console.log(state.thing.map)
            state.thing.map((val, i) => {
                if(val.done == true) {
                    val.deleted = true
                }
            })
            console.log(state.thing)
            setState(
                {...state}
            )
        }
        // console.log(temp)
        // setState(
        //     {...state, temp}
        // )
        // console.log(state.thing[e.target.id].done)
        // console.log(state.thing[e.target.id])
        // console.log(e.target.id)
        // console.log(state)
    }

    const Help = {
        textDecorationLine: 'line-through',
    }

    return (
        <div>
            <button name='delete' onClick={onClickHandler}>Delete Completed:</button>
            <form action="" name="gagaga" onSubmit={onSubmitHandler}>
                <label htmlFor="">Add a Task:</label>
                <input type="text" name="task" id="" onChange={onChangeHandler}/>
                <input type="submit" value="Add"/>
            </form>
            {state.thing.map((val, i) => (
                !val.deleted ?
                !val.done ?
                <div id={i} key={i} style={{backgroundColor:'green'}}>
                    <input type="checkbox" name="" id={i} onClick={(e) => onClickHandler(e,i)}/>
                    <label htmlFor="">{val.content}</label>
                </div>
                :
                <div id={i} key={i}>
                    <input type="checkbox" name="" id={i}/>
                    <label htmlFor="" style={Help}>{val.content}</label>
                </div>
                : null
            ))}
        </div>
    )
}

export default ToDoList;