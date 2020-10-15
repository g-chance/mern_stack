import React from 'react'
import axios from 'axios'

const DeleteButton = (props) => {
    
    const {id, onSuccess} = props

    const deleteUser = (e) => {
        if(window.confirm(`Are you sure you want to remove this player?`)){
            axios.delete(`http://localhost:8000/api/users/delete/${id}`)
            .then((res) => {
                console.log(res)
                onSuccess()
            })
            .catch((err) => console.log(err))
        }
    }

    return (
        <button onClick = {(e) => deleteUser(e)}>Delete</button>
    )
}

export default DeleteButton