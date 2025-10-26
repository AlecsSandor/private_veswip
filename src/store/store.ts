// src/app/store.ts
import { configureStore } from "@reduxjs/toolkit";
import uiReducer from './features/ui/uiSlice';

//import dashboardReducer from "../features/dashboard/dashboardSlice";

export const store = configureStore({
  reducer: {
     ui: uiReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // if you put tokens in non-serializable places, adjust rules
        ignoredActions: [],
        ignoredPaths: [],
      },
    }),
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
//export type AppDispatch = typeof store.dispatch;
export default store;
