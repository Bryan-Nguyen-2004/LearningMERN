import "./writePost.css"
import SideBar from "../../components/sidebar/sidebar"

export default function WritePost() {
    return (
        <div className="writePostPage">
            <SideBar/>
            <div className="writePost">
                <img className="writeImage" src="/images/background.jpeg" alt="" />
                <form className="writePostForm">
                    <label htmlFor="fileInput">
                        <i class="writePostIcon fa-duotone fa-plus"></i>                            
                    </label>
                    <input
                        type="file"
                        id="fileInput"
                        style={{ display: "none" }}
                    />
                    <div className="writePostGroup">
                        <input
                            type="text"
                            placeholder="title"
                            className="writePostInput"
                            autoFocus={true}
                        />
                    </div>
                    <div className="writePostGroup">
                        <textarea
                            placeholder="type here"
                            type="text"
                            className="writePostInput writePostText"
                        ></textarea>
                        <br />
                    </div>
                    <button className="writePostSubmit" type="submit"> Post </button>
                </form>
            </div>
        </div>
    );
}