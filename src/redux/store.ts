import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice";
import logger from "redux-logger";
// import CustomLogger from "./middlewares/CustomLogger";
export const store = configureStore({
  reducer: {
    //adding slices
    counter: counterReducer, // name of state => counter
  },
  // MIDDLEWARES
  // npm i redux-logger
  // npm i @types/redux-logger
  // using  logger package to console.log state/actoin infos.
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),

  // using custom logger
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(CustomLogger),
  // devTools: false, // for production
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

// bts redux handles state immutabilty for refference type data by the help of Imeer.
// redux - local state manage kore
// rtk query - async state( depended on db), manage kore, gives us hooks to crud async data just like tanstack query.
