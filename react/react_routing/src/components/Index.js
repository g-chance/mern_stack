import React, { useState, useEffect } from 'react'
import axios from 'axios'
import People from './People'
import Planets from './Planets'
import { Router, Link, navigate } from '@reach/router'

const Index = (props) => {

    const [data, setData] = useState(
        {
            'people': [],
            'planets': [],
            'number': null,
        }
    )
    const [form, setForm] = useState(
        {
            'type': "",
            'number': null,
        }
    )

    const [count, setCount] = useState(1)
    
    useEffect(() => {
        let i = 1;
        // while(i < 10) {
            axios.get(`https://swapi.co/api/people/?page=${count}`)
            .then((response) => {
                // count = response.data.count
                console.log(response.data.results)
                // console.log(response.data)
                let people = [...response.data.results]
                setData(
                    {...data, 'people': [...data.people, ...people]}
                )
                setCount( count + 1 )
                console.log(count)
                console.log(data.people)
            })
            .catch((err) => console.log(err))
            i += 1
        // }
    }, [count])

    const onChangeHandler = e => {
        let temp = {...form, [e.target.name]: e.target.value}
        setForm(temp)
        console.log("count is", count)
        console.log(form)
        console.log(e.target.name)
    }

    const onSubmitHandler = e => {
        e.preventDefault();

        if(form.type == 'people') {
            
            // axios.get("https://swapi.co/api/people")
            // .then((response) => {
            //     console.log(response.data)
            //     let people = [...response.data.results]
            //     setData(
            //         {...data, 'people': [...people], 'number': form.number}
            //     )
            console.log(data.people)
            navigate(`/people/${form.number}`)
            // })
            // .catch((err) => console.log(err))
        }
        else if(form.type == 'planets') {
            axios.get("https://swapi.co/api/planets")
            .then((response) => {
                console.log(response.data)
                let planets = [...response.data.results]
                setData(
                    {...data, 'planets': [...planets]}
                )
            })
            .catch((err) => console.log(err))
            navigate('/planets')
        }
    }

    return (

        <div>
            {/* <p>{JSON.stringify(data)}</p> */}
            <form className="headerform" action="" onSubmit={onSubmitHandler}>
                <label htmlFor="">Search For:</label>
                <select name="type" id="" onChange={onChangeHandler}>
                    <option value="" disabled selected>Please Choose</option>
                    <option value="people">People</option>
                    <option value="planets">Planets</option>
                </select>
                <label htmlFor="">ID:</label>
                <input type="number" name="number" id="" onChange={onChangeHandler}/>
                <input type="submit" value="Search"/>
            </form>
            <Router>
                <People path='/people/:id' people={data.people} number={data.number}></People>
                <Planets path='/planets' planets={data.planets} number={form.number}></Planets>
            </Router>
        </div>
    )
}

export default Index
