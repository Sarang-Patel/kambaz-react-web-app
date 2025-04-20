import { Button } from "react-bootstrap";

export default function MCQ({ question, setQuestion, isediting }: any) {
  const handleOptionChange = (index: number, value: string) => {
    const newOptions = [...question.options];
    newOptions[index] = value;
    setQuestion({ ...question, options: newOptions });
  };

  const handleCorrectAnswerChange = (index: number) => {
    setQuestion({ ...question, correctAnswer: index });
  };

  const addOption = () => {
    setQuestion({ ...question, options: [...question.options, ""] });
  };

  const handleQuestionTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setQuestion({ ...question, questionText: e.target.value });
  };
  
  return (
    <div className="mcq-question my-3">
      <p>Enter your question and choices. Select one as the correct ans.</p>
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
      {question.options.map((option: string, index: number) => (
        <div key={index} className="d-flex mb-2 mb-3" style={{ maxWidth: "500px", width: "100%" }}>
          <input
            type="radio"
            checked={question.correctAnswer === index}
            onChange={() => handleCorrectAnswerChange(index)}
          />
          <input
            type="text"
            value={option}
            placeholder="Type option here"
            onChange={(e) => handleOptionChange(index, e.target.value)}
            className="form-control ms-2"
            style={{ border: "1px solid gray" }}
          />
        </div>
      ))}
      <Button variant="secondary" className="details-screen-button px-3" onClick={addOption} style={{ borderRadius: 0 }} disabled ={isediting}>
        Add Option
      </Button>
    </div>
  );
}
