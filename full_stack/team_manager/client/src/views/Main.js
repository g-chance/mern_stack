import React, { useState, useEffect } from 'react';
import axios from 'axios'
import DeleteButton from '../components/DeleteButton';
import { Link } from '@reach/router';

const Main = props => {
    
    const [players, setPlayers] = useState(
        []
    )
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        axios.get(`http://localhost:8000/api/users`)
        .then((res) => {
            console.log(res.data)
            setPlayers(res.data)
            setLoaded(true)
        })
        .catch((err) => console.log(err))
    }, [])

    const updateDOM = (id) => {
        setPlayers(
            players.filter((player,i) => player._id != id)
        )
    }

    return (
        <>
            
            <div className='main'>
                <Link to='/players/list'>List </Link>
                <span>|</span>
                <Link to='/players/new'> Add Player</Link>
                { loaded &&
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Position</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                {players.map((player, i) => (
                    <tr key={i}>
                        <td>{player.name}</td>
                        <td>{player.position}</td>
                        <td className='actions'>
                            <DeleteButton id={player._id} onSuccess={() => updateDOM(player._id)}></DeleteButton>
                        </td>
                    </tr>
                ))}
                        </tbody>
                    </table>
                }
            </div>
        </>
    )
}

export default Main;