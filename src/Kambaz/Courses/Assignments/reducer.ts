import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  assignments: assignments, 
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
  
    addAssignment: (state, { payload: assignment }) => {
      const newAssignment = {
        _id: uuidv4(),
        title: assignment.title,
        description: assignment.description,
        course: assignment.course,
        dueDate: assignment.dueDate,
        points: assignment.points || 100,
        availableFrom: assignment.availableFrom,
        availableTo: assignment.availableTo,
      };
      state.assignments.push(newAssignment);
    },

    deleteAssignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.filter(
        (assignment) => assignment._id !== assignmentId
      );
    },

    updateAssignment: (state, { payload: updatedAssignment }) => {
      state.assignments = state.assignments.map((assignment) =>
        assignment._id === updatedAssignment._id ? updatedAssignment : assignment
      );
    },

    editAssignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.map((assignment) =>
        assignment._id === assignmentId
          ? { ...assignment, editing: true }
          : assignment
      );
    },
  },
});

export const {
  addAssignment,
  deleteAssignment,
  updateAssignment,
  editAssignment,
} = assignmentsSlice.actions;

export default assignmentsSlice.reducer;