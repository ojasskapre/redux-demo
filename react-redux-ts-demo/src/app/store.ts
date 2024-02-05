import { configureStore } from '@reduxjs/toolkit';
import bookReducer from '../features/books/booksSlice';
import journalReducer from '../features/journals/journalsSlice';
import userReducer from '../features/users/usersSlice';

const store = configureStore({
  reducer: {
    books: bookReducer,
    journals: journalReducer,
    users: userReducer,
  },
});
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
