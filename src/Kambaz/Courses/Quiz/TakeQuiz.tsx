import { Button } from "react-bootstrap";
import Countdown from "react-countdown";
import { MdArrowLeft, MdArrowRight } from "react-icons/md";
import QuestionRenderer from "./QuestionRenderer";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { createQuizSubmission } from "./client";

export default function TakQuiz() {
  const { quizzes } = useSelector((state: any) => state.quizzesReducer);
  const { qid } = useParams();
  const quiz = quizzes.find((q: any) => q._id === qid);
  const questions = quiz.questions;
  const [current, setCurrent] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [oneQuestionAtATime, setOneQuestionAtATime] = useState(
    quiz.oneQuestionAtATime
  );

  const [endTime] = useState(Date.now() + quiz.timeLimit * 60000);

  const [score, setScore] = useState<number | null>(null);
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  const navigate = useNavigate();
  const [answers, setAnswers] = useState<any>({});

  const currentQuestion = questions[current];

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

  const calculateScore = () => {
    let total = 0;
    quiz.questions.forEach((q: any) => {
      if (
        q.type !== "Fill in the Blank" &&
        answers[q._id] !== undefined &&
        answers[q._id] === q.correctAnswer
      ) {
        total += q.points;
      }
      if (q.type === "Fill in the Blank") {
        if (answers[q._id] !== undefined) {
          const userAnswer = answers[q._id].toLowerCase().trim();

          const correctOption = q.options.some(
            (option: string) => option.toLowerCase().trim() === userAnswer
          );

          if (correctOption) {
            total += q.points;
          }
        }
      }
    });
    return total;
  };

  const handleSubmit = async () => {
    const score = calculateScore();
    setScore(score);
    setSubmitted(true);
    setOneQuestionAtATime(false);

    const submission = {
      quizId: qid,
      studentId: currentUser._id,
      answers,
      score,
    };

    await createQuizSubmission(submission);
    navigate(`/Kambaz/Courses/CS1234/Quizzes/${qid}/results`);
  };

  if (!quiz) return <div>Loading...</div>;

  return (
    <div className="quiz-preview-section">
      <div className="quiz-title" style={{ fontWeight: "bold" }}>
        <h4>{quiz.quizTitle}</h4>
      </div>

      <Countdown date={endTime} renderer={renderer} onComplete={handleSubmit} />
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

      {!submitted ? (
        <Button
          id="quiz-submit-btn"
          onClick={handleSubmit}
          style={{ position: "fixed", bottom: "1rem", right: "1rem" }}
        >
          Submit Quiz
        </Button>
      ) : (
        <div className="alert alert-success mt-3">
          You scored {score} out of {quiz.points}
        </div>
      )}
    </div>
  );
}
