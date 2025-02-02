import { Link } from "react-router-dom";

export default function Signin() {
  return (
    <div id="wd-signin-screen">
      <h3>Sign in</h3>
      <input placeholder="username" className="wd-username form-control mb-2" /> 
      <input
        type="password"
        placeholder="password"
        className="ws-password form-control mb-2"
      />
      <Link to="/kambaz/Dashboard" id="ws-signin-btn" className="btn btn-primary w-100 mb-2">
        Sign in
      </Link>
      <Link to="/kambaz/Account/Signup" id="ws-signup-link">
        Sign up
      </Link>
    </div>
  );
}
