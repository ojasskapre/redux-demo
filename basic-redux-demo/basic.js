const redux = require('redux');
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;

const initialBookState = {
  inStock: 100,
  items: [
    { id: 1, title: 'JavaScript: The Good Parts', stock: 30 },
    { id: 2, title: "You Don't Know JS", stock: 70 },
  ],
};

const initalJournalState = {
  inStock: 50,
  items: [
    { id: 1, title: 'Journal of Computer Science', stock: 25 },
    { id: 2, title: 'Journal of Modern Programming', stock: 25 },
  ],
};

// action types
const GET_BOOK = 'GET_BOOK';
const RETURN_BOOK = 'RETURN_BOOK';
const RESTOCK_BOOK = 'RESTOCK_BOOK';

const GET_JOURNAL = 'GET_JOURNAL';
const RETURN_JOURNAL = 'RETURN_JOURNAL';
const RESTOCK_JOURNAL = 'RESTOCK_JOURNAL';

// action creators
const getBook = () => {
  return {
    type: GET_BOOK,
  };
};

const returnBook = () => {
  return {
    type: RETURN_BOOK,
  };
};

const restockBook = (amount = 1) => {
  return {
    type: RESTOCK_BOOK,
    payload: amount,
  };
};

const getJournal = () => {
  return {
    type: GET_JOURNAL,
  };
};

const returnJournal = () => {
  return {
    type: RETURN_JOURNAL,
  };
};

const restockJournal = (amount = 1) => {
  return {
    type: RESTOCK_JOURNAL,
    payload: amount,
  };
};

// reducers
const bookReducer = (state = initialBookState, action) => {
  switch (action.type) {
    case GET_BOOK:
      return {
        ...state,
        inStock: state.inStock - 1,
      };
    case RETURN_BOOK:
      return {
        ...state,
        inStock: state.inStock + 1,
      };
    case RESTOCK_BOOK:
      return {
        ...state,
        inStock: state.inStock + action.payload,
      };
    default:
      return state;
  }
};

const journalReducer = (state = initalJournalState, action) => {
  switch (action.type) {
    case GET_JOURNAL:
      return {
        ...state,
        inStock: state.inStock - 1,
      };
    case RETURN_JOURNAL:
      return {
        ...state,
        inStock: state.inStock + 1,
      };
    case RESTOCK_JOURNAL:
      return {
        ...state,
        inStock: state.inStock + action.payload,
      };
    default:
      return state;
  }
};

// creating store
const rootReducer = combineReducers({
  book: bookReducer,
  journal: journalReducer,
});

const store = createStore(rootReducer);

const unsubscribe = store.subscribe(() => {
  console.log('State updated:', store.getState());
});

console.log('Initial State:', store.getState());
store.dispatch(getBook());
store.dispatch(getBook());
store.dispatch(getBook());
store.dispatch(returnBook());
store.dispatch(returnBook());
store.dispatch(restockBook(20));
store.dispatch(getJournal());
store.dispatch(getJournal());
store.dispatch(getJournal());
store.dispatch(returnJournal());
store.dispatch(returnJournal());
store.dispatch(restockJournal(20));

unsubscribe();
