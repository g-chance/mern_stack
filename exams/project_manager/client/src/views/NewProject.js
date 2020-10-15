import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { navigate, Link } from '@reach/router'

const NewProject = (props) => {

    const [form, setForm] = useState(
        {}
    )
    const [errState, setErrState] = useState(
        {}
    )
    const [disabled, setDisabled] = useState(true)

    const descErr = 'Project must be at least 3 characters'

    useEffect(() => {
        setDisabled(true)
        if(form.description && form.description.length > 2) {
            if(form.dueDate) {
                setDisabled(false)
            }
        }
    }, [form])

    const onChangeHandler = e => {
        setForm(
            {...form, [e.target.name]: e.target.value}
        )
    }

    const onSubmitHandler = e => {
        e.preventDefault();
        console.log(form)
        const {description,dueDate} = form
        axios.post(`http://localhost:8000/api/projects/new`, {
            description,
            dueDate
        })
        .then(res => {
            console.log(res)
            navigate('/')
        })
        .catch(err => {
            const errors = err.response.data.errors
            const errsDict = {}
            for(let key in errors) {
                errsDict[key] = errors[key].message
            }
            setErrState(
                errsDict
            )
        })
    }

    return (
        <div className='newProject'>
            <Link to='/'>Home</Link>
            <form action="" onSubmit={e => onSubmitHandler(e)}>
                {errState.description && <p style={{color: 'red'}}>{errState.description}</p>}
                {form.description && form.description.length > 0 && form.description.length < 3 && <p style={{color: 'red'}}>{descErr}</p>}
                <p htmlFor="">Project</p>
                <input type="text" name='description' onChange={e => onChangeHandler(e)}/>
                {errState.dueDate && <p style={{color: 'red'}}>{errState.dueDate}</p>}
                <p htmlFor="">Due Date</p>
                <input type="date" name='dueDate' onChange={e => onChangeHandler(e)}/>
                <input className='submit' type="submit" value="Plan Project" disabled={disabled} style={{backgroundColor:disabled && 'gray'}}/>
            </form>
        </div>
    )
}

export default NewProject
