import { Button, ListGroup } from "react-bootstrap";
import { HiOutlinePlus } from "react-icons/hi";
import { RxMagnifyingGlass } from "react-icons/rx";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { IoEllipsisVertical } from "react-icons/io5";
import { BsGripVertical } from "react-icons/bs";
import { Link } from "react-router-dom";
import { MdOutlineAssignment } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "../../style.css";
import { useNavigate } from "react-router-dom";
import { addAssignment, deleteAssignment, updateAssignment, editAssignment } from "./reducer";


export default function Assignments() {
  const { cid } = useParams();
 

  const dispatch = useDispatch();
  
  const { assignments } = useSelector((state: any) => state.assignmentReducer);
  
  const navigate = useNavigate();

  
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const isFaculty = currentUser?.role === "FACULTY";

  return (
    <div id="wd-assignments" className="w-100">
      <div className="d-flex justify-content-between align-items-center mb-5">
        <div className="input-group" style={{ maxWidth: "300px" }}>
          <div className="input-group-prepend">
            <span
              className="input-group-text rounded-0 bg-white fs-4 border-end-0"
              id="basic-addon1"
            >
              <RxMagnifyingGlass />
            </span>
          </div>
          <input
            placeholder="Search..."
            id="wd-search-assignment"
            className="form-control border-start-0 rounded-0 p-0"
          />
        </div>

        {isFaculty && (
          <div className="d-flex gap-2">
            <Button
              variant="secondary"
              id="wd-add-assignment-group"
              className="d-flex align-items-center custom-button"
            >
              <HiOutlinePlus className="fs-6" /> Group
            </Button>
            <Button
              variant="danger"
              id="wd-add-assignment"
              className="d-flex align-items-center"
              onClick={() => navigate("/Kambaz/Courses/CS1234/Assignments/new")}
            >
              <HiOutlinePlus className="fs-6" /> Assignment
            </Button>
          </div>
        )}
      </div>

      <ListGroup className="rounded-0" id="wd-assignments">
        <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
          <div
            className="d-flex justify-content-between py-3 px-1"
            style={{ backgroundColor: "#f5f5f5" }}
          >
            <div className="d-flex align-items-center">
              <BsGripVertical className="fs-5" />
              <IoMdArrowDropdown className="me-1 fs-5" />
              <h3 id="wd-assignments-title" className="fs-5 mb-0">
                ASSIGNMENTS
              </h3>
            </div>

            {isFaculty && (
              <div className="d-flex align-items-center gap-1">
                <span className="border border-1 rounded-5 px-2 border-black fs-6">
                  40% of Total
                </span>
                <button className="border-0 bg-secondary">
                  <HiOutlinePlus className="fs-6" />
                </button>
                <IoEllipsisVertical className="fs-5" />
              </div>
            )}
          </div>

          <ListGroup id="wd-assignment-list">
            {assignments.filter((assignment: any) => assignment.course === cid).map((assignment: any) => (
              <ListGroup.Item
                key={assignment._id}
                className="wd-assignment-list-item rounded-0 d-flex align-items-center justify-content-between"
              >
                <div className="d-flex align-items-center gap-4">
                  <div className="d-flex">
                    <BsGripVertical className="me-2 fs-4" />
                    <MdOutlineAssignment className="text-success fs-4" />
                  </div>
                  <div className="details-group">
                    {isFaculty ? (
                      <Link
                        to={`${assignment._id}`}
                        className="wd-assignment-link text-decoration-none text-black fs-5"
                      >
                        {assignment.title}
                      </Link>
                    ) : (
                      <span className="fs-5">{assignment.title}</span>
                    )}
                    <br />
                    <span className="fs-6 text-danger">Multiple Modules </span>
                    <span className="fs-6">
                      | <strong>Not available until</strong> May 6 at 12:00am
                    </span>
                    <br />
                    <span className="fs-6">
                      <strong>Due</strong> May 13 at 11:59pm | 100 pts
                    </span>
                  </div>
                </div>

                {isFaculty && (
                  <LessonControlButtons
                    moduleId={assignment._id}
                    deleteModule={(moduleId) =>
                      dispatch(deleteAssignment(moduleId))
                    }
                    editModule={(moduleId) => dispatch(editAssignment(moduleId))}
                  />
                )}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}
