import { createSlice } from "@reduxjs/toolkit";

interface Enrollment {
  user: string;
  course: string;
}

const initialState: { enrollments: Enrollment[] } = {
  enrollments: [],
};

const enrollmentsSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    enrollCourse: (state, action) => {
      const { user, course } = action.payload;
      if (!state.enrollments.some((e) => e.user === user && e.course === course)) {
        state.enrollments.push({ user, course });
      }
    },
    unenrollCourse: (state, action) => {
      state.enrollments = state.enrollments.filter(
        (e) => !(e.user === action.payload.user && e.course === action.payload.course)
      );
    },
    setEnrollments: (state, action) => {
      state.enrollments = action.payload;
    },
  },
});

export const { enrollCourse, unenrollCourse, setEnrollments } = enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;
