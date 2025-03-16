import { useState } from "react";
import { Button } from "react-bootstrap";
import MCQ from "./Question types/Mcq";
import TrueFalse from "./Question types/TrueFalse";
import FillBlank from "./Question types/FillBlank";

export default function QuestionItem({ QUESTION_TYPES }: any) {
  const [questiontype, setQuestiontype] = useState(QUESTION_TYPES.MCQ);

  const handleTypeChange = (e: any) => {
    setQuestiontype(e.target.value);
  };

  return (
    <div className="question-item">
      <div className="question-item-top d-flex justify-content-between">
        <div className="question-tem-meta-left d-flex gap-2">
          <input type="text" placeholder="Question title" className="px-1" />
          <select
            className="form-select"
            style={{
              maxWidth: "250px",
              border: "1px solid gray",
              borderRadius: 0,
            }}
            value={questiontype}
            onChange={handleTypeChange}
          >
            <option value={QUESTION_TYPES.MCQ}>Multiple Choice</option>
            <option value={QUESTION_TYPES.TRUE_FALSE}>True/False</option>
            <option value={QUESTION_TYPES.FILL_BLANK}>
              Fill in the blanks
            </option>
          </select>
        </div>
        <input type="text" placeholder="Points" className="px-1" />
      </div>
      <hr />
      {questiontype === QUESTION_TYPES.MCQ && <MCQ />}
      {questiontype === QUESTION_TYPES.TRUE_FALSE && <TrueFalse />}
      {questiontype === QUESTION_TYPES.FILL_BLANK && <FillBlank />}

      <Button variant="danger" style={{ borderRadius: 0 }}>
        Delete
      </Button>
    </div>
  );
}
