import React, { useContext } from 'react'
import MyContext from '../context/MyContext'

const Form = props => {
    const context = useContext(MyContext)

    const onChangeHandler = e => {
        context.setState(
            {...context.state, 'name': e.target.value}
        )
        console.log(context.state.name)
    }

    const onSubmitHandler = e => {
        e.preventDefault();
        context.setState(
            {...context.state, 'name': e.target.name.value}
        )
        e.target.reset()
    }

    return (
        <form action="" className="form" onSubmit={onSubmitHandler}>
            <label htmlFor="">Change your name</label>
            <input type="text" name="name" />
            <input className="submit" type="submit" value="Change"/>
        </form>
    )
}

export default Form