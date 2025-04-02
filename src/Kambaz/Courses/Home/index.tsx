import Modules from "../Modules";
import CourseStatus from "./Status";

export default function Home({isFaculty} : any) {
  return (
    <div className="d-flex" id="wd-home">
      <div className="flex-fill me-3">
        <Modules isFaculty = {isFaculty}/>
      </div>
      <div className="d-none d-xl-block">
        {isFaculty && <CourseStatus />}
      </div>
    </div>
  );
}
