import { Row, Col, Card, Button, FormControl } from "react-bootstrap";
import { RxHamburgerMenu } from "react-icons/rx";
import { NavLink, useNavigate } from "react-router";
import { useSelector } from "react-redux";

import * as userClient from "../Account/client";
import * as courseClient from "../Courses/client";

import { useEffect, useState } from "react";

export default function Dashboard() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const isFaculty = currentUser?.role === "FACULTY";

  const [course, setCourse] = useState<any>({
    _id: "0",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    image_url: "images/default.jpeg",
    description: "New Description",
  });
  const navigate = useNavigate();
  const [showAllCourses, setShowAllCourses] = useState(false);

  const [courses, setCourses] = useState<any[]>([]);

  const fetchCourses = async () => {
    try {
      const courses = await userClient.findCoursesForUser(currentUser._id);
      setCourses(courses);
    } catch (error) {
      console.error(error);
    }
  };

  const [allCourses, setAllCourses] = useState<any[]>([]);

  const fetchAllCourses = async () => {
    try {
      const courses = await courseClient.fetchAllCourses();
      setAllCourses(courses);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCourses();
    fetchAllCourses();
  }, [currentUser]);

  const addNewCourse = async () => {
    const newCourse = await courseClient.createCourse(course);
    setCourses([...courses, newCourse]);
    setAllCourses([...allCourses, newCourse]);
  };

  const deleteCourse = async (courseId: string) => {
    await courseClient.deleteCourse(courseId);
    setCourses(courses.filter((course) => course._id !== courseId));
    setAllCourses(allCourses.filter((course) => course._id !== courseId));
  };

  const updateCourse = async () => {
    await courseClient.updateCourse(course);
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
    setAllCourses(
      allCourses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };

  const isEnrolled = (courseId: string) => {
    return courses.some((course) => course._id === courseId);
  };

  const handleEnroll = async (courseId: string) => {
    try {
      await userClient.enrollIntoCourse(currentUser._id, courseId);
      const enrolledCourse = allCourses.find(
        (course) => course._id === courseId
      );
      setCourses([...courses, enrolledCourse]);
    } catch (error) {
      console.error("Error enrolling in course:", error);
    }
  };

  const handleUnenroll = async (courseId: string) => {
    try {
      await userClient.unenrollFromCourse(currentUser._id, courseId);
      setCourses(courses.filter((course) => course._id !== courseId));
    } catch (error) {
      console.error("Error unenrolling from course:", error);
    }
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
      <div className="d-flex align-items-center ">
        <NavLink to={"/Kambaz/Courses/1234/Nav"}>
          <RxHamburgerMenu
            className="me-4 fs-4 mb-1 text-danger d-md-none d-sm-block"
            style={{ cursor: "pointer" }}
          />
        </NavLink>
        <div className="d-flex w-100 justify-content-between align-items-center">
          <h1 id="dashboard-title">Dashboard</h1>
          <Button
            variant="primary"
            onClick={() => setShowAllCourses(!showAllCourses)}
            className={`${showAllCourses ? "btn-danger" : "btn-primary"}`}
          >
            {showAllCourses ? "Show Enrolled Courses" : "All courses"}
          </Button>
        </div>
        <hr />
      </div>
      <hr />
      {isFaculty && (
        <div className="add-new-course">
          <h5 className="d-flex align-items-center justify-content-between">
            New Course
            <div>
              <button
                className="btn btn-warning me-2"
                onClick={() => updateCourse()}
                id="wd-update-course-click"
              >
                Update
              </button>
              <button
                className="btn btn-primary me-3"
                id="wd-add-new-course-click"
                onClick={() => addNewCourse()}
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
      )}
      <hr />
      <h2 id="dashboard-published">
        {" "}
        {showAllCourses
          ? `All Courses (${allCourses.length})`
          : `Enrolled Courses (${courses.length})`}
      </h2>
      <hr />
      <br />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {(showAllCourses ? allCourses : courses).map((course: any) => (
            <Col id={course._id} style={{ width: "350px"}}>
              <Card>
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
                  <div className="d-flex justify-content-between align-items-center my-2">
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
                    {showAllCourses &&
                      (isEnrolled(course._id) ? (
                        <Button
                          variant="danger"
                          className="float-end"
                          onClick={() => handleUnenroll(course._id)}
                        >
                          Unenroll
                        </Button>
                      ) : (
                        <Button
                          variant="success"
                          className="float-end"
                          onClick={() => handleEnroll(course._id)}
                        >
                          Enroll
                        </Button>
                      ))}
                  </div>
                  <Card.Text
                    className="wd-dashboard-course-title"
                    style={{
                      fontSize: "0.9rem",
                      color: "#555",
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                      minHeight:"50px"
                    }}
                  >
                    {course.description}
                  </Card.Text>
                  <div className="course-buttons d-flex justify-content-between pb-2">
                    <Button
                      variant="primary"
                      onClick={() => handleCourseNavigation(course._id)}
                    >
                      Go
                    </Button>
                    {isFaculty && (
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
                    )}
                  </div>
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
