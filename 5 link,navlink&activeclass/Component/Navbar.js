import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <>
            <nav>
                <div>
                    <h2>logo</h2>
                </div>
                <ul>
                    <li>
                        <NavLink to="/" style={({isActive})=>{
                            return {background:isActive ? "yellow" : "transparent"}
                        }}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" style={({isActive})=>{
                            return {background:isActive ? "blue" : "transparent"}
                        }}>About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/service">Service</NavLink>
                    </li>
                    
                </ul>
            </nav>
        </>
    )
}

export default Navbar
