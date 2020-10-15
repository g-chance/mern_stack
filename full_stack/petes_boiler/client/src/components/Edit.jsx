import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';

const Edit = (props) => {
    const [formState, setFormState] = useState({
        title: "",
        description: "",
        url: "",
        reviews: []
    })
    useEffect(() => {
        axios.get(`http://localhost:8000/api/v1/readOne/${props.id}`)
            .then(response => {
                setFormState({ ...response.data })
            })
            .catch(error => console.log(error))
    }, [])

    const [errorState, setErrorState] = useState({
        title: "",
        description: ""
    })

    const onChangeHandler = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/v1/updateOne/${formState._id}`, formState)
            .then(response => {
                console.log(response)
                if (response.data.errors) {
                    
                    setErrorState({
                        title: response.data.errors.title ? response.data.errors.title.message : "",
                        description: response.data.errors.description ? response.data.errors.description.message : ""
                    })
                } else {
                    console.log("success")
                    navigate("/")
                }
            })
            .catch(error => console.log(error))
    }
    return (
        <div>
            <p>{errorState.title}</p>
            <p>{errorState.description}</p>
            <form onSubmit={onSubmitHandler}>
                <p>Title</p>
                <input type="text" name="title" onChange={onChangeHandler} value={formState.title}/>
                <p>Description</p>
                <input type="text" name="description" onChange={onChangeHandler} value={formState.description}/>
                <p>URL</p>
                <input type="text" name="url" onChange={onChangeHandler} value={formState.url}/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Edit
