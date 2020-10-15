import React, { useState, useEffect } from 'react'
import Form from '../components/Form'
import axios from 'axios'
import { navigate, Link } from '@reach/router'
import DeleteButton from '../components/DeleteButton'

const EditAuthor = (props) => {

    const [form, setForm] = useState(
        {}
    )

    const [errors, setErrors] = useState(
        {}
    )

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${props.id}`)
        .then((res) => {
            console.log(res.data.author)
            setForm(
                res.data.author
            )
        })
        .catch((err) => {
            console.log(err)
            setForm(false)
        })
    }, [])

    const onSubmitHandler = e => {
        e.preventDefault();
        const {firstName, lastName} = form
        console.log(firstName, lastName)
        axios.put(`http://localhost:8000/api/authors/edit/${props.id}`, {
            firstName,
            lastName
        })
        .then((res) => {
            console.log(res)
            navigate(`/`)
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

    const redirect = e => {
        navigate('/')
    }

    return (
        <div className='editAuthor'>
            <Link to='/'>Home</Link>
            {form ?
            <>
                <h3>Edit author:</h3>
                <Form form={form} setForm={setForm} errors={errors} onSubmitHandler={(e) => onSubmitHandler(e)}></Form>
                <DeleteButton id={props.id} onSuccess={(e) => redirect(e)}></DeleteButton>
            
            </>
            :
            <>
                <p>Whoops, looks like this author doesn't exist. Would you like to create one?</p>
                <Link to='/authors/new'>Add new author</Link>
            </>
            }
        </div>
    )
}

export default EditAuthor;