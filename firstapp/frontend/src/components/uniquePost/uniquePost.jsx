import React from "react"
import "./uniquePost.css"
import { Link } from "react-router-dom";


export default function UniquePost() {

    return (
        <>
            <div className="uniquePost">
                <div className="uniquePostWrapper">
                    <h1 className="uniquePostTitle">
                        Title
                        <div className="editPost">
                            <i class="postIcon far fa-solid fa-microphone-lines"></i>
                            <i class="postIcon far fa-solid fa-trash"></i>
                        </div>
                    </h1>
                    <img src="/images/kendrick.png" alt="post image" className="uniquePostImage" />
                    <div className="uniquePostInfo">
                        <span className="uniquePostAuthor"> Author:
                            <Link className='link' to={'/?user=Ye'}>Mr. West</Link>
                        </span>
                        <span className="uniquePostDate"> today
                        </span>
                    </div>

                    <p className="uniquePostDescription">
                        BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH 
                    </p>
                </div>
            </div>
        </>
    )
}