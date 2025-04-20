import { useState, useEffect } from "react";
import MCQ from "./Question types/Mcq";
import TrueFalse from "./Question types/TrueFalse";
import FillBlank from "./Question types/FillBlank";
import { Button } from "react-bootstrap";

export default function QuestionItem({
  question,
  QUESTION_TYPES,
  updateQuestion,
  deleteQuestion,
}: any) {
  const [localQuestion, setLocalQuestion] = useState(question);

  useEffect(() => {
    updateQuestion(localQuestion);
  }, [localQuestion]);

  const handleTypeChange = (e: any) => {
    setLocalQuestion({
      ...localQuestion,
      type: e.target.value,
      options: [],
      correctAnswer: null,
    });
  };

  const handleTitleChange = (e: any) => {
    setLocalQuestion({ ...localQuestion, title: e.target.value });
  };

  const handlePointsChange = (e: any) => {
    setLocalQuestion({ ...localQuestion, points: Number(e.target.value) });
  };

  const [isediting, setIsEditing] = useState(true);

  const handleEdit = () => {
    setIsEditing(!isediting);
  };

  return (
    <div className="question-item">
      <div className="question-item-top d-flex justify-content-between">
        <div className="question-tem-meta-left d-flex gap-2">
          <input
            type="text"
            placeholder="Question title"
            className="px-1"
            value={localQuestion.title}
            onChange={handleTitleChange}
            disabled={isediting}
          />
          <select
            className="form-select"
            style={{
              maxWidth: "250px",
              border: "1px solid gray",
              borderRadius: 0,
            }}
            value={localQuestion.type}
            onChange={handleTypeChange}
            disabled={isediting}
          >
            <option value={QUESTION_TYPES.MCQ}>Multiple Choice</option>
            <option value={QUESTION_TYPES.TRUE_FALSE}>True/False</option>
            <option value={QUESTION_TYPES.FILL_BLANK}>
              Fill in the blanks
            </option>
          </select>
        </div>
        <input
          type="number"
          placeholder="Points"
          className="px-1"
          value={localQuestion.points}
          onChange={handlePointsChange}
          disabled={isediting}
        />
      </div>
      <hr />

      {localQuestion.type === QUESTION_TYPES.MCQ && (
        <MCQ
          question={localQuestion}
          setQuestion={setLocalQuestion}
          isediting={isediting}
        />
      )}
      {localQuestion.type === QUESTION_TYPES.TRUE_FALSE && (
        <TrueFalse
          question={localQuestion}
          setQuestion={setLocalQuestion}
          isediting={isediting}
        />
      )}
      {localQuestion.type === QUESTION_TYPES.FILL_BLANK && (
        <FillBlank
          question={localQuestion}
          setQuestion={setLocalQuestion}
          isediting={isediting}
        />
      )}

      <Button
        variant={isediting ? "warning" : "success"}
        className="me-3"
        style={{ borderRadius: 0 }}
        onClick={handleEdit}
        
      >
        {isediting ? "Edit" : "Save"}
      </Button>

      <Button
        variant="danger"
        style={{ borderRadius: 0 }}
        onClick={() => deleteQuestion(localQuestion._id)}
      >
        Delete
      </Button>
    </div>
  );
}
