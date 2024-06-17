import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./loginSlice";
import coursesReducer from "./CoursesSlice";
import assignmentsReducer from "./assignmentsSlice";
import examsReducer from "./examsSlice";
import lecturesReducer from "./lecturesSlice";
import questionsReducer from "./createQuestionsSlice";
import examReducer from "./examSlice";
export default configureStore({
  reducer: {
    login: loginReducer,
    courses: coursesReducer,
    assignments: assignmentsReducer,
    exams: examsReducer,
    lectures: lecturesReducer,
    questions: questionsReducer,
    exam: examReducer,
  },
});
