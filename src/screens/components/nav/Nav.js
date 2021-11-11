import React, { useEffect, useState } from 'react'
import './nav.css'

export default function Nav() {

    const [show , handleShow]=useState(false)
    const transitionNavBar = () => {
        if(window.scrollY > 100){
            handleShow(true)
        }else {
            handleShow(false)
        }
    }

    useEffect(()=>  {
        window.addEventListener('scroll',transitionNavBar);
        return () => window.removeEventListener('scroll',transitionNavBar)
    },[])
    return (
        <div className={`nav ${show && "nav_black"}`}>
            <div className="nav_contents">
    <img 
    className="nav_logo"
    src="./netflix-logo-png-2562.png" alt="" 
    
    />

    <img className="nav_avatar"
    src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" 
    alt="" 
    />
    </div>
            </div>
    )
}
