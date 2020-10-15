import React, {useState} from 'react'
import {navigate} from '@reach/router';
import axios from 'axios';
const New = (props) => {
    const [formState, setFormState] = useState({
        title:"",
        description:"",
        dueDate:""
    })
    // backend
    const [errorState, setErrorState] = useState([])
    // frontend
    const titleError = "Title must be at least 2 characters"
    const descriptionError = "Description must be at least 2 characters"

    const onSubmitHandler = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/v1/create', formState)
        .then(response => {
            if (response.data.errors) {
                const temp = []
                for(let key in response.data.errors) {
                    temp.push(response.data.errors[key].message)
                }
                setErrorState([...temp])
            } else {
                setFormState({
                    title:"",
                    description:"",
                    dueDate:""
                })
                navigate("/")
            }
        })
        .catch(error => console.log(error))

    }
    const onChangeHandler = (e) => {
        setFormState({
            ...formState,
            [e.target.name]:e.target.value
        })
    }
    return (
        <div>
            <p style={{color:"blue"}}>{ formState.title.length > 0 && formState.title.length < 2 && titleError}</p>
            <p style={{color:"blue"}}>{ formState.description.length > 0 && formState.description.length < 10 && descriptionError}</p>
            {errorState.map((item, index) => (
                <p style={{color:'red'}} key={index}>{item}</p>
            ))}
            <form onSubmit={onSubmitHandler}>
                <p>Title</p>
                <input type="text" name="title" onChange={onChangeHandler} value={formState.title}/>
                <p>Description</p>
                <input type="text" name="description" onChange={onChangeHandler} value={formState.description}/>
                <p>Due Date</p>
                <input type="date" name="dueDate" onChange={onChangeHandler} value={formState.dueDate}/>
                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default New
