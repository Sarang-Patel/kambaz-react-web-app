import { SetStateAction, useState } from "react";
import { GoBeaker, GoInbox } from "react-icons/go";
import { LuBook } from "react-icons/lu";
import { RiAccountCircleLine } from "react-icons/ri";
import { SlCalender } from "react-icons/sl";
import { TfiDashboard } from "react-icons/tfi";
import { Link } from "react-router";

export default function KambazNavigation() {
  const [activeLink, setActiveLink] = useState("");

  const handleLinkClick = (linkId: SetStateAction<string>) => {
    setActiveLink(linkId);
  };

  const navLinks = [
    { id: "account", label: "Account", to: "/Kambaz/Account", icon: <RiAccountCircleLine className="fs-1" /> },
    { id: "dashboard", label: "Dashboard", to: "/Kambaz/Dashboard", icon: <TfiDashboard className="fs-2 text-danger" /> },
    { id: "courses", label: "Courses", to: "/Kambaz/Dashboard", icon: <LuBook className="fs-2 text-danger" /> },
    { id: "calender", label: "Calendar", to: "/Kambaz/Calendar", icon: <SlCalender className="fs-2 text-danger" /> },
    { id: "inbox", label: "Inbox", to: "/Kambaz/Inbox", icon: <GoInbox className="fs-2 text-danger" /> },
    { id: "labs", label: "Labs", to: "/Labs", icon: <GoBeaker className="fs-2 text-danger" /> },
  ];

  return (
    <div
      id="wd-kambaz-navigation"
      style={{ maxWidth: 120 }}
      className="list-group bg-black position-fixed top-0 bottom-0 d-none d-md-block rounded-0 z-2 pt-4"
    >
      <a
        href="https://www.northeastern.edu/"
        id="ed-neu-link"
        target="_blank"
        className="list-group-item bg-black border-0 text-center"
      >
        <img src="images/northeastern-logo.png" width="75px" alt="Northeastern Logo" />
      </a>
      <br />

      {navLinks.map((link) => (
        <Link
          key={link.id}
          to={link.to}
          id={`wd-${link.id}-link`}
          className={`list-group-item border-0 text-center mb-2 ${
            activeLink === link.id ? "bg-white text-danger" : "bg-black text-white"
          }`}
          onClick={() => handleLinkClick(link.id)}
        >
          {link.icon}
          <br />
          {link.label}
        </Link>
      ))}
    </div>
  );
}
