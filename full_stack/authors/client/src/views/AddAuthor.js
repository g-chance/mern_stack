import React, { useState } from 'react'
import Form from '../components/Form'
import axios from 'axios'
import { navigate, Link } from '@reach/router'

const AddAuthor = (props) => {
    
    const [form, setForm] = useState(
        {}
    )
    
    const [errors, setErrors] = useState(
        {}
    )

    const onSubmitHandler = e => {
        e.preventDefault();
        const {firstName, lastName} = form
        console.log(firstName, lastName)
        axios.post(`http://localhost:8000/api/authors/new`, {
            firstName, 
            lastName
        })
        .then((res) => {
            navigate('/')
            console.log(res)
        })
        .catch((err) => {
            console.log(err.response.data.errors)
            const temp = err.response.data.errors;
            const errDict = {};
            for(let error in temp) {
                errDict[error] = err.response.data.errors[error].message
            }
            setErrors(
                errDict
            )
            console.log(errDict)
        })
    }

    return (
        <div className='addAuthor'>
            <Link to='/'>Home</Link>
            <h3>Add an author:</h3>
            <Form form={form} setForm={setForm} errors={errors} onSubmitHandler={(e) => onSubmitHandler(e)}></Form>
        </div>
    )
}

export default AddAuthor