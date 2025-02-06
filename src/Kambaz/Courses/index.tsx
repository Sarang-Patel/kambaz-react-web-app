import { RxHamburgerMenu } from "react-icons/rx";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import Home from "./Home";
import Modules from "./Modules";
import CourseNavigation from "./Navigation";
import { Navigate, NavLink, Route, Routes } from "react-router";
import Table from "./People/Table";
import NavigationMobile from "./NavigationMobile";

export default function Courses() {
  return (
    <div id="wd-courses" className="w-100"> 
      <div className="d-flex align-items-center">
        <NavLink to={"/Kambaz/Courses/1234/Nav"}>
          <RxHamburgerMenu className="me-4 fs-4 mb-1 text-danger d-md-none d-sm-block" style={{ cursor: 'pointer' }}/>
        </NavLink>
        <h2 className="text-danger">Course 1234</h2>
      </div>
      <hr />

      <div className="d-flex w-100">
        <div className="d-none d-md-block">
          <CourseNavigation />
        </div>
        <div className="flex-fill">
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route path="Assignments/:aid" element={<AssignmentEditor />} />
            <Route path="People" element={<Table />} />
            <Route path="Nav" element={<NavigationMobile />}/>
          </Routes>
        </div>
      </div>
    </div>
  );
}

