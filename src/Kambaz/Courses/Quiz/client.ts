import axios from "axios";

const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
const QUIZZES_API = `${REMOTE_SERVER}/api/quizzes`;

export const findQuizzesForCourse = async (courseId: string) => {
  const response = await axios.get(`${REMOTE_SERVER}/api/courses/${courseId}/quizzes`);
  return response.data;
};

export const createQuiz = async (quiz: any) => {
  const response = await axios.post(`${QUIZZES_API}`, quiz);
  return response.data;
};

export const deleteQuiz = async (quizId: string) => {
  const response = await axios.delete(`${QUIZZES_API}/${quizId}`);
  return response.data;
};

export const updateQuiz = async (quiz: any) => {
  const response = await axios.put(`${QUIZZES_API}/${quiz._id}`, quiz);
  return response.data;
};

export const findQuizById = async (quizId: string) => {
  const response = await axios.get(`${QUIZZES_API}/${quizId}`);
  return response.data;
};

export const createQuizSubmission = async (submission: any) => {
  const response = await axios.post(`${REMOTE_SERVER}/api/quiz-submissions`, submission);
  return response.data;
}

export const getStudentSubmissionsforQuiz = async (quizId: any, studentId: any) => {
  const response = await axios.get(`${REMOTE_SERVER}/api/quiz-submissions/quiz/${quizId}/student/${studentId}`);
  return response.data;
}