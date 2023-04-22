import React from 'react'
import "./header.css"

export default function Header() {
    return (
        <div className = "header">
            <div className = "headerTitles"> 
                <span className='headerTitle1'> *RECORDS* </span>
                <img className='headerImg' src = "/images/background.jpeg" alt="header" />
            </div>
        </div>
    )
}