import { useEffect, useState } from "react";
import { getStudentSubmissionsforQuiz } from "./client";
import { useSelector } from "react-redux";
import { useParams } from "react-router";

export default function QuizResults() {
  const { quizzes } = useSelector((state: any) => state.quizzesReducer);
  const { qid } = useParams();
  const quiz = quizzes.find((q: any) => q._id === qid);
  const questions = quiz?.questions || [];
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  const [submissions, setSubmissions] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  const recentSubmission = submissions[0];
  const [score, setScore] = useState<number | null>(null);

  // const calculateScore = () => {
  //   let total = 0;
  //   quiz.questions.forEach((q: any) => {
  //     if (
  //       recentSubmission?.answers[q._id] !== undefined &&
  //       recentSubmission?.answers[q._id] === q.correctAnswer
  //     ) {
  //       total += q.points;
  //     }
  //   });
  //   return total;
  // };

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

  useEffect(() => {
    if (submissions.length > 0) {
      setScore(recentSubmission.score);
    }
  }, [submissions]);

  return (
    <div className="quiz-results-section">
      <h3>Results</h3>
      <hr />
      <h4>{quiz.quizTitle}</h4>
      <hr />
      <div className="alert alert-success mt-3" style={{ maxWidth: "900px" }}>
        You scored <strong className="fs-5">{score}</strong> out of{" "}
        {quiz.points}
      </div>
      {questions.map((q: any) => (
        <>
          <div
            style={{
              width: "100%",
              maxWidth: "900px",
              boxShadow:
                "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset",
              borderRadius: ".8rem",
            }}
          >
            <div
              className="quiz-question-meta d-flex justify-content-between p-4"
              style={{
                backgroundColor: "#f5f5f5",
                borderBottom: "1px solid gray",
              }}
            >
              <div className="question-title">{q.title}</div>
              <div className="question-points">{q.points}</div>
            </div>
            <div className="quiz-question p-4 pb-0">{q.questionText}</div>
            <div className="quiz-options p-4 pt-1">
              {q.type === "Multiple Choice" &&
                q.options.map((opt: string, idx: number) => (
                  <div key={idx}>
                    <hr />
                    <div className="option-group d-flex gap-2">
                      <label
                        htmlFor={`radio-${q._id}-${idx}`}
                        className="d-flex align-items-center gap-2"
                      >
                        <input
                          id={`radio-${q._id}-${idx}`}
                          type="radio"
                          name={q._id}
                          disabled={true}
                          checked={recentSubmission?.answers[q._id] === idx}
                        />
                        <span style={{ color: "gray" }}>{opt}</span>
                        {recentSubmission?.answers[q._id] === q.correctAnswer &&
                          q.correctAnswer === idx && (
                            <span className="text-success fw-bold">(Correct)</span>
                          )}
                        {recentSubmission?.answers[q._id] !== q.correctAnswer &&
                          q.correctAnswer === idx && (
                            <span className="text-success fw-bold"> (Correct)</span>
                          )}
                        {recentSubmission?.answers[q._id] !== q.correctAnswer &&
                          recentSubmission?.answers[q._id] === idx && (
                            <span className="text-danger fw-bold"> (Incorrect)</span>
                          )}
                      </label>
                    </div>
                  </div>
                ))}

              {q.type === "True/False" && (
                <>
                  {["True", "False"].map((val, idx) => (
                    <div key={val}>
                      <hr />
                      <label htmlFor={`radio-${q._id}-${idx}`}>
                        <input
                          id={`radio-${q._id}-${idx}`}
                          type="radio"
                          name={q._id}
                          disabled={true}
                          checked={recentSubmission?.answers[q._id] === idx}
                        />
                        <span className="ms-2" style={{ color: "gray" }}>
                          {val}
                        </span>
                        {recentSubmission?.answers[q._id] === q.correctAnswer &&
                          q.correctAnswer === idx && (
                            <span className="text-success fw-bold">(Correct)</span>
                          )}
                        {recentSubmission?.answers[q._id] !== q.correctAnswer &&
                          q.correctAnswer === idx && (
                            <span className="text-success fw-bold"> (Correct)</span>
                          )}
                        {recentSubmission?.answers[q._id] !== q.correctAnswer &&
                          recentSubmission?.answers[q._id] === idx && (
                            <span className="text-danger fw-bold"> (Incorrect)</span>
                          )}
                      </label>
                    </div>
                  ))}
                </>
              )}

              {q.type === "Fill in the Blank" && (
                <>
                  <hr />
                  <input
                    className="form-control"
                    placeholder="Type your answer"
                    disabled={true}
                    value={recentSubmission?.answers[q._id] || ""}
                  />
                  {(() => {
                    const isCorrect = q.options.includes(
                      recentSubmission?.answers[q._id]
                    );
                    return (
                      <span
                        style={{
                          fontWeight: "bold",
                          color: isCorrect ? "green" : "red",
                        }}
                      >
                        {isCorrect ? "(Correct)" : "(Incorrect)"}
                      </span>
                    );
                  })()}
                </>
              )}
            </div>
          </div>
          <br />
        </>
      ))}
    </div>
  );
}
