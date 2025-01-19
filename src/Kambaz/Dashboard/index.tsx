import { Link } from "react-router";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="dashboard-title">Dashboard</h1><hr />
      <h2 id="dashboard-published">Published Courses (7)</h2><hr /><br />
      <div id="wd-dashboard-courses">
        <div id="wd-dashboard-course">
          <Link
            to="/Kambaz/Courses/1234/Home"
            className="wd-dashboard-course-link"
          >
            <img src="\images\course.jpg" alt="Course 1" />
            <div>
              <h5>CS1234 Web Dev</h5>
              <p className="wd-dashboard-course-title">
                Full stack development
              </p>
              <button>Go</button>
            </div>
          </Link>
        </div>
        <div id="wd-dashboard-course">
          <Link
            to="/Kambaz/Courses/5678/Home"
            className="wd-dashboard-course-link"
          >
            <img src="\images\course.jpg" alt="Course 2" />
            <div>
              <h5>CS5678 Data Structures</h5>
              <p className="wd-dashboard-course-title">
                Understanding algorithms and data structures
              </p>
              <button>Go</button>
            </div>
          </Link>
        </div>
        <div id="wd-dashboard-course">
          <Link
            to="/Kambaz/Courses/91011/Home"
            className="wd-dashboard-course-link"
          >
            <img src="\images\course.jpg" alt="Course 3" />
            <div>
              <h5>CS91011 AI Basics</h5>
              <p className="wd-dashboard-course-title">
                Introduction to artificial intelligence
              </p>
              <button>Go</button>
            </div>
          </Link>
        </div>
        <div id="wd-dashboard-course">
          <Link
            to="/Kambaz/Courses/1213/Home"
            className="wd-dashboard-course-link"
          >
            <img src="\images\course.jpg" alt="Course 4" />
            <div>
              <h5>CS1213 Networking</h5>
              <p className="wd-dashboard-course-title">
                Understanding computer networks
              </p>
              <button>Go</button>
            </div>
          </Link>
        </div>
        <div id="wd-dashboard-course">
          <Link
            to="/Kambaz/Courses/1415/Home"
            className="wd-dashboard-course-link"
          >
            <img src="\images\course.jpg" alt="Course 5" />
            <div>
              <h5>CS1415 Database Management</h5>
              <p className="wd-dashboard-course-title">
                Designing and managing databases
              </p>
              <button>Go</button>
            </div>
          </Link>
        </div>
        <div id="wd-dashboard-course">
          <Link
            to="/Kambaz/Courses/1617/Home"
            className="wd-dashboard-course-link"
          >
            <img src="\images\course.jpg" alt="Course 6" />
            <div>
              <h5>CS1617 Cloud Computing</h5>
              <p className="wd-dashboard-course-title">
                Introduction to cloud-based technologies
              </p>
              <button>Go</button>
            </div>
          </Link>
        </div>
        <div id="wd-dashboard-course">
          <Link
            to="/Kambaz/Courses/1819/Home"
            className="wd-dashboard-course-link"
          >
            <img src="\images\course.jpg" alt="Course 7" />
            <div>
              <h5>CS1819 Cybersecurity</h5>
              <p className="wd-dashboard-course-title">
                Foundations of securing digital systems
              </p>
              <button>Go</button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
