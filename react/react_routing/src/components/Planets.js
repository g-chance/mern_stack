import React from 'react'

const Planets = (props) => {
    return (
        <div>
            { props.planets[props.number] &&
            <>
                <h1>{props.planets[props.number].name}</h1>
                <ul>
                    <li>Rotation Period: {props.planets[props.number].rotation_period}</li>
                    <li>Gravity: {props.planets[props.number].gravity}</li>
                    <li>Terrain: {props.planets[props.number].terrain}</li>
                </ul>
            </>
            }
        </div>
    )
}

export default Planets
