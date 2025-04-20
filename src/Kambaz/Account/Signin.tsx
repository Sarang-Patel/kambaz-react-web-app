import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { setCurrentUser } from "./reducer";
import { useDispatch } from "react-redux";
import { Button } from "react-bootstrap";
import * as client from "./client";

export default function Signin() {
  const [credentials, setCredentials] = useState<any>({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const signin = async () => {
    const user = await client.signin(credentials);
    if (!user) return;
    dispatch(setCurrentUser(user));
    navigate("/Kambaz/Dashboard");
  };

  return (
    <div id="wd-signin-screen">
      <div>
        <h3>Sign in</h3>
        <input
          defaultValue={credentials.username}
          placeholder="username"
          className="wd-username form-control mb-2"
          onChange={(e) =>
            setCredentials({ ...credentials, username: e.target.value })
          }
        />
        <input
          type="password"
          defaultValue={credentials.password}
          onChange={(e) =>
            setCredentials({ ...credentials, password: e.target.value })
          }
          placeholder="password"
          className="ws-password form-control mb-2"
        />
        <Button
          id="ws-signin-btn"
          onClick={signin}
          className="btn btn-primary w-100 mb-2"
        >
          Sign in
        </Button>
        <Link to="/kambaz/Account/Signup" id="ws-signup-link">
          Sign up
        </Link>
      </div>
          <br /><br /><br /><br />

      <div className="team-details bg-warning p-5">
        <h1>Project - Quiz Section</h1>
        <h3>Sarang Patel - Grad</h3><br />
        <a href="https://github.com/Sarang-Patel/kambaz-react-web-app/tree/finalProject">
          <h5>React Github link</h5>
        </a>
        <a href="https://github.com/Sarang-Patel/kambaz-node-server-app/tree/finalProject">
          <h5>Node Github link</h5>
        </a>
      </div>
    </div>
  );
}
