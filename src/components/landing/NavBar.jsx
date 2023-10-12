import React from 'react'
import "../../CSS/NavBar.css"
import Body from './Body'

const Navbar = () => {
    return (
        <>
            <div className='navbar'>
                Logo
                <div>
                    <button className='buttons'>Practices</button>
                    <button className='buttons'>Library</button>
                    <button className='buttons'>Dashboard</button>
                    <button className='buttons'>Login</button>
                </div>
            </div>
            <Body />
        </>
    )
}

export default Navbar