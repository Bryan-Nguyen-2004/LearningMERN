import React from 'react'
import "./post.css"
import { Link } from "react-router-dom";

export default function Post() {
    return (
        <div className = "post">
            <img className='postImg' src = "/images/record.png" alt="/images/record.jpeg" />
            <div className = "postInfo"> 
                <span className='postTitle'>
                    <Link className='link2' to={'/post/rand'}>"TITLE"</Link>
                </span>
                <div className = "postInfo"> 
                    <span className='postCat'>cat 1 cat 2</span>
                </div>
                <hr />
                <span className='postDate'>today</span>
            </div>
            <p className='postSummary'>ewhuefhwuiiufhiufewuhifeewhuefhwuiiufhiufewuhifewhuifewhiufewhuihufiewhufewhuidihadhudewhuefhwuiiufhiufewuhifewhuifewhiufewhuihufiewhufewhuidihadhudewhuefhwuiiufhiufewuhifewhuifewhiufewhuihufiewhufewhuidihadhudewhuefhwuiiufhiufewuhifewhuifewhiufewhuihufiewhufewhuidihadhudewhuefhwuiiufhiufewuhifewhuifewhiufewhuihufiewhufewhuidihadhudewhuefhwuiiufhiufewuhifewhuifewhiufewhuihufiewhufewhuidihadhudewhuefhwuiiufhiufewuhifewhuifewhiufewhuihufiewhufewhuidihadhudhuifewhiufewhuihufiewhufewhuidihadhudshuisduihsuidiud</p>
        </div>
    )
}