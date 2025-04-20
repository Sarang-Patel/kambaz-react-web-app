import { useState } from "react";
import { BsExclamationCircle } from "react-icons/bs";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import QuestionRenderer from "./QuestionRenderer";
import { Button } from "react-bootstrap";
import "./quizstyle.css";
import { MdArrowLeft, MdArrowRight } from "react-icons/md";
import Countdown from 'react-countdown';


export default function QuizPreview() {
  const { quizzes } = useSelector((state: any) => state.quizzesReducer);
  const { qid } = useParams();
  const quiz = quizzes.find((q: any) => q._id === qid);
  const questions = quiz.questions;
  const [current, setCurrent] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [oneQuestionAtATime, setOneQuestionAtATime] = useState(
    quiz.oneQuestionAtATime
  );

  const navigate = useNavigate();
  const [answers, setAnswers] = useState<any>({});

  const currentQuestion = questions[current];

  const handleSubmit = () => {
    setSubmitted(true);
    setOneQuestionAtATime(false);
  };

  const handleOptionChange = (qId: string, value: number | string) => {
    setAnswers({ ...answers, [qId]: value });
  };

  const renderer = ({ hours, minutes, seconds }: any) => {
    return (
      <div>
        {hours}:{minutes}:{seconds}
      </div>
    );
  };

  return (
    <div className="quiz-preview-section">
      <div className="quiz-title" style={{ fontWeight: "bold" }}>
        <h4>{quiz.quizTitle}</h4>
      </div>
      <div
        className="py-2 px-3 mt-3 rounded-2 d-flex align-items-center gap-2"
        style={{
          backgroundColor: "#f8eae7",
          color: "#d16b48",
          fontSize: ".9rem",
        }}
      >
        <BsExclamationCircle />
        This is a preview of the quiz
      </div>
      <Countdown date={Date.now() + quiz.timeLimit * 60000} renderer={renderer}/>
      <h3 className="mt-3">Quiz Instructions</h3>
      <hr />
      {oneQuestionAtATime ? (
        <>
          <div style={{ maxWidth: "900px", width: "100%" }}>
            <QuestionRenderer
              question={currentQuestion}
              selected={answers[currentQuestion._id]}
              onChange={handleOptionChange}
              submitted={submitted}
            />
            {!submitted && (
              <div className="d-flex justify-content-between mt-3">
                <Button
                  id="question-prev-btn"
                  disabled={current === 0}
                  onClick={() => setCurrent((prev) => prev - 1)}
                >
                  {<MdArrowLeft />}Previous
                </Button>
                <Button
                  id="question-next-btn"
                  disabled={current === questions.length - 1}
                  onClick={() => setCurrent((prev) => prev + 1)}
                >
                  Next {<MdArrowRight />}
                </Button>
              </div>
            )}
          </div>
        </>
      ) : (
        <>
          {questions.map((q: any) => (
            <>
              <br />
              <QuestionRenderer
                key={q._id}
                question={q}
                selected={answers[q._id]}
                onChange={handleOptionChange}
                submitted={submitted}
              />
            </>
          ))}
        </>
      )}

      {!submitted && (
        <Button
          id="quiz-submit-btn"
          onClick={handleSubmit}
          style={{ position: "fixed", bottom: "1rem", right: "1rem" }}
        >
          Submit Quiz
        </Button>
      )}

      <Button className="quiz-edit-btn mt-3" onClick={() => navigate(`/Kambaz/Courses/CS1234/Quizzes/${qid}/editor`)}>Continue editing quiz</Button>
    </div>
  );
}
