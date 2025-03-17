import { useState } from "react";
import "./quizstyle.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Button } from "react-bootstrap";
import { CiNoWaitingSign } from "react-icons/ci";
import QuestionsList from "./QuestionsList";
import { useParams } from "react-router-dom";

// TODO: quiz update and save 

export default function QuizEditor({
  quizzes,
  setQuizzes,
}: {
  quizzes: any;
  setQuizzes: any;
}) {
  const [activeTab, setActiveTab] = useState("details");

  const [editorContent, setEditorContent] = useState("");

  const handleChange = (value: any) => {
    setEditorContent(value);
  };

  const { qid } = useParams();

  const [quiz, setQuiz] = useState(quizzes.find((q: any) => q._id === qid));
  

  return (
    <div className="quiz-editor-section">
      <div className="d-flex justify-content-end mt-2">
        <div className="quiz-meta d-flex gap-3">
          <p>Points 0</p>
          <div className="quiz-status" style={{ color: "gray" }}>
            <CiNoWaitingSign className="me-1" />
            Not Published
          </div>
        </div>
      </div>
      <hr />
      <ul className="nav nav-tabs">
        <button
          className={`nav-link ${activeTab === "details" ? "active" : ""}`}
          onClick={() => setActiveTab("details")}
        >
          Details
        </button>

        <button
          className={`nav-link ${activeTab === "questions" ? "active" : ""}`}
          onClick={() => setActiveTab("questions")}
        >
          Questions
        </button>
      </ul>

      <div className="tab-content mt-3">
        <div
          className={`tab-pane fade ${
            activeTab === "details" ? "show active" : ""
          }`}
          id="details"
        >
          <input
            type="text"
            value={quiz.quizTitle}
            className="px-2 py-1 w-100 mb-4"
            style={{ maxWidth: "500px", border: "1px solid gray" }}
            onChange={(e) => setQuiz({ ...quiz, quizTitle: e.target.value })}
          />
          <p>Quiz Instructions: </p>
          <ReactQuill
            value={editorContent}
            onChange={handleChange}
            theme="snow"
          />

          <ul className="list-unstyled mt-4 d-flex flex-column gap-3">
            <li className="d-flex">
              <span className="details-title">Quiz Type</span>
              <span className="details-value">
                <select
                  id="quiz-type"
                  className="px-3 py-1"
                  style={{ width: "175px" }}
                  value={quiz.quizType}
                  onChange={(e) =>
                    setQuiz({ ...quiz, quizType: e.target.value })
                  }
                >
                  <option value="Graded Quiz">Graded Quiz</option>
                  <option value="Practice Quiz">Practice Quiz</option>
                  <option value="Graded Survey">Graded Survey</option>
                  <option value="Ungraded Survey">Ungraded Survey</option>
                </select>
              </span>
            </li>
            <li className="d-flex">
              <span className="details-title">Assignment Group</span>
              <span className="details-value">
                <select
                  id="assignment-group"
                  className="px-3 py-1"
                  style={{ width: "175px" }}
                  value={quiz.assignmentGroup}
                  onChange={(e) =>
                    setQuiz({ ...quiz, assignmentGroup: e.target.value })
                  }
                >
                  <option value="Quizzes">Quizzes</option>
                  <option value="Exams">Exams</option>
                  <option value="Assignments">Assignments</option>
                  <option value="Project">Project</option>
                </select>
              </span>
            </li>
            <li className="d-flex">
              <span className="details-title"></span>
              <span className="details-value d-flex flex-column">
                <p>
                  <b>Options</b>
                </p>
                <div className="d-flex flex-column gap-2">
                  <div className="d-flex">
                    <input
                      type="checkbox"
                      name="shuffle"
                      className="me-2"
                      id="shuffleans"
                      checked={quiz.shuffleAnswers}
                      onChange={(e) =>
                        setQuiz({ ...quiz, shuffleAnswers: e.target.checked })
                      }
                    />
                    <label htmlFor="shuffleans">Shuffle Answers</label>
                  </div>
                  <div className="d-flex gap-4">
                    <div>
                      <input
                        type="checkbox"
                        name="timelimit"
                        className="me-2"
                        id="timelimit"
                        checked={quiz.timeLimit > 0}
                        onChange={(e) =>
                          setQuiz({
                            ...quiz,
                            timeLimit: e.target.checked ? quiz.timeLimit : 0,
                          })
                        }
                      />
                      <label htmlFor="timelimit">Time Limit</label>
                    </div>
                    <div>
                      <input
                        type="number"
                        name="time"
                        id="time"
                        value={quiz.timeLimit}
                        style={{ width: "2rem", marginRight: ".6rem" }}
                        onChange={(e) =>
                          setQuiz({
                            ...quiz,
                            timeLimit: Number(e.target.value),
                          })
                        }
                      />
                      <label htmlFor="time">Minutes</label>
                    </div>
                  </div>
                  <div
                    className="d-flex flex-column gap-2"
                    style={{
                      border: "1px solid gray",
                      padding: ".5rem",
                      width: "100%",
                    }}
                  >
                    <div>
                      <input
                        type="checkbox"
                        name="multipleAttempts"
                        id="multipleAttempts"
                        className="me-2"
                        checked={quiz.multipleAttempts}
                        onChange={(e) =>
                          setQuiz({
                            ...quiz,
                            multipleAttempts: e.target.checked,
                          })
                        }
                      />
                      <label htmlFor="multipleAttempts">
                        Allow Multiple Attempts
                      </label>
                    </div>
                    <div>
                      <input
                        type="number"
                        name="noOfAttempts"
                        id="noOfAttempts"
                        value={quiz.maxAttempts}
                        style={{ width: "2rem", marginRight: "1rem" }}
                        onChange={(e) =>
                          setQuiz({
                            ...quiz,
                            maxAttempts: Number(e.target.value),
                          })
                        }
                      />
                      <label htmlFor="noOfAttempts">Number Of Attempts</label>
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-column gap-3 mt-4">
                  <div className="d-flex">
                    <span className="details-title" style={{ width: "30%" }}>
                      Show Correct Answers
                    </span>
                    <span className="details-value">
                      <select
                        id="show-correct-answers"
                        className="px-3 py-1"
                        style={{ width: "175px" }}
                        value={quiz.showCorrectAnswers}
                        onChange={(e) =>
                          setQuiz({
                            ...quiz,
                            showCorrectAnswers: e.target.value,
                          })
                        }
                      >
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </select>
                    </span>
                  </div>
                  <div className="d-flex">
                    <span className="details-title" style={{ width: "30%" }}>
                      Access Code
                    </span>
                    <span className="details-value">
                      <input
                        type="text"
                        id="access-code"
                        placeholder="Enter passcode"
                        className="px-3 py-1"
                        style={{ width: "175px" }}
                        value={quiz.accessCode}
                        onChange={(e) =>
                          setQuiz({ ...quiz, accessCode: e.target.value })
                        }
                      />
                    </span>
                  </div>
                  <div className="d-flex">
                    <span className="details-title" style={{ width: "30%" }}>
                      One Question at a Time
                    </span>
                    <span className="details-value">
                      <select
                        id="one-question-at-a-time"
                        className="px-3 py-1"
                        style={{ width: "175px" }}
                        value={quiz.oneQuestionAtATime ? "Yes" : "No"}
                        onChange={(e) =>
                          setQuiz({
                            ...quiz,
                            oneQuestionAtATime: e.target.value === "Yes",
                          })
                        }
                      >
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </select>
                    </span>
                  </div>
                  <div className="d-flex">
                    <span className="details-title" style={{ width: "30%" }}>
                      Webcam Required
                    </span>
                    <span className="details-value">
                      <select
                        id="webcam-required"
                        className="px-3 py-1"
                        style={{ width: "175px" }}
                        value={quiz.webcamRequired ? "Yes" : "No"}
                        onChange={(e) =>
                          setQuiz({
                            ...quiz,
                            webcamRequired: e.target.value === "Yes",
                          })
                        }
                      >
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </select>
                    </span>
                  </div>
                  <div className="d-flex">
                    <span className="details-title" style={{ width: "30%" }}>
                      Lock Questions After Answering
                    </span>
                    <span className="details-value">
                      <select
                        id="lock-questions"
                        className="px-3 py-1"
                        style={{ width: "175px" }}
                        value={quiz.lockQuestionsAfterAnswering ? "Yes" : "No"}
                        onChange={(e) =>
                          setQuiz({
                            ...quiz,
                            lockQuestionsAfterAnswering:
                              e.target.value === "Yes",
                          })
                        }
                      >
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </select>
                    </span>
                  </div>
                </div>
              </span>
            </li>
            <li className="d-flex">
              <div className="d-flex flex-column gap-3 mt-4">
                <div className="d-flex">
                  <span className="details-title" style={{ width: "30%" }}>
                    Assignment Dates
                  </span>
                  <span className="details-value">
                    <div
                      className="d-flex flex-column gap-2"
                      style={{
                        border: "1px solid gray",
                        padding: "1rem",
                        borderRadius: "3px",
                        width: "100%",
                      }}
                    >
                      <div>
                        <label htmlFor="due-date">Due Date</label>
                        <input
                          type="date"
                          id="due-date"
                          className="px-3 py-1"
                          style={{ width: "100%" }}
                          value={quiz.dueDate || ""}
                          onChange={(e) =>
                            setQuiz({ ...quiz, dueDate: e.target.value })
                          }
                        />
                      </div>
                      <div className="d-flex gap-2">
                        <div style={{ width: "50%" }}>
                          <label htmlFor="available-date">Available Date</label>
                          <input
                            type="date"
                            id="available-date"
                            className="px-3 py-1"
                            style={{ width: "100%" }}
                            value={quiz.availableDate || ""}
                            onChange={(e) =>
                              setQuiz({
                                ...quiz,
                                availableDate: e.target.value,
                              })
                            }
                          />
                        </div>
                        <div style={{ width: "50%" }}>
                          <label htmlFor="until-date">Until Date</label>
                          <input
                            type="date"
                            id="until-date"
                            className="px-3 py-1"
                            style={{ width: "100%" }}
                            value={quiz.untilDate || ""}
                            onChange={(e) =>
                              setQuiz({ ...quiz, untilDate: e.target.value })
                            }
                          />
                        </div>
                      </div>
                    </div>
                  </span>
                </div>
              </div>
            </li>
            <hr />
            <li className="d-flex">
              <span className="details-title"></span>
              <span className="details-value d-flex gap-2 ms-3">
                <Button className="quiz-cancel-buttons">Cancel</Button>
                <Button className="quiz-save-buttons">Save</Button>
                <Button className="quiz-save-buttons">Save and Publish</Button>
              </span>
            </li>
          </ul>
        </div>

        <div
          className={`tab-pane fade ${
            activeTab === "questions" ? "show active" : ""
          }`}
          id="questions"
        >
          <QuestionsList />
        </div>
      </div>
    </div>
  );
}
