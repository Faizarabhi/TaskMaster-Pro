import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
/* import projectReducer from "../features/projects/projectSlice";
import taskReducer from "../features/tasks/taskSlice"; */
import dashboardReducer from "../features/dashboard/dashboardSlice";
import uiReducer from "../features/ui/uiSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    dashboard: dashboardReducer,
    ui: uiReducer,
 
  },
});


