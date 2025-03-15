import { Button } from "react-bootstrap";
import "./quizstyle.css";
import { LuPencil } from "react-icons/lu";
import { Link } from "react-router-dom";

export default function QuizDetails() {
  return (
    <div className="quiz-details-section">
      <div className="quiz-details-top d-flex gap-2 w-100 justify-content-center align-items-center">
        <Button className="details-screen-button">Preview</Button>
        <Link to = "editor" className="details-screen-button" style={{textDecoration:"none", textAlign:"center"}}>
          <LuPencil /> Edit
        </Link>
      </div>
      <hr />
      <div className="quiz-details-bottom">
        <div className="quiz-title">
          <h3>Q1 - HTML</h3>
        </div>
        <div className="quiz-properties">
          <ul className="list-unstyled">
            <li className="d-flex">
              <span className="quiz-property-title">Quiz Type</span>
              <span className="quiz-property-value">Graded Quiz</span>
            </li>
            <li className="d-flex">
              <span className="quiz-property-title">Points</span>
              <span className="quiz-property-value">30</span>
            </li>
            <li className="d-flex">
              <span className="quiz-property-title">Assignment Group</span>
              <span className="quiz-property-value">Quizzes</span>
            </li>
            <li className="d-flex">
              <span className="quiz-property-title">Shuffle Answers</span>
              <span className="quiz-property-value">Yes</span>
            </li>
            <li className="d-flex">
              <span className="quiz-property-title">Time Limit</span>
              <span className="quiz-property-value">20 Minutes</span>
            </li>
            <li className="d-flex">
              <span className="quiz-property-title">Multiple Attempts</span>
              <span className="quiz-property-value">No</span>
            </li>
            <li className="d-flex">
              <span className="quiz-property-title">How Many Attempts</span>
              <span className="quiz-property-value">1</span>
            </li>
            <li className="d-flex">
              <span className="quiz-property-title">Show Correct Answers</span>
              <span className="quiz-property-value">After Attempt</span>
            </li>
            <li className="d-flex">
              <span className="quiz-property-title">Access Code</span>
              <span className="quiz-property-value">None</span>
            </li>
            <li className="d-flex">
              <span className="quiz-property-title">
                One Question at a Time
              </span>
              <span className="quiz-property-value">Yes</span>
            </li>
            <li className="d-flex">
              <span className="quiz-property-title">Webcam Required</span>
              <span className="quiz-property-value">No</span>
            </li>
            <li className="d-flex">
              <span className="quiz-property-title">
                Lock Questions After Answering
              </span>
              <span className="quiz-property-value">No</span>
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
                <td>Sep 30, 2025</td>
                <td>Sep 15, 2025</td>
                <td>Oct 15, 2025</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
