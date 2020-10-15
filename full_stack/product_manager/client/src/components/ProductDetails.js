import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { navigate } from '@reach/router'

const ProductDetails = (props) => {
    
    const [deets, setDeets] = useState(
        {}
    )

    const onClickHandler = e => {
        Axios.delete(`http://localhost:8000/api/delete/${props.id}`)
        .then(() => navigate('/'))
        .catch(err => console.log(err))
    }

    useEffect(() => {
        Axios.get(`http://localhost:8000/api/products/${props.id}`)
            .then(res => {
                setDeets(
                    res.data.product
                )
                console.log(res)
            })
            .catch(err => console.log(err))
    }, [props.id])
    
    return (
        <div>
            <p>Title: {deets.title}</p>
            <p>Name: {deets.price}</p>
            <p>Description: {deets.description}</p>
            <button onClick={e => onClickHandler(e)}>Delete</button>
        </div>
    )
}

export default ProductDetails