import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, Router } from '@reach/router'

const PlayerStatus = (props) => {

    const [players, setPlayers] = useState(
        []
    )
    const [loaded, setLoaded] = useState(false)
    const [refresher, setRefresher] = useState(false)

    useEffect(() => {
        axios.get(`http://localhost:8000/api/users`)
        .then((res) => {
            console.log(res.data)
            setPlayers(res.data)
            setLoaded(true)
        })
        .catch((err) => console.log(err))
    }, [refresher])

    const changeStatus = (e,player) => {
        let temp = player.status;
        temp[props.id-1]=e.target.value

        axios.put(`http://localhost:8000/api/users/edit/${player._id}`, {"status": temp})
        .then(res => {
            setRefresher(!refresher)
            console.log(res)
        })
        .catch(err => console.log(err))
    }

    return (
        <div className='playerStatus'>
            <h1>Player Status</h1>
            <div className='links'>
                <Link to='/status/game/1'>Game 1 </Link>
                <span>|</span>
                <Link to='/status/game/2'> Game 2 </Link>
                <span>|</span>
                <Link to='/status/game/3'> Game 3</Link>
            </div>
            
            {loaded &&
            <>
                <table>
                    <thead>
                        <tr>
                            <th>Player Name</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {players.map((player,i) => (
                            
                        <tr key={i}>
                            <td>{player.name}</td>
                            <td>
                                <button value='2' style={{backgroundColor: player.status[props.id-1] === 2 && 'red'}} onClick={e => changeStatus(e, player)}>Playing</button>
                                <button value='1' style={{backgroundColor: player.status[props.id-1] === 1 && 'green'}} onClick={e => changeStatus(e, player)}>Not Playing</button>
                                <button value='0' style={{backgroundColor: player.status[props.id-1] === 0 && 'yellow'}} onClick={e => changeStatus(e, player)}>Undecided</button>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </>
            }
            
        </div>
    )
}

export default PlayerStatus
