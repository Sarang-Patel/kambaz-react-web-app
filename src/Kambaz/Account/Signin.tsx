import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { setCurrentUser } from "./reducer";
import { useDispatch } from "react-redux";
import * as db from "../Database";
import { Button } from "react-bootstrap";

export default function Signin() {

  const [credentials, setCredentials] = useState<any>({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const signin = () => {
    const user = db.users.find(
      (u: any) => u.username === credentials.username && u.password === credentials.password);
    if (!user) return;
    dispatch(setCurrentUser(user));
    navigate("/Kambaz/Dashboard");
  };


  return (
    <div id="wd-signin-screen">
      <h3>Sign in</h3>
      <input defaultValue={credentials.username} placeholder="username" className="wd-username form-control mb-2" onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
      /> 
      <input
        type="password"
        defaultValue={credentials.password}
        onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
        placeholder="password"
        className="ws-password form-control mb-2"
      />
      <Button id="ws-signin-btn" onClick={signin} className="btn btn-primary w-100 mb-2">
        Sign in
      </Button>
      <Link to="/kambaz/Account/Signup" id="ws-signup-link">
        Sign up
      </Link>
    </div>
  );
}
