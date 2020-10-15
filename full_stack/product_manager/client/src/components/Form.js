import React, { useState } from 'react'
import axios from 'axios'

const Form = (props) => {
    
    const [state, setState] = useState(
        {}
    )

    const [errors, setErrors] = useState(
        []
    )
    
    const onChangeHandler = e => {
        setState(
            {...state, [e.target.name]: e.target.value}
        )
    }

    const onSubmitHandler = e => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/products/new', {
            title:state.title,
            price:state.price,
            description:state.description,
        })
        .then((res) => {
            let temp = []
            console.log(res)
            for(let error in res.data['errors']) {
                temp.push(res.data.errors[error].message)
                console.log(error)
                console.log(res.data.errors[error].message)
            }
            setErrors(
                temp
            )
            // console.log("success", res)
            // console.log(temp)
        })
        .catch(err => console.log("error", err))
    }

    return (
        <div>
            <form action="" onSubmit={e => onSubmitHandler(e)}>
                {errors[0] && 
                errors.map((error, i) => (
                    <p key={i}>{error}</p>
                ))
                }
                <label htmlFor="">Title</label>
                <input type="text" name="title" onChange={e => onChangeHandler(e)}/>
                <label htmlFor="">Price</label>
                <input type="text" name="price" onChange={e => onChangeHandler(e)}/>
                <label htmlFor="">Description</label>
                <input type="text" name="description" onChange={e => onChangeHandler(e)}/>
                <input type="submit"/>
            </form>
            {state.description}
        </div>
    )
}

export default Form