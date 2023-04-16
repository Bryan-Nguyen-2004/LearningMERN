import React from 'react'
import "./navbar.css"

export default function NavBar() {
    return (
        <div className = "topNav">
            <div className = "topLeft"> 
                <ul className = "topNavList">
                    <li className='navListItem'>
                        Home
                    </li>
                    <li className='navListItem'>
                        About
                    </li>
                    <li className='navListItem'>
                        Contact
                    </li>
                    <li className='navListItem'>
                        Write
                    </li>
                </ul>
            </div>
            <div className = "topCenter"> </div>
            <div className = "topRight"> 
                <img className='topPfpImg' src='/images/default_pfp.png' alt ='/images/icons/default_pfp.png' />
                <ul className = "topLoginList">
                    <li className='navListItem'>
                        Login
                    </li>
                    <li className='navListItem'>
                        Logout
                    </li>
                    <li className='navListItem'>
                        Create Account
                    </li>
                </ul>
            </div>
        </div>
    )
}