const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
  id: '1',
  name: 'John Doe',
  address: {
    street: '124 Bay St.',
    city: 'San Francisco',
    state: 'CA',
    country: 'USA',
  },
};

const UPDATE_ADDRESS = 'UPDATE_ADDRESS';

const updateAddress = (addressObj) => {
  return {
    type: UPDATE_ADDRESS,
    payload: addressObj,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_ADDRESS:
      return {
        ...state,
        address: {
          ...state.address,
          ...action.payload,
        },
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

console.log('Initial State: ', store.getState());
store.dispatch(updateAddress({ street: '453 Bay Ave.' }));
store.dispatch(updateAddress({ city: 'Seattle', state: 'WA' }));
console.log('Updated State', store.getState());
