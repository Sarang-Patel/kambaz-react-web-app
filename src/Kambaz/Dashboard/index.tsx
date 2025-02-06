import { Row, Col, Card, Button } from "react-bootstrap";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link, NavLink } from "react-router";

export default function Dashboard() {
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
      <h2 id="dashboard-published">Published Courses (7)</h2>
      <hr />
      <br />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          <Col id="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link
                to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <Card.Img
                  variant="top"
                  src="\images\webdev.png"
                  alt="Course 1"
                />
                <div>
                  <Card.Title className="mt-2 ms-2">CS1234 Web Dev</Card.Title>
                  <Card.Text className="wd-dashboard-course-title ms-2">
                    Full stack development
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
          <Col id="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link
                to="/Kambaz/Courses/5678/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <Card.Img
                  variant="top"
                  src="\images\ds.jpg"
                  alt="Course 2"
                />
                <div>
                  <Card.Title className="mt-2 ms-2">
                    CS5678 Data Structures
                  </Card.Title>
                  <Card.Text className="wd-dashboard-course-title ms-2">
                    Understanding algorithms and data structures
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
          <Col id="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link
                to="/Kambaz/Courses/91011/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <Card.Img
                  variant="top"
                  src="\images\ai.png"
                  alt="Course 3"
                />
                <div>
                  <Card.Title className="mt-2 ms-2">
                    CS91011 AI Basics
                  </Card.Title>
                  <Card.Text className="wd-dashboard-course-title ms-2">
                    Introduction to artificial intelligence
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
          <Col id="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link
                to="/Kambaz/Courses/1213/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <Card.Img
                  variant="top"
                  src="\images\networking.jpg"
                  alt="Course 4"
                />
                <div>
                  <Card.Title className="mt-2 ms-2">
                    CS1213 Networking
                  </Card.Title>
                  <Card.Text className="wd-dashboard-course-title ms-2">
                    Understanding computer networks
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
          <Col id="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link
                to="/Kambaz/Courses/1415/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <Card.Img
                  variant="top"
                  src="\images\dbms.jpg"
                  alt="Course 5"
                />
                <div>
                  <Card.Title className="mt-2 ms-2">
                    CS1415 Database Management
                  </Card.Title>
                  <Card.Text className="wd-dashboard-course-title ms-2">
                    Designing and managing databases
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
          <Col id="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link
                to="/Kambaz/Courses/1617/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <Card.Img
                  variant="top"
                  src="\images\cloud.jpg"
                  alt="Course 6"
                />
                <div>
                  <Card.Title className="mt-2 ms-2">
                    CS1617 Cloud Computing
                  </Card.Title>
                  <Card.Text className="wd-dashboard-course-title ms-2">
                    Introduction to cloud-based technologies
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
          <Col id="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link
                to="/Kambaz/Courses/1819/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <Card.Img
                  variant="top"
                  src="\images\cybersecurity.jpg"
                  alt="Course 7"
                />
                <div>
                  <Card.Title className="mt-2 ms-2">
                    CS1819 Cybersecurity
                  </Card.Title>
                  <Card.Text className="wd-dashboard-course-title ms-2">
                    Foundations of securing digital systems
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
        </Row>
      </div>
    </div>
  );
}
