import { Button } from "react-bootstrap";
import "./quizstyle.css";
import { LuPencil } from "react-icons/lu";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { getStudentSubmissionsforQuiz } from "./client";

export default function QuizDetails() {
  const { qid } = useParams();
  const { quizzes } = useSelector((state: any) => state.quizzesReducer);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const isFaculty = currentUser.role === "FACULTY" ? true : false;
  const quiz = quizzes.find((q: any) => q._id === qid);
  var availableDate = new Date(quiz.availableDate);
  availableDate.setDate(availableDate.getDate() + 1)

  var availableUntilDate = new Date(quiz.untilDate);
  availableUntilDate.setDate(availableUntilDate.getDate() + 1)



  var dueDate = new Date(quiz.dueDate);
  dueDate.setDate(dueDate.getDate() + 1)


  const [submissions, setSubmissions] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  const getSubmissions = async () => {
    setError(null);
    try {
      const resSubmissions = await getStudentSubmissionsforQuiz(
        qid,
        currentUser._id
      );
      setSubmissions(resSubmissions);
    } catch (err) {
      setError("Failed to fetch submissions.");
      console.error(error);
    }
  };

  useEffect(() => {
    if (qid && currentUser?._id) {
      getSubmissions();
    }
  }, [qid, currentUser]);

  const attemptsMade = submissions.length;
  const maxAllowed = quiz.multipleAttempts ? quiz.maxAttempts : 1;
  const hasUsedAllAttempts = attemptsMade >= maxAllowed;

  return (
    <div className="quiz-details-section">
      <div className="quiz-details-top mt-3">
        {isFaculty && (
          <div className="d-flex gap-2 w-100 justify-content-center align-items-center">
            <Link to="preview">
              <Button className="details-screen-button">Preview</Button>
            </Link>
            <Link
              to="editor"
              className="details-screen-button"
              style={{ textDecoration: "none", textAlign: "center" }}
            >
              <LuPencil /> Edit
            </Link>
          </div>
        )}
      </div>
      {isFaculty && <hr />}
      <div className="quiz-details-bottom">
        <div className="quiz-title">
          <h3>{quiz.quizTitle}</h3>
          <div dangerouslySetInnerHTML={{ __html: quiz.quizdesc }} />
        </div>
        {!isFaculty && <hr />}

        {isFaculty && (
          <>
            <div
              className="quiz-properties d-flex justify-content-around"
              style={{ position: "relative", right: "4rem" }}
            >
              <ul className="list-unstyled">
                <li className="d-flex">
                  <span className="quiz-property-title">Quiz Type</span>
                  <span className="quiz-property-value">{quiz.quizType}</span>
                </li>
                <li className="d-flex">
                  <span className="quiz-property-title">Points</span>
                  <span className="quiz-property-value">{quiz.points}</span>
                </li>
                <li className="d-flex">
                  <span className="quiz-property-title">Assignment Group</span>
                  <span className="quiz-property-value">
                    {quiz.assignmentGroup}
                  </span>
                </li>
                <li className="d-flex">
                  <span className="quiz-property-title">Shuffle Answers</span>
                  <span className="quiz-property-value">
                    {quiz.shuffleAnswers ? "Yes" : "No"}
                  </span>
                </li>
                <li className="d-flex">
                  <span className="quiz-property-title">Time Limit</span>
                  <span className="quiz-property-value">
                    {quiz.timeLimit} Minutes
                  </span>
                </li>
                <li className="d-flex">
                  <span className="quiz-property-title">Multiple Attempts</span>
                  <span className="quiz-property-value">
                    {quiz.multipleAttempts ? "Yes" : "No"}
                  </span>
                </li>
                <li className="d-flex">
                  <span className="quiz-property-title">How Many Attempts</span>
                  <span className="quiz-property-value">
                    {quiz.maxAttempts}
                  </span>
                </li>
                <li className="d-flex">
                  <span className="quiz-property-title">
                    Show Correct Answers
                  </span>
                  <span className="quiz-property-value">
                    {quiz.showCorrectAnswers}
                  </span>
                </li>
                <li className="d-flex">
                  <span className="quiz-property-title">Access Code</span>
                  <span className="quiz-property-value">
                    {quiz.accessCode || "None"}
                  </span>
                </li>
                <li className="d-flex">
                  <span className="quiz-property-title">
                    One Question at a Time
                  </span>
                  <span className="quiz-property-value">
                    {quiz.oneQuestionAtATime ? "Yes" : "No"}
                  </span>
                </li>
                <li className="d-flex">
                  <span className="quiz-property-title">Webcam Required</span>
                  <span className="quiz-property-value">
                    {quiz.webcamRequired ? "Yes" : "No"}
                  </span>
                </li>
                <li className="d-flex">
                  <span className="quiz-property-title">
                    Lock Questions After Answering
                  </span>
                  <span className="quiz-property-value">
                    {quiz.lockQuestionsAfterAnswering ? "Yes" : "No"}
                  </span>
                </li>
              </ul>
            </div>
            <div className="quiz-due-dates">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Due Date</th>
                    <th scope="col">Available Date</th>
                    <th scope="col">Until Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      {quiz.dueDate
                        ? dueDate.toLocaleDateString(undefined, {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          })
                        : "Not Set"}
                    </td>
                    <td>
                      {quiz.availableDate
                        ? availableDate.toLocaleDateString(undefined, {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          })
                        : "Not Set"}
                    </td>
                    <td>
                      {quiz.untilDate
                        ? availableUntilDate.toLocaleDateString(undefined, {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          })
                        : "Not Set"}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
      {!isFaculty && (
        <div className="student-quizBtn d-flex justify-content-around gap-4 mt-3">
          <Button
            className="details-screen-button px-3"
            onClick={() => navigate("take")}
            disabled={hasUsedAllAttempts}
          >
            Take the Quiz
          </Button>

          <Button
            onClick={() => navigate("results")}
            className="details-screen-button px-3"
            disabled={attemptsMade === 0}
          >
            View Results
          </Button>
        </div>
      )}
      {hasUsedAllAttempts && (
        <div className="text-danger mt-2">
          You have used up all attempts for this quiz. Max allowed is{" "}
          {maxAllowed} attempt{maxAllowed > 1 ? "s" : ""}.
        </div>
      )}
    </div>
  );
}
