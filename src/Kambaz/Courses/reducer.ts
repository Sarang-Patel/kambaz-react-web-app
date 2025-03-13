import { createSlice } from "@reduxjs/toolkit";
import { courses } from "../Database";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  courses: courses,
};

const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    addCourse: (state, { payload: newCourse }) => {
      const course = {
        ...newCourse,
        _id: uuidv4(),
      };
      console.log(course)
      state.courses.push(course);
    },
    deleteCourse: (state, { payload: courseId }) => {
      state.courses = state.courses.filter((c) => c._id !== courseId);
    },
    updateCourse: (state, { payload: updatedCourse }) => {
      state.courses = state.courses.map((c) =>
        c._id === updatedCourse._id ? updatedCourse : c
      );
    },
  },
});

export const { addCourse, deleteCourse, updateCourse } = coursesSlice.actions;
export default coursesSlice.reducer;
