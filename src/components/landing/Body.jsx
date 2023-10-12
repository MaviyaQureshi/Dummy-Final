import React from 'react'
import { Link } from 'react-router-dom'

const Body = () => {
    return (
        <>

            <div className='typewriter'>
                <span id="typewriter-text" style={{
                    fontWeight: '700',
                    fontSize: '72px',
                    fontFamily: 'Arial',
                    color: 'white',
                    position: 'relative',
                    left: '440px',
                    top: '180px'
                }}>Welcome to AgiChat</span>
                <div style={{
                    width: '550px',
                    fontWeight: '700',
                    fontFamily: 'Arial',
                    fontSize: '22px',
                    position: 'relative',
                    left: '510px',
                    top: '220px',
                }}>Your go-to online resource for all things agriculture</div>
            </div>
            <Link to='/username'>
                <button className='start' style={{
                    width: '215px',
                    height: '40px',
                    fontWeight: '700',
                    fontFamily: 'Arial',
                    fontSize: '17px',
                    backgroundColor: 'black',
                    color: 'white',
                    borderRadius: '10px',
                    position: 'relative',
                    left: '670px',
                    top: '250px',
                    border: 'none',
                    opacity: '100%'
                }}>Get Started </button>
            </Link>
        </>
    )
}

export default Body