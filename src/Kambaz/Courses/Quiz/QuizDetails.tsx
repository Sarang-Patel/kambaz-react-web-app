import { Button } from "react-bootstrap";
import "./quizstyle.css";
import { LuPencil } from "react-icons/lu";
import { Link, useParams } from "react-router-dom";

export default function QuizDetails({
  quizzes,
}: {
  quizzes: any;
}) {
  const { qid } = useParams(); 

  const quiz = quizzes.find((q: any) => q._id === qid);

  return (
    <div className="quiz-details-section">
      <div className="quiz-details-top d-flex gap-2 w-100 justify-content-center align-items-center">
        <Button className="details-screen-button">Preview</Button>
        <Link
          to="editor"
          className="details-screen-button"
          style={{ textDecoration: "none", textAlign: "center" }}
        >
          <LuPencil /> Edit
        </Link>
      </div>
      <hr />
      <div className="quiz-details-bottom">
        <div className="quiz-title">
          <h3>{quiz.quizTitle}</h3>
        </div>
        <div className="quiz-properties">
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
              <span className="quiz-property-value">{quiz.maxAttempts}</span>
            </li>
            <li className="d-flex">
              <span className="quiz-property-title">Show Correct Answers</span>
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
                <td>{quiz.dueDate ? quiz.dueDate : "Not Set"}</td>
                <td>{quiz.availableDate ? quiz.availableDate : "Not Set"}</td>
                <td>{quiz.untilDate ? quiz.untilDate : "Not Set"}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
