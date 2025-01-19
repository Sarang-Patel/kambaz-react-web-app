import { Link } from "react-router-dom";

export default function Signin() {
    return (
        <div id="wd-signin-screen">
            <h3>Sign in</h3>
            <input placeholder = "username" className="wd-username" /> <br/>
            <input type="password" placeholder = "password" className="ws-password" /> <br />
            <Link to = "/kambaz/Dashboard" id="ws-signin-btn"><button>Sign in</button></Link> <br />
            <Link to = "/kambaz/Account/Signup" id="ws-signup-link">Sign up</Link>
        </div>
    );
}