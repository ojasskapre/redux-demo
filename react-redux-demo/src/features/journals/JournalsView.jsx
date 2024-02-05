import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { getJournal, returnJournal, restockJournal } from './journalsSlice';

export const JournalsView = () => {
  const [value, setValue] = useState(1);
  const count = useSelector((state) => state.journals.inStock);
  const dispatch = useDispatch();
  return (
    <>
      <h3>Journal Count: {count}</h3>
      <button
        onClick={() => {
          dispatch(getJournal());
        }}
      >
        Get Journal
      </button>
      <button
        onClick={() => {
          dispatch(returnJournal());
        }}
      >
        Return Journal
      </button>
      <br />
      <input
        value={value}
        type="number"
        onChange={(e) => setValue(parseInt(e.target.value))}
      />
      <button
        onClick={() => {
          dispatch(restockJournal(value));
        }}
      >
        Restock Journal
      </button>
    </>
  );
};
