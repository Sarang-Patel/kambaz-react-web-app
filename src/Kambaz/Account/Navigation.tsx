import { Link } from "react-router";

export default function AccountNavigation() {
    return (
        <div id="wd-account-navigation" className="list-group wd fs-5 rounded-0 me-5">
            <Link to={`/Kambaz/Account/Signin`} className="list-group-item border-0 active">Sign in</Link> <br />
            <Link to={`/Kambaz/Account/Signup`} className="list-group-item border-0 text-danger">Sign up</Link> <br />
            <Link to={`/Kambaz/Account/Profile`} className="list-group-item border-0 text-danger">Profile</Link> <br />
        </div>
    );
}