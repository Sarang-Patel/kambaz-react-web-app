import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  return (
    <div
      id="wd-account-navigation"
      className="list-group wd fs-5 rounded-0 me-5"
    >
      {currentUser ? (
        <NavLink
          to={`/Kambaz/Account/Profile`}
          className={({ isActive }) =>
            `list-group-item border-0 ${isActive ? "active" : "text-danger"}`
          }
          style={({ isActive }) => ({
            color: isActive ? "black" : "red",
          })}
        >
          Profile
        </NavLink>
      ) : (
        <div>
          <NavLink
            to={`/Kambaz/Account/Signin`}
            className={({ isActive }) =>
              `list-group-item border-0 ${isActive ? "active" : "text-danger"}`
            }
            style={({ isActive }) => ({
              color: isActive ? "black" : "red",
            })}
          >
            Sign in
          </NavLink>
          <br />
          <NavLink
            to={`/Kambaz/Account/Signup`}
            className={({ isActive }) =>
              `list-group-item border-0 ${isActive ? "active" : "text-danger"}`
            }
            style={({ isActive }) => ({
              color: isActive ? "black" : "red",
            })}
          >
            Sign up
          </NavLink>
        </div>
      )}
    </div>
  );
}
