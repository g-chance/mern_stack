import React, { useState, useEffect } from 'react'
import { Link, navigate } from '@reach/router'
import axios from 'axios'

const AddPlayer = (props) => {
    
    const [formData, setFormData] = useState(
        {}
    )
    const [errState, setErrState] = useState(
        {}
    )
    const [testState, setTestState] = useState(true)


    const nameError = `Name must be at least 3 characters`
    const posError = `Position must be at least 3 characters`

    useEffect(() => {
        setErrState({})
        setTestState(true);
        if(formData.name && formData.name.length >= 3) {
            setTestState(false);
            if(formData.position) {
                setTestState(true)
            }
            if(formData.position && formData.position.length >= 3) {
                setTestState(false)
            }
        }
    }, [formData])

    const onChangeHandler = e => {
        setFormData(
            {...formData, [e.target.name]: e.target.value}
        )
    }

    const onSubmitHandler = e => {
        e.preventDefault();
        const {name, position} = formData;
        axios.post(`http://localhost:8000/api/users/new`, {
            name,
            position,
        })
        .then(res => {
            console.log(res);
            navigate('/players/list');
        })
        .catch(err => {
            const errs = err.response.data.errors
            const errsDict = {}
            for(let key in errs) {
                errsDict[key] = errs[key].message
            }
            setErrState(errsDict)
        });
    }

    return (
        <div className='addPlayer'>
            <Link to='/players/list'>List </Link>
            <span>|</span>
            <Link to='/players/new'> Add Player</Link>
            <form action="" onSubmit={(e) => onSubmitHandler(e)}>
                <h3>Add Player:</h3>
                <label htmlFor="">
                    {errState.name && <p className='error'>{errState.name}</p>}
                    {formData.name && formData.name.length > 0 && formData.name.length <3 && <p className='error'>{nameError}</p>}
                    Name:
                </label>
                <input type="text" name='name' onChange={(e) => onChangeHandler(e)}></input>
                <label htmlFor="">
                    {errState.position && <p className='error'>{errState.position}</p>}
                    {formData.position && formData.position.length > 0 && formData.position.length <3 && <p className='error'>{posError}</p>}
                    Position:
                </label>
                <input type="text" name='position' onChange={(e) => onChangeHandler(e)}/>
                <input className='submit' type="submit" value="Add Player" disabled={testState} style={{backgroundColor: testState && `lightgray`}}/>
            </form>
        </div>
    )
}

export default AddPlayer
