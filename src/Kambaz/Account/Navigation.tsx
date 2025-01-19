import { Link } from "react-router";

export default function AccountNavigation() {
    return (
        <div id="wd-account-navigation">
            <Link to={`/Kambaz/Account/Signin`}>Sign in</Link> <br />
            <Link to={`/Kambaz/Account/Signup`}>Sign up</Link> <br />
            <Link to={`/Kambaz/Account/Profile`}>Profile</Link> <br />
        </div>
    );
}