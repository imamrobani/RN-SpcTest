import {configureStore} from '@reduxjs/toolkit';

// slice reducer
import globalReducer from './slice/global/globalSlice';
import serviceReducer from './slice/service/serviceSlice';

export const store = configureStore({
  reducer: {
    globalReducer,
    serviceReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
