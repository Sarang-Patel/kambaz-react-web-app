import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "./Courses/Modules/reducer";
import accountReducer from "./Account/reducer";
import assignmentReducer from "./Courses/Assignments/reducer";
import coursesReducer from "./Courses/reducer"
import enrollmentsReducer from "./Dashboard/reducer"
import quizzesReducer from "./Courses/Quiz/reducer";
const store = configureStore({
  reducer: {
    modulesReducer,
    accountReducer,
    assignmentReducer,
    coursesReducer,
    enrollmentsReducer,
    quizzesReducer,
  },
});
export default store;