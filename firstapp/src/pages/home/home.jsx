import React from 'react'
import "./home.css"
import Header from "../../components/header/header"
import Posts from "../../components/posts/posts"
import SideBar from "../../components/sidebar/sidebar"

export default function Home() {
    return (
        <div>
            <Header/>
            <div className='home'>
                <SideBar/>
                <Posts/>
                <div className ="videos">
                    <p className ="zoomer">"ZOOMER"</p>
                    <video className = "video" height="600" controls muted loop autoplay oncanplay="this.muted=true" playsinline>
                        <source src="/images/ss.mp4" type = "video/mp4"></source>
                        Your browser does not support HTML5 video.
                    </video>
                    <video className = "video" height="600" controls muted loop autoplay oncanplay="this.muted=true" playsinline>
                        <source src="/images/familyguy.mp4" type = "video/mp4"></source>
                        Your browser does not support HTML5 video.
                    </video>
                </div>
            </div>
        </div>
    )
}