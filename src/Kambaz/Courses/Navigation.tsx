import { useParams } from "react-router";
import { NavLink } from "react-router-dom";

export default function CourseNavigation() {

  const {cid} = useParams();

  const navLinks = [
    { to: `/Kambaz/Courses/${cid}/Home`, label: "Home" },
    { to: `/Kambaz/Courses/${cid}/Modules`, label: "Modules" },
    { to: `/Kambaz/Courses/${cid}/Piazza`, label: "Piazza" },
    { to: `/Kambaz/Courses/${cid}/Zoom`, label: "Zoom" },
    { to: `/Kambaz/Courses/${cid}/Assignments`, label: "Assignments" },
    { to: `/Kambaz/Courses/${cid}/Quizzes`, label: "Quizzes" },
    { to: `/Kambaz/Courses/${cid}/Grades`, label: "Grades" },
    { to: `/Kambaz/Courses/${cid}/People`, label: "People" },
  ]

  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0 me-4">
      {navLinks.map((link) => (
        <NavLink
          key={link.to} 
          to={link.to}
          className={({ isActive }) =>
            `list-group-item border border-0 ${isActive ? 'active' : 'text-danger'}`
          }
          style={({ isActive }) => ({
            color: isActive ? 'black' : 'red',
          })}
        >
          {link.label}
          
        </NavLink>
      ))}
    </div>
  );
}
