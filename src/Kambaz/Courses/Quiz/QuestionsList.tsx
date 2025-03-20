import { useState } from "react";
import QuestionItem from "./QuestionItem";
import { Button } from "react-bootstrap";

const QUESTION_TYPES = {
  MCQ: "Multiple Choice",
  TRUE_FALSE: "True/False",
  FILL_BLANK: "Fill in the Blank",
};

export default function QuestionsList() {
  const [questions, _setQuestions] = useState([1,2,3]);

  return (
    <div>
      {questions.map(( _ ) => (
        <QuestionItem QUESTION_TYPES={QUESTION_TYPES} />
      ))}
      <Button className="mt-3">Add Question</Button>
    </div>
  );
}
