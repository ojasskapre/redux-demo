import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
// import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from './usersSlice';

export const UserView = () => {
  const users = useAppSelector((state) => state.users);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div>
      <h3>List of Users:</h3>
      {users.loading && <div>Loading...</div>}
      {!users.loading && users.error ? <div>Error: {users.error}</div> : null}
      {!users.loading && users.users.length ? (
        <ul>
          {users.users.map((user) => {
            return <li key={user.id}>{user.name}</li>;
          })}
        </ul>
      ) : null}
    </div>
  );
};
