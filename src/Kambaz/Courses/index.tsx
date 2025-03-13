import { RxHamburgerMenu } from "react-icons/rx";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import Home from "./Home";
import Modules from "./Modules";
import CourseNavigation from "./Navigation";
import { Navigate, NavLink, Route, Routes, useParams, useLocation } from "react-router";
import Table from "./People/Table";
import NavigationMobile from "./NavigationMobile";

export default function Courses({ courses }: { courses: any[]; }) {
  const {cid} = useParams();
  const {pathname} = useLocation();
  const course = courses.find((course) => course._id === cid);
  return (
    <div id="wd-courses" className="w-100"> 
      <div className="d-flex align-items-center">
        <NavLink to={"/Kambaz/Courses/1234/Nav"}>
          <RxHamburgerMenu className="me-4 fs-4 mb-1 text-danger d-md-none d-sm-block" style={{ cursor: 'pointer' }}/>
        </NavLink>
        <h2 className="text-danger my-2 fs-3 d-flex align-items-center">{course?.name} <span className="fs-5 ms-2" style={{position: "relative", top: "0px"}}>&gt; {pathname.split("/")[4]}</span></h2>
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

