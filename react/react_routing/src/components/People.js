import React, { useState, useEffect } from 'react'
import Axios from 'axios'

const People = (props) => {
    
    const [x, setX] = useState(
        {}
    )

    let homeworld;
    useEffect(() => {
        console.log(props.people[props.id].homeworld)
        Axios.get(props.people[props.id].homeworld)
        .then((response) => {
            homeworld = response.data.name
            setX(
                {...x, 'homeworld': homeworld}
            )
            console.log(response.data.name)
        })
        .catch((err) => console.log(err))
    }, [props.id])

    return (
        <div>
            { props.people[props.id] &&
            <>
                <h1>{props.people[props.id].name}</h1>
                <ul>
                    <li>Age: {props.people[props.id].height}</li>
                    <li>Hair Color: {props.people[props.id].hair_color}</li>
                    <li>Eye Color: {props.people[props.id].eye_color}</li>
                    <li>Gender: {props.people[props.id].gender}</li>
                    <li>Homeworld: {x.homeworld}</li>
                </ul>
            </>
            }
        </div>
    )
}

export default People
