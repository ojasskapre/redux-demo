const createSlice = require('@reduxjs/toolkit').createSlice;

const initialState = {
  inStock: 50,
};

const journalSlice = createSlice({
  name: 'journals',
  initialState,
  reducers: {
    getJournal: (state) => {
      state.inStock -= 1;
    },
    returnJournal: (state) => {
      state.inStock += 1;
    },
    restockJournal: (state, action) => {
      state.inStock += action.payload;
    },
  },
});

module.exports = journalSlice.reducer;
module.exports.journalActions = journalSlice.actions;
