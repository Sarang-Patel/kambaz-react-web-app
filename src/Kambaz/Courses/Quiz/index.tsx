import { useState } from "react";
import { Button, ListGroup } from "react-bootstrap";
import { CiMenuKebab } from "react-icons/ci";
import { FaCheckCircle } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoRocketOutline } from "react-icons/io5";
import "./quizstyle.css";
import { Link } from "react-router-dom";

export default function Quizzes() {
  const [isContextMenuVisible, setisContextMenuVisible] = useState(false);

  const toggleContextMenu = () => {
    setisContextMenuVisible(!isContextMenuVisible);
  };

  return (
    <div className="wd-quiz-section">
      <div className="d-flex h-auto justify-content-between">
        <input
          type="text"
          placeholder="Search for Quiz"
          className="p-2 h-100 "
          style={{ minWidth: "300px" }}
        />
        <div className=" d-flex gap-1">
          <Button variant="danger" className="rounded-0 h-100">
            + Quiz
          </Button>
          <div className="context-menu-group">
            <Button
              className=" h-100 rounded-0 "
              style={{ backgroundColor: "#f5f5f5", border: "1px solid gray" }}
              onClick={toggleContextMenu}
            >
              <CiMenuKebab color="black" />
            </Button>
            {isContextMenuVisible && <div className="context-menu position-relative" >
              <div className="d-flex flex-column position-absolute z-2" style={{right:"0px", top:".5rem", border: "1px solid gray", minWidth:"200px"}}>
                  <Button className="context-menu-button-hover">Edit</Button>
                  <Button className="context-menu-button-hover">Delete</Button>
                  <Button className="context-menu-button-hover">Publish</Button>
                  <Button className="context-menu-button-hover">Copy</Button>
                  <Button className="context-menu-button-hover">Sort</Button>
              </div>
            </div>}
          </div>
        </div>
      </div>
      <hr />

      <ListGroup>
        <ListGroup.Item className="rounded-0 p-0">
          <div
            className="py-3 px-2"
            style={{
              backgroundColor: "#f5f5f5",
              borderBottom: "1px solid gray",
            }}
          >
            <IoMdArrowDropdown />{" "}
            <strong style={{ letterSpacing: "1px" }}>Assignment Quizzes</strong>
          </div>
          <ListGroup
            className="wd-quiz-item d-flex flex-row py-3 px-4 align-items-center justify-content-between"
            style={{
              borderLeft: "4px solid green",
              borderBottom: "1px solid gray",
              borderRadius: "0",
            }}
          >
            <div className="d-flex gap-3 align-items-center">
              <div className="rocketSymbol">
                <IoRocketOutline color="green" />
              </div>
              <div className="quiz-content">
                <Link to="q101" className="quiz-title" style={{ color:"#212529", textDecoration:"none", fontSize: "1rem" }}>
                  <strong>Q1 - HTML</strong>
                </Link>
                <div className="quiz-metaData" style={{ fontSize: ".9rem" }}>
                  <strong>Closed</strong> &nbsp;&nbsp;| &nbsp;&nbsp;Due Sep 21
                  at 1pm &nbsp;&nbsp;| &nbsp;&nbsp;100 pts
                  &nbsp;&nbsp;|&nbsp;&nbsp; 10 questions
                </div>
              </div>
            </div>
            <div className="quiz-control d-flex gap-4">
              <FaCheckCircle color="green" style={{ fontSize: "23px" }} />
              <CiMenuKebab color="black" style={{ fontSize: "23px" }} />
            </div>
          </ListGroup>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}
