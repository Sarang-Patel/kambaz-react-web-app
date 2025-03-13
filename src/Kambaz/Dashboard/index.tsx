import { Row, Col, Card, Button, FormControl } from "react-bootstrap";
import { RxHamburgerMenu } from "react-icons/rx";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import * as db from "../Database";

export default function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}: {
  courses: any[];
  course: any;
  setCourse: (course: any) => void;
  addNewCourse: () => void;
  deleteCourse: (course: any) => void;
  updateCourse: () => void;
}) {
  const navigate = useNavigate();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const isFaculty = currentUser?.role === "FACULTY";

  const [enrollments, setEnrollments] = useState<{ user: string; course: string }[]>([]);
  const [showAllCourses, setShowAllCourses] = useState(false);

  useEffect(() => {
    const initialEnrollments = db.enrollments.filter((e) => e.user === currentUser._id);
    setEnrollments(initialEnrollments);
  }, [currentUser]);

  const isEnrolled = (courseId: string) => {
    return enrollments.some((e) => e.user === currentUser._id && e.course === courseId);
  };

  const handleEnroll = (courseId: string) => {
    const updatedEnrollments = [...enrollments, { user: currentUser._id, course: courseId }];
    setEnrollments(updatedEnrollments);
  };

  const handleUnenroll = (courseId: string) => {
    const updatedEnrollments = enrollments.filter((e) => !(e.user === currentUser._id && e.course === courseId));
    setEnrollments(updatedEnrollments);
  };

  const handleCourseNavigation = (courseId: string) => {
    if (isEnrolled(courseId)) {
      navigate(`/Kambaz/Courses/${courseId}/Home`);
    } else {
      alert("You must be enrolled to access this course.");
    }
  };

  return (
    <div id="wd-dashboard">
      <div className="d-flex align-items-center justify-content-between">
        <NavLink to={"/Kambaz/Courses/1234/Nav"}>
          <RxHamburgerMenu className="me-4 fs-4 mb-1 text-danger d-md-none d-sm-block" style={{ cursor: "pointer" }} />
        </NavLink>
        <h1 id="dashboard-title">Dashboard</h1>
        <Button variant="primary" onClick={() => setShowAllCourses(!showAllCourses)}>
          {showAllCourses ? "Show Enrolled" : "Show All"}
        </Button>
      </div>
      <hr />

      {isFaculty && (
        <>
          <h5>
            New Course
            <Button className="float-end" variant="primary" id="wd-add-new-course-click" onClick={addNewCourse}>
              Add
            </Button>
            <Button className="float-end me-2" variant="warning" id="wd-update-course-click" onClick={updateCourse}>
              Update
            </Button>
          </h5>
          <br />
          <FormControl
            value={course.name}
            className="mb-2"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
          <FormControl
            value={course.description}
            onChange={(e) => setCourse({ ...course, description: e.target.value })}
          />
        </>
      )}
      <hr />

      <h2 id="dashboard-published">
        {showAllCourses ? `All Courses (${courses.length})` : `Enrolled Courses (${enrollments.length})`}
      </h2>
      <hr />
      <br />

      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {courses
            .filter((course) => showAllCourses || isEnrolled(course._id))
            .map((course) => (
              <Col key={course._id} style={{ width: "318px" }}>
                <Card>
                  <Card.Img
                    variant="top"
                    src={course.image_url}
                    alt="Course"
                    style={{ maxWidth: "100%", height: "155px", objectFit: "cover" }}
                  />
                  <div className="p-2">
                    <Card.Title className="mt-2 ms-2" style={{ fontSize: "1.1rem", fontWeight: "bold" }}>
                      {course.name}
                    </Card.Title>
                    <Card.Text className="wd-dashboard-course-title ms-2" style={{ fontSize: "0.9rem", color: "#555" }}>
                      {course.description}
                    </Card.Text>
                    <Button variant="primary" className="ms-2 mb-3 float-start" onClick={() => handleCourseNavigation(course._id)}>
                      Go
                    </Button>

                    {isEnrolled(course._id) ? (
                      <Button variant="danger" className="float-end" onClick={() => handleUnenroll(course._id)}>
                        Unenroll
                      </Button>
                    ) : (
                      <Button variant="success" className="float-end" onClick={() => handleEnroll(course._id)}>
                        Enroll
                      </Button>
                    )}

                    {isFaculty && (
                      <>
                        <Button
                          variant="danger"
                          className="float-end me-2"
                          id="wd-delete-course-click"
                          onClick={(event) => {
                            event.preventDefault();
                            deleteCourse(course._id);
                          }}
                        >
                          Delete
                        </Button>
                        <Button
                          variant="warning"
                          className="float-end me-2"
                          id="wd-edit-course-click"
                          onClick={(event) => {
                            event.preventDefault();
                            setCourse(course);
                          }}
                        >
                          Edit
                        </Button>
                      </>
                    )}
                  </div>
                </Card>
              </Col>
            ))}
        </Row>
      </div>
      <br />
    </div>
  );
}
