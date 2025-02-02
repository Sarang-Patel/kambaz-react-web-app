import { SetStateAction, useState } from "react";
import { GoBeaker, GoInbox } from "react-icons/go";
import { LuBook } from "react-icons/lu";
import { RiAccountCircleLine } from "react-icons/ri";
import { SlCalender } from "react-icons/sl";
import { TfiDashboard } from "react-icons/tfi";
import { Link } from "react-router";

export default function KambazNavigation() {
  const [activeLink, setActiveLink] = useState("");

  // Function to handle link click and set active state
  const handleLinkClick = (linkId: SetStateAction<string>) => {
    setActiveLink(linkId);
  };

  return (
    <div
      id="wd-kambaz-navigation"
      style={{ width: 120 }}
      className=" list-group bg-black position-fixed top-0 bottom-0 d-none d-md-block rounded-0 z-2 pt-4"
    >
      <a
        href="https://www.northeastern.edu/"
        id="ed-neu-link"
        target="_blank"
        className="list-group-item bg-black border-0 text-center"
      >
        <img src="images/northeastern-logo.png" width="75px" alt="" />
      </a>
      <br />
      <Link
        to="/Kambaz/Account"
        id="wd-account-link"
        className={`list-group-item border-0 text-center ${activeLink === 'account' ? 'bg-white text-danger' : 'bg-black text-white'}`}
        onClick={() => handleLinkClick('account')}
      >
        <RiAccountCircleLine className="fs-1 text-danger" />
        <br />
        Account
      </Link>
      <br />
      <Link
        to="/Kambaz/Dashboard"
        id="wd-dashboard-link"
        className={`list-group-item border-0 text-center ${activeLink === 'dashboard' ? 'bg-white text-danger' : 'bg-black text-white'}`}
        onClick={() => handleLinkClick('dashboard')}
      >
        <TfiDashboard className="fs-2 text-danger" />
        <br />
        Dashboard
      </Link>
      <br />
      <Link
        to="/Kambaz/Dashboard"
        id="wd-course-link"
        className={`list-group-item border-0 text-center ${activeLink === 'courses' ? 'bg-white text-danger' : 'bg-black text-white'}`}
        onClick={() => handleLinkClick('courses')}
      >
        <LuBook className="fs-2 text-danger" />
        <br />
        Courses
      </Link>
      <br />
      <Link
        to="/Kambaz/Calendar"
        id="wd-calendar-link"
        className={`list-group-item border-0 text-center ${activeLink === 'calender' ? 'bg-white text-danger' : 'bg-black text-white'}`}
        onClick={() => handleLinkClick('calender')}
      >
        <SlCalender className="fs-2 text-danger" />
        <br />
        Calender
      </Link>
      <br />
      <Link
        to="/Kambaz/Inbox"
        id="wd-inbox-link"
        className={`list-group-item border-0 text-center ${activeLink === 'inbox' ? 'bg-white text-danger' : 'bg-black text-white'}`}
        onClick={() => handleLinkClick('inbox')}
      >
        <GoInbox className="fs-2 text-danger" />
        <br />
        Inbox
      </Link>
      <br />
      <Link
        to="/Labs"
        id="wd-labs-link"
        className={`list-group-item border-0 text-center ${activeLink === 'labs' ? 'bg-white text-danger' : 'bg-black text-white'}`}
        onClick={() => handleLinkClick('labs')}
      >
        <GoBeaker className="fs-2 text-danger" />
        <br />
        labs
      </Link>
      <br />
    </div>
  );
}
