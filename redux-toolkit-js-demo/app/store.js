const configureStore = require('@reduxjs/toolkit').configureStore;
const journalReducer = require('./features/journals/journalSlice');
const bookReducer = require('./features/books/booksSlice');
const userReducer = require('./features/users/usersSlice');

const createLogger = require('redux-logger').createLogger;
const logger = createLogger();

const store = configureStore({
  reducer: {
    journals: journalReducer,
    books: bookReducer,
    users: userReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

module.exports = store;
