export default function TrueFalse({ question, setQuestion, isediting }: any) {
  const handleCorrectAnswerChange = (value: boolean) => {
    setQuestion({
      ...question,
      options: ["True", "False"],
      correctAnswer: value ? 0 : 1,
    });
  };

  const handleQuestionTextChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setQuestion({ ...question, questionText: e.target.value });
  };

  return (
    <div className="truefalse-question mb-3">
      <p>Enter your question. Select either True/False as correct ans.</p>
      <h6>Question:</h6>
      <textarea
        rows={3}
        placeholder="Enter your question here"
        style={{ maxWidth: "500px", width: "100%", border: "1px solid gray" }}
        value={question.questionText}
        onChange={handleQuestionTextChange}
        disabled ={isediting}
      />
      <h6>Answers:</h6>
      <div
        className="d-flex mb-2 mb-3"
        style={{ maxWidth: "500px", width: "100%" }}
      >
        <input
          type="radio"
          id={`true-${question._id}`}
          name={`trueFalse-${question._id}`}
          checked={question.correctAnswer === 0}
          onChange={() => handleCorrectAnswerChange(true)}
          disabled ={isediting}
        />
        <label
          className="form-control ms-2"
          htmlFor={`true-${question._id}`}
          style={{ border: "1px solid gray" }}
        >
          True
        </label>
      </div>
      <div
        className="d-flex mb-2 mb-3"
        style={{ maxWidth: "500px", width: "100%" }}
      >
        <input
          type="radio"
          id={`false-${question._id}`}
          name={`trueFalse-${question._id}`}
          checked={question.correctAnswer === 1}
          onChange={() => handleCorrectAnswerChange(false)}
          disabled ={isediting}
        />
        <label
        htmlFor={`false-${question._id}`}
          className="form-control ms-2"
          style={{ border: "1px solid gray" }}
        >
          False
        </label>
      </div>
    </div>
  );
}
