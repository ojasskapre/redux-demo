const { fetchUsers } = require('./app/features/users/usersSlice');
const store = require('./app/store');
const journalActions =
  require('./app/features/journals/journalSlice').journalActions;
const bookActions = require('./app/features/books/booksSlice').bookActions;

console.log('Initial State: ', store.getState());

// const unsubscribe = store.subscribe(() => {
//   console.log('State updated: ', store.getState());
// });

store.dispatch(bookActions.getBook());
store.dispatch(bookActions.getBook());
store.dispatch(bookActions.getBook());
store.dispatch(bookActions.returnBook());
store.dispatch(bookActions.returnBook());
store.dispatch(bookActions.restockBook(20));

store.dispatch(journalActions.getJournal());
store.dispatch(journalActions.getJournal());
store.dispatch(journalActions.getJournal());
store.dispatch(journalActions.returnJournal());
store.dispatch(journalActions.returnJournal());
store.dispatch(journalActions.restockJournal(20));

console.log('\nAsync Actions\n');

store.dispatch(fetchUsers());

// unsubscribe();
