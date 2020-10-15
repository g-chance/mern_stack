import React from 'react'
import axios from 'axios'

const DeleteButton = (props) => {
    
    const deletePerson = e => {
        axios.delete(`http://localhost:8000/api/authors/delete/${props.id}`)
        .then(() => props.onSuccess())
        .catch((err) => console.log(err))
    }
    
    return (
        <button onClick={(e) => deletePerson(e)}>
            Delete
        </button>
    )
}

export default DeleteButton;