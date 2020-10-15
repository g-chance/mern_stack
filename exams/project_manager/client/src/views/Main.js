import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';

const Main = (props) => {

    const [projects, setProjects] = useState(
        []
    )
    const [DOM, setDOM] = useState(true)

    useEffect(() => {
        axios.get(`http://localhost:8000/api/projects`)
        .then(res => {
            console.log(res)
            let test = new Date(res.data.projects[0].dueDate).getTime()
            
            console.log(test)
            console.log(res.data.projects[0].dueDate)
            setProjects(res.data.projects)
        })
        .catch(err => console.log(err))
    }, [DOM])

    const changeStatus = (e, project) => {
        axios.put(`http://localhost:8000/api/projects/edit/${project._id}`, {
            status: e.target.value
        })
        .then(res => {
            console.log(res)
            setDOM(!DOM)
        })
        .catch(err => console.log(err))
    }

    const deleteProject = (e, project) => {
        axios.delete(`http://localhost:8000/api/projects/delete/${project._id}`)
        .then(res => {
            console.log(res)
            setDOM(!DOM)
        })
        .catch(err => console.log(err))
    }

    return (
        <>
            
            <div className='main'>
                <div className='main-1'>
                    <h2 style={{backgroundColor: 'red'}}>Backlog</h2>
                    { projects[0] && projects.map((project, i) => (
                        project.status === 0 &&
                    <div className='project' key={i}>
                        <h4>{project.description}</h4>
                    <p style={{color: new Date(project.dueDate).getTime() < Date.now() && 'red'}}><span>Due:</span> {project.dueDate}</p>
                        <button value='1' onClick={e => changeStatus(e, project)}>Start Project</button>
                    </div>
                    ))}
                </div>
                <div className='main-2'>
                    <h2 style={{backgroundColor: 'yellow'}}>In Progress</h2>
                    { projects[0] && projects.map((project, i) => (
                        project.status === 1 &&
                    <div className='project' key={i}>
                        <h4>{project.description}</h4>
                        <p style={{color: new Date(project.dueDate).getTime() < Date.now() && 'red'}}><span>Due:</span> {project.dueDate}</p>
                        <button value='2' onClick={e => changeStatus(e, project)}>Move to Completed</button>
                    </div>
                    ))}
                </div>
                <div className='main-3'>
                    <h2 style={{backgroundColor: 'green'}}>Completed</h2>
                    { projects[0] && projects.map((project, i) => (
                        project.status === 2 &&
                    <div className='project' key={i}>
                        <h4>{project.description}</h4>
                        <p style={{color: new Date(project.dueDate).getTime() < Date.now() && 'red'}}><span>Due:</span> {project.dueDate}</p>
                        <button onClick={e => deleteProject(e, project)}>Remove Project</button>
                    </div>
                    ))}
                </div>
                <button className='addNew'>
                    <Link to='/projects/new'>Add New Project</Link>
                </button>
            </div>

        </>
    )
}

export default Main
