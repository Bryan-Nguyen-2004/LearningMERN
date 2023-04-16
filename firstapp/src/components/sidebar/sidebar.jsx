import React from 'react'
import "./sidebar.css"

export default function NavBar() {
    return (
        < div className="sideBar" >
            <div className="sideBarItems">
                <div className="sideBarItem">
                    <img src="/images/sidebar.png" alt="logo" />
                    <span className="sideBarTitle"> ABOUT SECTION </span>
                    <p className="sideBarAbout"> 
                        BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH LOOK AT RECORDS WOW
                    </p>
                </div>
                <div className="sideBarItem">
                    <span className="sideBarTitle"> Categories </span>
                    <ul className="sideBarList">
                        <li className='sideBarListItem'>
                            cat1
                        </li>
                        <li className='sideBarListItem'>
                            cat2
                        </li>
                        <li className='sideBarListItem'>
                            cat2
                        </li>
                    </ul>
                </div>
                <img className='andre' src="/images/andre.png" alt="logo" />
            </div>
        </div >
    )
}