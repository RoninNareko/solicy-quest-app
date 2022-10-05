import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk';

import reducer from "./reducers/rootReducer";

const preloadedState = {};
const store = createStore(reducer, preloadedState, 
    composeWithDevTools(applyMiddleware(thunk)));

export type RootState = ReturnType<typeof store.getState>;

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

store.subscribe(() => console.info(store.getState()));

export default store;
