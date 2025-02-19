import { Button } from "react-bootstrap";
import { BiImport } from "react-icons/bi";
import { FaBell, FaCheckCircle } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { LiaFileImportSolid } from "react-icons/lia";
import { MdBarChart, MdDoNotDisturbAlt } from "react-icons/md";
import { TfiAnnouncement } from "react-icons/tfi";
import "./home.css";

export default function CourseStatus() {
  return (
    <div id="wd-course-status" style={{ width: "350px" }}>
      <h2>Course Status</h2>
      <div className="d-flex">
        <div className="w-50 pe-1">
          <Button   variant="secondary" size="lg" className="custom-button w-100 text-nowrap ">
            <MdDoNotDisturbAlt className="me-2 fs-5" /> Unpublish
          </Button>
        </div>
        <div className="w-50">
          <Button variant="success" size="lg" className="w-100">
            <FaCheckCircle className="me-2 fs-5" /> Publish
          </Button>
        </div>
      </div>
      <Button   variant="secondary" size="lg" className="custom-button w-100 mt-1 text-start">
        <BiImport className="me-2 fs-5" /> Import Existing Content
      </Button>
      <Button   variant="secondary" size="lg" className="custom-button w-100 mt-1 text-start">
        <LiaFileImportSolid className="me-2 fs-5" /> Import from Commons
      </Button>
      <Button   variant="secondary" size="lg" className="custom-button w-100 mt-1 text-start"> <IoMdHome className="me-2 fs-5" />
      Choose Home Page</Button>
      <br />
      <Button   variant="secondary" size="lg" className="custom-button w-100 mt-1 text-start"><MdBarChart  className="me-2 fs-5" />
      View Course Stream</Button>
      <br />
      <Button   variant="secondary" size="lg" className="custom-button w-100 mt-1 text-start"><TfiAnnouncement className="me-2 fs-5"  />
      New Announcements</Button>
      <br />
      <Button   variant="secondary" size="lg" className="custom-button w-100 mt-1 text-start"><MdBarChart className="me-2 fs-5"  />New Analytics</Button>
      <br />
      <Button   variant="secondary" size="lg" className="custom-button w-100 mt-1 text-start"><FaBell  className="me-2 fs-5" />
      View Course Notifications</Button>
    </div>
  );
}
