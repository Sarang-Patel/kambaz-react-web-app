import QuestionItem from "./QuestionItem";
import { Button } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";

const QUESTION_TYPES = {
  MCQ: "Multiple Choice",
  TRUE_FALSE: "True/False",
  FILL_BLANK: "Fill in the Blank",
};

export default function QuestionsList({ quiz, setQuiz }: any) {
  const handleAddQuestion = () => {
    const newQuestion = {
      _id: uuidv4(),
      title: "",
      questionText: "",
      type: QUESTION_TYPES.MCQ,
      points: 1,
      options: [],
      correctAnswer: null,
    };

    const updatedQuestions = [...quiz.questions, newQuestion];
    setQuiz({ ...quiz, questions: updatedQuestions });
  };

  const updateQuestion = (updatedQuestion: any) => {
    const updatedQuestions = quiz.questions.map((q: any) =>
      q._id === updatedQuestion._id ? updatedQuestion : q
    );
    setQuiz({ ...quiz, questions: updatedQuestions });
  };

  const deleteQuestion = (questionId: string) => {
    const updatedQuestions = quiz.questions.filter((q: any) => q._id !== questionId);
    setQuiz({ ...quiz, questions: updatedQuestions });
  };

  return (
    <div>
      {quiz.questions.map((q: any) => (
        <QuestionItem
          key={q._id}
          question={q}
          QUESTION_TYPES={QUESTION_TYPES}
          updateQuestion={updateQuestion}
          deleteQuestion={deleteQuestion}
        />
      ))}

      <Button onClick={handleAddQuestion} className="mt-3 details-screen-button px-3">
        Add Question
      </Button>
    </div>
  );
}
