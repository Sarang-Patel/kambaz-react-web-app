import { Button } from "react-bootstrap";

export default function FillBlank({ question, setQuestion, isediting }: any) {
  const handleAnswerChange = (index: number, value: string) => {
    const updatedOptions = [...question.options];
    updatedOptions[index] = value;
    setQuestion({ ...question, options: updatedOptions });
  };

  const addBlankAnswer = () => {
    setQuestion({ ...question, options: [...question.options, ""] });
  };

  const deleteBlankAnswer = (index: number) => {
    const updatedOptions = question.options.filter((_: any, i: number) => i !== index);
    setQuestion({ ...question, options: updatedOptions });
  };

  const handleQuestionTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setQuestion({ ...question, questionText: e.target.value });
  };

  return (
    <div className="fillblank-question mb-3">
      <p>Enter your question. Add possible correct answers.</p>
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
      {question.options.map((answer: string, index: number) => (
        <div
          key={index}
          className="d-flex mb-2 mb-3"
          style={{ maxWidth: "500px", width: "100%" }}
        >
          <input
            type="text"
            className="form-control"
            style={{ border: "1px solid gray" }}
            value={answer}
            onChange={(e) => handleAnswerChange(index, e.target.value)}
            placeholder="Possible answer"
            disabled ={isediting}
          />
          <Button
            variant="danger"
            size="sm"
            onClick={() => deleteBlankAnswer(index)}
            className="ms-2"
          >
            ✕
          </Button>
        </div>
      ))}

      <Button variant="secondary"className="details-screen-button px-3" onClick={addBlankAnswer} style={{ borderRadius: 0 }}
      disabled ={isediting}>
        Add Answer
      </Button>
    </div>
  );
}
