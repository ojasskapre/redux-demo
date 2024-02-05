const { journalActions } = require('../journals/journalSlice');

const createSlice = require('@reduxjs/toolkit').createSlice;

const initialState = {
  inStock: 100,
};

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    getBook: (state) => {
      state.inStock -= 1;
    },
    returnBook: (state) => {
      state.inStock += 1;
    },
    restockBook: (state, action) => {
      state.inStock += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(journalActions.getJournal, (state) => {
      state.inStock--;
    });
  },
});

module.exports = bookSlice.reducer;
module.exports.bookActions = bookSlice.actions;
