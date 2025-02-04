import { NavLink } from "react-router-dom";

export default function AccountNavigation() {
    return (
        <div id="wd-account-navigation" className="list-group wd fs-5 rounded-0 me-5">
            <NavLink 
                to={`/Kambaz/Account/Signin`} 
                className={({ isActive }) => 
                    `list-group-item border-0 ${isActive ? 'active' : 'text-danger'}`
                }
                style={({ isActive }) => ({
                    color: isActive ? 'black' : 'red',
                })}
            >
                Sign in
            </NavLink>
            <br />
            <NavLink 
                to={`/Kambaz/Account/Signup`} 
                className={({ isActive }) => 
                    `list-group-item border-0 ${isActive ? 'active' : 'text-danger'}`
                }
                style={({ isActive }) => ({
                    color: isActive ? 'black' : 'red',
                })}
            >
                Sign up
            </NavLink>
            <br />
            <NavLink 
                to={`/Kambaz/Account/Profile`} 
                className={({ isActive }) => 
                    `list-group-item border-0 ${isActive ? 'active' : 'text-danger'}`
                }
                style={({ isActive }) => ({
                    color: isActive ? 'black' : 'red',
                })}
            >
                Profile
            </NavLink>
            <br />
        </div>
    );
}
