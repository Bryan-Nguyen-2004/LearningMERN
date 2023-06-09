import "./login.css"
import { Link } from "react-router-dom";


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
                    <Link className='link' to={'/login'}>"Login"</Link> 
                </button>
                <button className="loginButton" type="submit">
                    <Link className='link' to={'/createAccount'}>"Create Account"</Link>
                </button>
            </form>
            
        </div>
    )
}