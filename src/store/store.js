import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
/* import dashboardReducer from '../features/dashboard/dashboardSlice';
import projectReducer from '../features/projects/ProjectSlice';
import taskReducer from '../features/tasks/TaskSlice';
 */

export const store = configureStore({
  reducer: {
    auth: authReducer,
   
  },
});
/*  dashboard: dashboardReducer,
    projects: projectReducer,
    tasks: taskReducer, */
export default store;
