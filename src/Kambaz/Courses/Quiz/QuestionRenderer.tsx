export default function QuestionRenderer({
  question,
  selected,
  onChange,
  submitted,
}: any) {
  const handleSelect = (value: number | string) => {
    onChange(question._id, value);
  };

  return (
    <div
      className="quiz-renderer-section"
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
        style={{ backgroundColor: "#f5f5f5", borderBottom: "1px solid gray" }}
      >
        <div className="question-title">{question.title}</div>
        <div className="question-points">{question.points}</div>
      </div>
      <div className="quiz-question p-4 pb-0">{question.questionText}</div>
      <div className="quiz-options p-4 pt-1">
        {question.type === "Multiple Choice" &&
          question.options.map((opt: string, idx: number) => (
            <div key={idx}>
              <hr />
              <div className="option-group d-flex gap-2">
                <label
                  htmlFor={`radio-${question._id}-${idx}`}
                  className="d-flex align-items-center gap-2"
                >
                  <input
                    id={`radio-${question._id}-${idx}`}
                    type="radio"
                    name={question._id}
                    disabled={submitted}
                    checked={selected === idx}
                    onChange={() => handleSelect(idx)}
                  />
                  <span>{opt}</span>
                  {submitted && question.correctAnswer === idx && (
                    <span className="ms-2 text-success">(Correct)</span>
                  )}
                  {submitted && question.correctAnswer !== idx && (
                    <span className="ms-2 text-danger">(Incorrect)</span>
                  )}
                </label>
              </div>
            </div>
          ))}

        {question.type === "True/False" && (
          <>
            {["True", "False"].map((val, idx) => (
              <div key={val}>
                <hr />
                <label htmlFor={`radio-${question._id}-${idx}`}>
                  <input
                  id={`radio-${question._id}-${idx}`}
                    type="radio"
                    name={question._id}
                    disabled={submitted}
                    checked={selected === idx}
                    onChange={() => handleSelect(idx)}
                  />
                  <span className="ms-2">{val}</span>
                </label>
                {submitted && question.correctAnswer === idx && (
                <span className="ms-2 text-success">(Correct)</span>
              )}
                {submitted && question.correctAnswer 
                !== idx && (
                <span className="ms-2 text-danger">(Incorrect)</span>
              )}
              </div>
            ))}
          </>
        )}

        {question.type === "Fill in the Blank" && (
          <>
            <hr />
            <input
              className="form-control"
              placeholder="Type your answer"
              disabled={submitted}
              value={selected || ""}
              onChange={(e) => handleSelect(e.target.value)}
            />
            {submitted && (
            <div className="mt-2">
              {question.options.includes(selected?.trim().toLowerCase())
                ? <span className="text-success">(Correct)</span>
                : <span className="text-danger">(Incorrect)</span>}
            </div>
          )}
          </>
        )}
      </div>
    </div>
  );
}
