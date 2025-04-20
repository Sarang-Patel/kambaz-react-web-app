import { useEffect, useState } from "react";
import { Button, ListGroup } from "react-bootstrap";
import { CiMenuKebab } from "react-icons/ci";
import { FaCheckCircle } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoRocketOutline } from "react-icons/io5";
import "./quizstyle.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as quizClient from "./client";
import { setQuizzes } from "./reducer";
import { FcCancel } from "react-icons/fc";
import { getStudentSubmissionsforQuiz } from "./client";

export default function Quizzes() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const isFaculty = currentUser.role === "FACULTY" ? true : false;
  const [isContextMenuVisible, setisContextMenuVisible] = useState("none");
  const { cid }: any = useParams();
  const { quizzes } = useSelector((state: any) => state.quizzesReducer);
  const [submissions, setSubmissions] = useState<{ [key: string]: any }>({});
  
  const toggleContextMenu = (_id: any) => {
    if (isContextMenuVisible === "none") {
      setisContextMenuVisible(_id);
    } else {
      setisContextMenuVisible("none");
    }
  };

  function getAvailabilityStatus(q: any) {
    const today = new Date();
    var availableDate = new Date(q.availableDate);
    availableDate.setDate(availableDate.getDate() + 1)
    var availableUntilDate = new Date(q.untilDate);
    availableUntilDate.setDate(availableUntilDate.getDate() + 1)

    if (today > availableUntilDate) {
      return "Closed";
    } else if (today >= availableDate && today <= availableUntilDate) {
      return "Available";
    } else if (today < availableDate) {
      return `Not available until ${availableDate.toLocaleDateString(
        undefined,
        {
          year: "numeric",
          month: "short",
          day: "numeric",
        }
      )}`;
    }
    return "Status Unknown";
  }

  async function fetchSubmissions(quizzes: any[]) {
    const subs: { [key: string]: any } = {};
    for (const quiz of quizzes) {
      const submission = await getStudentSubmissionsforQuiz(
        quiz._id,
        currentUser._id
      );
      subs[quiz._id] = submission[0];
    }
    setSubmissions(subs);
  }

  async function fetchQuizzes() {
    var quizzes = await quizClient.findQuizzesForCourse(cid);
    if (!isFaculty) {
      quizzes = quizzes.filter((q: any) => q.publish === true);
    }
    dispatch(setQuizzes(quizzes));
    if (!isFaculty) {
      fetchSubmissions(quizzes);
    }
  }

  useEffect(() => {
    fetchQuizzes();
  }, []);

  async function handleQuizDelete(_id: any) {
    await quizClient.deleteQuiz(_id);
    fetchQuizzes();
  }

  async function handleQuizPublish(q: any, publish: boolean) {
    const quiz = { ...q, publish: publish };
    await quizClient.updateQuiz(quiz);
    fetchQuizzes();
  }

  return (
    <div className="wd-quiz-section">
      <div className="d-flex h-auto justify-content-between">
        <input
          type="text"
          placeholder="Search for Quiz"
          className="p-2 h-100 "
          style={{ minWidth: "300px" }}
        />
        {isFaculty && (
          <div className=" d-flex gap-1">
            <Button
              variant="danger"
              className="rounded-0 h-100"
              onClick={() =>
                navigate(`/Kambaz/Courses/${cid}/Quizzes/new/editor`)
              }
            >
              + Quiz
            </Button>
            <div className="context-menu-group">
              <Button
                className=" h-100 rounded-0 "
                style={{ backgroundColor: "#f5f5f5", border: "1px solid gray" }}
              >
                <CiMenuKebab color="black" />
              </Button>
            </div>
          </div>
        )}
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
            {quizzes.map((q: any) => (
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
                      {getAvailabilityStatus(q)} &nbsp;&nbsp;| &nbsp;&nbsp;{" "}
                      <b>Due</b>{" "}
                      {q.dueDate
                        ? new Date(new Date(q.dueDate).setDate(new Date(q.dueDate).getDate() + 1)).toLocaleDateString(undefined, {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          })
                        : "N/A"}{" "}
                      &nbsp;&nbsp;| &nbsp;&nbsp;
                      {q.points} pts &nbsp;&nbsp;|&nbsp;&nbsp;{" "}
                      {q.questions.length} Questions &nbsp;&nbsp;|&nbsp;&nbsp;{" "}
                      <b>
                        {submissions[q._id]?.score !== undefined
                          ? `${submissions[q._id].score} points`
                          : "Not Attempted"}
                      </b>
                    </div>
                  </div>
                </div>
                <div className="quiz-control d-flex gap-4 align-items-center">
                  {isFaculty &&
                    (q.publish ? (
                      <FaCheckCircle
                        color="green"
                        style={{ fontSize: "23px" }}
                      />
                    ) : (
                      <FcCancel style={{ fontSize: "23px" }} />
                    ))}
                  {isFaculty && (
                    <div className="context-menu-group">
                      <Button
                        className=" border-0 bg-white"
                        style={{
                          backgroundColor: "#f5f5f5",
                          border: "1px solid gray",
                        }}
                        onClick={() => toggleContextMenu(q._id)}
                      >
                        <CiMenuKebab color="black" />
                      </Button>
                      {isContextMenuVisible === q._id && (
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
                            <Link
                              to={`${q._id}/editor`}
                              className="context-menu-button-hover text-center py-2"
                              style={{ textDecoration: "none" }}
                            >
                              Edit
                            </Link>
                            <Button
                              className="context-menu-button-hover"
                              onClick={() => handleQuizDelete(q._id)}
                            >
                              Delete
                            </Button>
                            <Button
                              className="context-menu-button-hover"
                              onClick={() => handleQuizPublish(q, !q.publish)}
                            >
                              {!q.publish ? "Publish" : "Unpublish"}
                            </Button>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}
