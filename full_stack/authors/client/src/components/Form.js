import React from 'react'

const Form = (props) => {
    
    const onChangeHandler = e => {
        props.setForm(
            {...props.form, [e.target.name]: e.target.value}
        )
    }

    return (
        <div>
            <form action="" onSubmit={props.onSubmitHandler}>
                {props.errors['firstName'] && <p>{props.errors['firstName']}</p>}
                <label htmlFor="">First Name</label>
                <input type="text" name="firstName" value={props.form.firstName || ''} onChange={(e) => onChangeHandler(e)}/>
                {props.errors['lastName'] && <p>{props.errors['lastName']}</p>}
                <label htmlFor="">Last Name</label>
                <input type="text" name="lastName" value={props.form.lastName || ''} onChange={(e) => onChangeHandler(e)}/>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    )
}

export default Form