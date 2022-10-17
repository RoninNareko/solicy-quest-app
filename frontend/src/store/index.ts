import { configureStore } from '@reduxjs/toolkit';

import reducer from "./reducers/rootReducer";

const preloadedState = {};

export const store = configureStore({
  reducer,
  preloadedState,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat()
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

store.subscribe(() => console.info(store.getState()));

export default store;
