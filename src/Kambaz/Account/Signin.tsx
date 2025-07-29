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
        <h1>Demo Accounts</h1>
        <h6>Please feel free to use the following existing accounts to try features of the app</h6>
        <h6>or create your own</h6><br />
        <p>
          <b>Professor Account:</b><br />
          username : testfaculty <br />
          pass : 1234<br /><br />
          <b>Student Account:</b><br />
          username: teststudent<br />
          pass : 1234
        </p>
      </div>
    </div>
  );
}
