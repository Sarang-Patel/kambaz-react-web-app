import { Row, Col, Card, Button, FormControl } from "react-bootstrap";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link, NavLink } from "react-router";

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
  return (
    <div id="wd-dashboard">
      <div className="d-flex align-items-center">
        <NavLink to={"/Kambaz/Courses/1234/Nav"}>
          <RxHamburgerMenu
            className="me-4 fs-4 mb-1 text-danger d-md-none d-sm-block"
            style={{ cursor: "pointer" }}
          />
        </NavLink>
        <h1 id="dashboard-title">Dashboard</h1>
        <hr />
      </div>
      <hr />
      <div className="add-new-course">
        <h5 className="d-flex align-items-center justify-content-between">
          New Course
          <div>
            <button
              className="btn btn-warning me-2"
              onClick={updateCourse}
              id="wd-update-course-click"
            >
              Update
            </button>
            <button
              className="btn btn-primary me-3"
              id="wd-add-new-course-click"
              onClick={addNewCourse}
            >
              {" "}
              Add{" "}
            </button>
          </div>
        </h5>
        <FormControl
          value={course.name}
          className="mb-2"
          onChange={(e) => setCourse({ ...course, name: e.target.value })}
        />
        <FormControl
          value={course.description}
          onChange={(e) =>
            setCourse({ ...course, description: e.target.value })
          }
        />
      </div>
      <hr />
      <h2 id="dashboard-published">Published Courses ({courses.length})</h2>
      <hr />
      <br />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {courses.map((course) => (
            <Col id={course._id} style={{ width: "318px" }}>
              <Card>
                <Link
                  to={`/Kambaz/Courses/${course._id}/Home`}
                  className="wd-dashboard-course-link text-decoration-none text-dark"
                >
                  <Card.Img
                    variant="top"
                    src={course.image_url}
                    alt="Course 1"
                    style={{
                      maxWidth: "100%",
                      height: "155px",
                      objectFit: "cover",
                    }}
                  />
                  <div className="px-3 py-2">
                    <Card.Title
                      className="mt-2"
                      style={{
                        fontSize: "1.1rem",
                        fontWeight: "bold",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {course.name}
                    </Card.Title>
                    <Card.Text
                      className="wd-dashboard-course-title"
                      style={{
                        fontSize: "0.9rem",
                        color: "#555",
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {course.description}
                    </Card.Text>
                    <div className="course-buttons d-flex justify-content-between pb-2">
                      <Button variant="primary">Go</Button>
                      <div className="course-btn-right">
                        <Button
                          variant="warning"
                          onClick={(event) => {
                            event.preventDefault();
                            setCourse(course);
                          }}
                          className="me-2"
                        >
                          Edit
                        </Button>
                        <Button
                          variant="danger"
                          onClick={(event) => {
                            event.preventDefault();
                            deleteCourse(course._id);
                          }}
                        >
                          Delete
                        </Button>
                      </div>
                    </div>
                  </div>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
      <br />
    </div>
  );
}
