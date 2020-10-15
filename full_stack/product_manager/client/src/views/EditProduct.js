import React, { useState, useEffect } from 'react'
import Axios from 'axios'

const EditProduct = (props) => {

    const [deets, setDeets] = useState(
        {}
    )
    const [form, setForm] = useState(
        {}
    )
    
    useEffect(() => {
        Axios.get(`http://localhost:8000/api/products/${props.id}`)
            .then(res => {
                setDeets(
                    res.data.product
                )
            })
            .catch(err => console.log(err))
    }, [props.id])

    const onChangeHandler = e => {
        setDeets(
            {...deets, [e.target.name]: e.target.value}
        )
    }

    const onSubmitHandler = (e, id) => {
        e.preventDefault()
        console.log(deets)
        Axios.put(`http://localhost:8000/api/edit/${id}`, {
            description: deets.description,
            price: deets.price,
        })
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }
    
    return (
        <div>
            <form action="" onSubmit={e => onSubmitHandler(e, deets._id)}>
                {/* {errors[0] && 
                errors.map((error, i) => (
                    <p key={i}>{error}</p>
                ))
                } */}
                <label htmlFor="">Title</label>
                <input type="text" name="title" value={deets.title || ``} onChange={e => onChangeHandler(e)}/>
                <label htmlFor="">Price</label>
                <input type="text" name="price" value={deets.price || ``} onChange={e => onChangeHandler(e)}/>
                <label htmlFor="">Description</label>
                <input type="text" name="description" value={deets.description || ``} onChange={e => onChangeHandler(e)}/>
                <input type="submit"/>
            </form>
            {deets.description}
        </div>
    )
}

export default EditProduct