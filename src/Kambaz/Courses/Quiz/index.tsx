import { useState } from "react";
import { Button, ListGroup } from "react-bootstrap";
import { CiMenuKebab } from "react-icons/ci";
import { FaCheckCircle } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoRocketOutline } from "react-icons/io5";
import "./quizstyle.css";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

export default function Quizzes({
  quizzes,
  setQuizzes,
}: {
  quizzes : any,
  setQuizzes: any
}) {
  
  const [isContextMenuVisible, setisContextMenuVisible] = useState(false);

  const [quiz, setQuiz] = useState({
    _id: "12345",
    quizTitle: "New Quiz",
    quizType: "Graded Quiz",
    points: 0,
    assignmentGroup: "Quizzes",
    shuffleAnswers: true,
    timeLimit: 20,
    multipleAttempts: false,
    maxAttempts: 1,
    showCorrectAnswers: "No",
    accessCode: "",
    oneQuestionAtATime: true,
    webcamRequired: false,
    lockQuestionsAfterAnswering: false,
    dueDate: null,
    availableDate: null,
    untilDate: null,
  });

  const addQuiz = () => {
    const newQuiz = {...quiz, _id: uuidv4()}
    setQuizzes([...quizzes, newQuiz]);
    console.log(quizzes);
  };

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
          <Button
            variant="danger"
            className="rounded-0 h-100"
            onClick={() => addQuiz()}
          >
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
            {isContextMenuVisible && (
              <div className="context-menu position-relative">
                <div
                  className="d-flex flex-column position-absolute z-2"
                  style={{
                    right: "0px",
                    top: ".5rem",
                    border: "1px solid gray",
                    minWidth: "200px",
                  }}
                >
                  <Button className="context-menu-button-hover">Edit</Button>
                  <Button className="context-menu-button-hover">Delete</Button>
                  <Button className="context-menu-button-hover">Publish</Button>
                  <Button className="context-menu-button-hover">Copy</Button>
                  <Button className="context-menu-button-hover">Sort</Button>
                </div>
              </div>
            )}
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

          <ListGroup className="wd-quiz-item">
            {quizzes.map((q : any) => (
              <ListGroup.Item
                key={q._id}
                className="d-flex py-3 px-4 w-100 justify-content-between align-items-center"
                style={{
                  borderLeft: "4px solid green",
                  borderTop: 0,
                  borderRight: 0,
                  borderRadius: "0",
                }}
              >
                <div className="d-flex gap-3 align-items-center">
                  <div className="rocketSymbol">
                    <IoRocketOutline color="green" />
                  </div>
                  <div className="quiz-content">
                    <Link
                      to={`${q._id}`}
                      className="quiz-title"
                      style={{
                        color: "#212529",
                        textDecoration: "none",
                        fontSize: "1rem",
                      }}
                    >
                      <strong>{q.quizTitle}</strong>
                    </Link>
                    <div
                      className="quiz-metaData"
                      style={{ fontSize: ".9rem" }}
                    >
                      <strong>{q.showCorrectAnswers}</strong> &nbsp;&nbsp;|
                      &nbsp;&nbsp; Due {q.dueDate ? q.dueDate : "N/A"}{" "}
                      &nbsp;&nbsp;| &nbsp;&nbsp;
                      {q.points} pts &nbsp;&nbsp;|&nbsp;&nbsp; {q.maxAttempts}{" "}
                      attempts
                    </div>
                  </div>
                </div>
                <div className="quiz-control d-flex gap-4">
                  <FaCheckCircle color="green" style={{ fontSize: "23px" }} />
                  <CiMenuKebab color="black" style={{ fontSize: "23px" }} />
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}
