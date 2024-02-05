import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';

type InitialState = {
  inStock: number;
};

const initialState: InitialState = {
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
    restockJournal: (state, action: PayloadAction<number>) => {
      state.inStock += action.payload;
    },
  },
});

export default journalSlice.reducer;
export const { getJournal, returnJournal, restockJournal } =
  journalSlice.actions;
