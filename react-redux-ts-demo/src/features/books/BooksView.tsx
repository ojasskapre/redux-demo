// import { useSelector, useDispatch } from 'react-redux';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getBook, returnBook, restockBook } from './booksSlice';
import { useState } from 'react';

export const BooksView = () => {
  const [value, setValue] = useState(1);
  const count = useAppSelector((state) => state.books.inStock);
  const dispatch = useAppDispatch();
  return (
    <>
      <h3>Books Count: {count}</h3>
      <button
        onClick={() => {
          dispatch(getBook());
        }}
      >
        Get Book
      </button>
      <button
        onClick={() => {
          dispatch(returnBook());
        }}
      >
        Return Book
      </button>
      <br />
      <input
        value={value}
        type="number"
        onChange={(e) => {
          setValue(parseInt(e.target.value));
        }}
      />
      <button
        onClick={() => {
          dispatch(restockBook(value));
        }}
      >
        Restock Book
      </button>
    </>
  );
};
