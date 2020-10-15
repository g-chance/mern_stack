import React, { useState, useEffect } from 'react'
import axios from 'axios';

const Dashboard = (props) => {
    const [state, setState] = useState([])
    const [refresher, setRefresher] = useState(false)
    useEffect(() => {
        axios.get('http://localhost:8000/api/v1/readAll')
            .then(response => setState(response.data))
            .catch(error => console.log(error))
    }, [refresher])

    const moveToColumn = (item, column) => {
        if (column === 3) {
            axios.delete(`http://localhost:8000/api/v1/deleteOne/${item._id}`)
                .then(response => setRefresher(!refresher))
                .catch(error => console.log(error))
        } else {
            item.status = column
            axios.put(`http://localhost:8000/api/v1/updateOne/${item._id}`,item)
                .then(response => setRefresher(!refresher))
                .catch(error => console.log(error))
        }

    }
    return (
        <div className="parent">
            <div className="backlog">
                <h1>Backlog</h1>
                {state.map((item, index) => (
                    item.status === 0 ?
                        <div key={index}>
                            <p>{item.title}</p>
                            <p style={{color:new Date(item.dueDate).getTime() - new Date().getTime() < 0 ? 'red':'black'}}>{item.dueDate.substring(0,10)}</p>
                            <button onClick={(e) => moveToColumn(item, 1)}>Move To TODO</button>
                            <button onClick={(e) => moveToColumn(item, 2)}>Move To DONE</button>
                        </div>
                        : null
                ))}
            </div>
            <div className="TODO">
                <h1>TODO</h1>
                {state.map((item, index) => (
                    item.status === 1 ?
                        <div key={index}>
                            <p>{item.title}</p>
                            <p style={{color:new Date(item.dueDate).getTime() - new Date().getTime() < 0 ? 'red':'black'}}>{item.dueDate.substring(0,10)}</p>
                            <button onClick={(e) => moveToColumn(item, 0)}>Move To Backlog</button>
                            <button onClick={(e) => moveToColumn(item, 2)}>Move To DONE</button>
                        </div>
                        : null
                ))}
            </div>
            <div className="DONE">
                <h1>DONE</h1>
                {state.map((item, index) => (
                    item.status === 2 ?
                        <div key={index}>
                            <p>{item.title}</p>
                            <p style={{color:new Date(item.dueDate).getTime() - new Date().getTime() < 0 ? 'red':'black'}}>{item.dueDate.substring(0,10)}</p>
                            <button onClick={(e) => moveToColumn(item, 0)}>Move To Backlog</button>
                            <button onClick={(e) => moveToColumn(item, 1)}>Move To TODO</button>
                            <button onClick={(e) => moveToColumn(item, 3)}>Delete</button>
                </div>
                        : null
                ))}
            </div>

        </div>
    )
}

export default Dashboard
