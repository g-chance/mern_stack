import React, { useState } from 'react'

const HookFormVal = props => {
    
    const [state, setState] = useState({
        'first name': '',
        'last name': '',
        'email': '',
        'password': '',
        'confirm pw': '',
    })

    const onChangeHandler = e => {
        e.preventDefault();
        setState({
            ...state, 
            [e.target.name]: e.target.value,
        })
        console.log(state)
    }

    const onSubmitHandler = e => {
        e.preventDefault();
        console.log(state)
    }

    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                { state['first name'] && state['first name'].length < 3 && <p>This is a message</p>}
                <label>First Name</label>
                <input type='text' name={'first name'} onChange={onChangeHandler}></input>
                { state['last name'] && state['last name'].length < 3 && <p>This is a message</p>}
                <label>Last Name</label>
                <input type='text' name={'last name'} onChange={onChangeHandler}></input>
                { state['email'] && state['email'].length < 3 && <p>This is a message</p>}
                <label>Email</label>
                <input type='text' name={'email'} onChange={onChangeHandler}></input>
                { state['password'] && state['password'].length < 8 && <p>pw must be 8 characters</p>}
                <label>Password</label>
                <input type='password' name={'password'} onChange={onChangeHandler}></input>
                { state['confirm pw'] && state['confirm pw'] != state['password'] && <p>Passwords do not match</p>}
                <label>Confirm Password</label>
                <input type='password' name={'confirm pw'} onChange={onChangeHandler}></input>
                <input type={'submit'}></input>
            </form>
            <p>First Name: {state["first name"]}</p>
            <p>Last Name: {state["last name"]}</p>
            <p>Last Name: {state["email"]}</p>
            <p>Last Name: {state["password"]}</p>
            <p>Last Name: {state["confirm pw"]}</p>
        </div>
    )
}

export default HookFormVal;