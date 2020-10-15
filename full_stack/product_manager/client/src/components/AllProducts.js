import React, { useState } from 'react'
import { Link, navigate } from '@reach/router'
import Axios from 'axios'

const AllUsers = (props) => {
    
    const onClickHandler = (e, product) => {
        navigate(`/product/${product._id}`)
    }
    
    const onEditHandler = (e, product) => {
        navigate(`/edit/${product._id}`)
    }

    const onDeleteHandler = (e, product) => {
        Axios.delete(`http://localhost:8000/api/delete/${product._id}`)
        .then(res => {
            console.log(res)
            props.setProducts(
                props.products.filter((x) => 
                    x._id != product._id
                )
            )
        })
            
        .catch(err => console.log(err))
    }

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
            {props.products &&
                props.products.map((product, index) => (
                    <tr key={index}>
                        <td>{product.title}</td>
                        <td>{product.price}</td>
                        <td>{product.description}</td>
                        <td>
                            <button onClick = {e => onClickHandler(e, product)}>Info</button>
                        </td>
                        <td>
                            <button onClick = {e => onEditHandler(e, product)}>Edit</button>
                        </td>
                        <td>
                            <button onClick = {e => onDeleteHandler(e, product)}>Delete</button>
                        </td>
                    </tr>
                ))
                
            }
                </tbody>
            </table>
        </div>
    )
}

export default AllUsers