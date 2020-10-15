import React, { useContext } from 'react'
import MyContext from '../context/MyContext'
import axios from 'axios'

const NavBar = (props) => {

    const context = useContext(MyContext)

    const onChangeHandler = e => {
        let temp = {...context.state, 'text': e.target.value}
        context.setState(
            {...context.state = temp}
        )
    }

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=964&offset=0`)
        .then((response) => {
            const input = response.data.results.filter((input) => {
                return input.name.includes(context.state.text)
            })
            let temp = {...context.state, 'pokemon': input}
            context.setState(
                {...context.state = temp}
            )
            console.log(input)
        })
        .catch((err) => console.log(err))
    }

    return (
        <nav>
            <div className="nav-wrapper">
                <div>{context.state.text}</div>
                <div className="nav-wrapper-2">Div</div>
                <form className="nav-wrapper-3" onSubmit={(e) => onSubmitHandler(e)}>
                    <label htmlFor="">Search</label>
                    <input type="text" name="" id="" onChange={(e) => onChangeHandler(e)}/>
                    <input type="submit" value="Go"/>
                </form>
            </div>
        </nav>
    )
}

export default NavBar