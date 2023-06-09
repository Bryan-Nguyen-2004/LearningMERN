import "./createAccount.css"
import { Link } from "react-router-dom";


export default function CreateAccount() {
    return (
        <div className="createAccount">
            <span className="createAccountTitle">*Register*</span>
            <form className="createAccountForm">
                <label>[Username]</label>
                <input className="createAccountInput" type="text" placeholder="username!"/>
                <label>[Email]</label>
                <input className="createAccountInput" type="text" placeholder="email!" />
                <label>[Password]</label>
                <input className="createAccountInput" type="password" placeholder="password!" />
                <button className="createAccountButton" type="submit">
                    <Link className='link' to={'/createAccount'}>"Create Account"</Link>
                </button>
                <button className="createAccountLoginButton">
                    <Link className='link' to={'/login'}>"Login"</Link>
                </button>
            </form>
        </div>
    )
}