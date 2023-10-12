import React from 'react'
import NavBar from './NavBar'
import "../../CSS/App.css"
import bg from "../../assets/bg.png"

const MainLanding = () => {
    return (
        <div className="body" style={{ backgroundImage: `url(${bg})`, backgroundRepeat: 'no-repeat', backgroundSize: "cover", opacity: '80%' }}>
            <NavBar />
        </div>
    )
}

export default MainLanding