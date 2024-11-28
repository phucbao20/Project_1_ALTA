import { configureStore } from '@reduxjs/toolkit'
import flimReducer from './redux-toolkit/flim.slice'
import { useDispatch } from 'react-redux'
// ...

export const store = configureStore({
  reducer: {
    flim : flimReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()