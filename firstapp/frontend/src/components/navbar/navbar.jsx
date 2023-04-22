import React from 'react'
import "./navbar.css"
import { Link } from "react-router-dom";
export default function NavBar() {
    return (
        <div className = "topNav">
            <div className = "topLeft"> 
                <ul className = "topNavList">
                    <li className='navListItem'>
                        <Link className='link' to={'/'}>[Home]</Link>
                    </li>
                    <li className='navListItem'>
                        <Link className='link' to={'/about'}>[About]</Link>
                    </li>
                    <li className='navListItem'>
                        <Link className='link' to={'/contact'}>[Contact]</Link>
                    </li>
                    <li className='navListItem'>
                        <Link className='link' to={'/write'}>[Write]</Link>
                    </li>
                </ul>
            </div>
            <div className = "topCenter"> </div>
            <div className = "topRight"> 
                <Link className='link' to={'/settings'}>
                    <img className='topPfpImg' src='/images/default_pfp.png' alt ='/images/icons/default_pfp.png' />
                </Link>
                <ul className = "topLoginList">
                    <li className='navListItem2'>
                        <Link className='link' to={'/login'}>[Login]</Link>
                    </li>
                    <li className='navListItem2'>
                        [Logout]
                    </li>
                    <li className='navListItem2'>
                        <Link className='link' to={'/createAccount'}>[Create Account]</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}