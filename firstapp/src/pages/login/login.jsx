import "./login.css"


export default function Login() {
    return (
        <div className="login">
            <span className="loginTitle">*LOGIN*</span>
            <form className="loginForm">
                <label>[Username]</label>
                <input 
                    className="loginInput" 
                    type="text" 
                    placeholder="username!"
                />
                <label>[Password]</label>
                <input className="loginInput" type="password" placeholder="password!" />
                <button className="loginLoginButton">
                "Login" 
                </button>
                <button className="loginButton" type="submit">"Create Account"</button>
            </form>
            
        </div>
    )
}