import { Row, Col, Card, Button } from "react-bootstrap";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link, NavLink } from "react-router";
import * as db from "../Database";

export default function Dashboard() {
  const courses = db.courses;
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
      </div>
      <hr />
      <h2 id="dashboard-published">Published Courses ({courses.length})</h2>
      <hr />
      <br />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {courses.map((course) => (
            <Col id={course._id} style={{ width: "318px"}}>
              <Card >
                <Link
                  to={`/Kambaz/Courses/${course._id}/Home`}
                  className="wd-dashboard-course-link text-decoration-none text-dark"
                >
                  <Card.Img
                    variant="top"
                    src={course.image_url}
                    alt="Course 1"
                    style={{
                      maxWidth :"100%",
                      height: "155px",
                      objectFit: "cover",
                       
                     
                    }}
                  />
                  <div className="p-2">
                    <Card.Title className="mt-2 ms-2" style={{
                      fontSize: "1.1rem",
                      fontWeight: "bold",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}>
                      {course.name}
                    </Card.Title>
                    <Card.Text className="wd-dashboard-course-title ms-2 "  style={{
                      fontSize: "0.9rem",
                      color: "#555",
                      display: "-webkit-box",
                      WebkitLineClamp: 2,                        WebkitBoxOrient: "vertical",
                      overflow: "hidden",}}>
                      {course.description}
                    </Card.Text>
                    <Button
                      variant="primary"
                      className="ms-2 mb-3"
                      style={{ width: "100px" }}
                    >
                      Go
                    </Button>
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
