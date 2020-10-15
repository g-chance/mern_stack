import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from '@reach/router'
import DeleteButton from '../components/DeleteButton'

const Main = (props) => {
    
    const [authors, setAuthors] = useState(
        []
    )
    const [loaded, setLoaded] = useState(false)
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
        .then((res) => {
            console.log(res.data.authors)
            setAuthors(
                res.data.authors
            )
            setLoaded(true)
        })
    }, [])

    const updateDom = (id) => {
        setAuthors(
            authors.filter((author, idx) => author._id!=id )
        )
    }

    return (
        <div className='main'>
            <Link to='/authors/new'>Add new author</Link>
            <h3>All Authors:</h3>
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
            {loaded &&
            authors.map((author, idx) => (
                    <tr key={idx}>
                        <td>{author.firstName}</td>
                        <td>{author.lastName}</td>
                        <td>
                            <Link to={`/authors/edit/${author._id}`}>Edit</Link>
                            <DeleteButton id={author._id} onSuccess={() => updateDom(author._id)}></DeleteButton>
                        </td>
                    </tr>
            ))
            }
                </tbody>
            </table>
        </div>
    )
}

export default Main;