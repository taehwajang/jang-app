import React from 'react'
import Logoimg from './Logoimg';
import Login from './Login';
import Event from "./Event"
import '../App.css';
const Header = () => {
    return (
        <div className = "Headerzoon">
            <Login />
            <Event />
        </div>
    )
}

export default Header
