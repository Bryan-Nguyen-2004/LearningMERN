import React from "react"
import "./uniquePost.css"


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
                                <b> Kanye West</b>
                        </span>
                        <span className="uniquePostDate"> today
                        </span>
                    </div>

                    <p className="uniquePostDescription">gewfqfufeqwgfgeyuguyfeguyeqfguyfeguyefuygewfuyewfuyuyefuyefuyeqwfuyewfquyuyefquyefwuyefwquyfewuyefwuyewfquy</p>
                </div>
            </div>
        </>
    )
}