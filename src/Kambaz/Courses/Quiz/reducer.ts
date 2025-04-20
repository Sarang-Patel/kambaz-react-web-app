import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  quizzes: [] as any,
};

const quizzesSlice = createSlice({
  name: "quizzes",
  initialState,
  reducers: {
    setQuizzes: (state, action) => {
      state.quizzes = action.payload;
    },

    addQuiz: (state, { payload: quiz }) => {
      const newQuiz = {
        _id: uuidv4(),
        quizTitle: quiz.quizTitle,
        quizType: quiz.quizType,
        points: quiz.points || 100,
        assignmentGroup: quiz.assignmentGroup,
        shuffleAnswers: quiz.shuffleAnswers,
        timeLimit: quiz.timeLimit,
        multipleAttempts: quiz.multipleAttempts,
        maxAttempts: quiz.maxAttempts,
        showCorrectAnswers: quiz.showCorrectAnswers,
        accessCode: quiz.accessCode,
        oneQuestionAtATime: quiz.oneQuestionAtATime,
        webcamRequired: quiz.webcamRequired,
        lockQuestionsAfterAnswering: quiz.lockQuestionsAfterAnswering,
        dueDate: quiz.dueDate,
        availableDate: quiz.availableDate,
        untilDate: quiz.untilDate,
        course: quiz.course,
        createdBy: quiz.createdBy,
        questions: quiz.questions || [],
      };
      state.quizzes = [...state.quizzes, newQuiz] as any;
    },

    deleteQuiz: (state, { payload: quizId }) => {
      state.quizzes = state.quizzes.filter((quiz: any) => quiz._id !== quizId);
    },

    updateQuiz: (state, { payload: updatedQuiz }) => {
      state.quizzes = state.quizzes.map((quiz: any) =>
        quiz._id === updatedQuiz._id ? updatedQuiz : quiz
      );
    },

    editQuiz: (state, { payload: quizId }) => {
      state.quizzes = state.quizzes.map((quiz: any) =>
        quiz._id === quizId ? { ...quiz, editing: true } : quiz
      );
    },
  },
});

export const {
  setQuizzes,
  addQuiz,
  deleteQuiz,
  updateQuiz,
  editQuiz,
} = quizzesSlice.actions;

export default quizzesSlice.reducer;
