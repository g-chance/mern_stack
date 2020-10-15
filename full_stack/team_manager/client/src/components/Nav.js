import React from 'react'
import { Link } from '@reach/router'

const Nav = (props) => {
    return (
        <>
            <nav>
                <div className='wrapper'>
                    <div className='nav1'>
                        <Link to='/players/list'>Manager Players</Link>
                        <span>|</span>
                        <Link to='/status/game/1'>Manager Player Status</Link>
                    </div>
                </div>
            </nav>
            <div className='spacer'></div>
        </>
    )
}

export default Nav
