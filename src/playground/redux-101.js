import { createStore } from 'redux';

// Action generators
// const add = ({a, b}, c) => {
//   return a + b + c;
// };

// console.log(add({a: 1, b:12}, 100));

// const incrementCount = (payload = {}) => ({
//   type: 'INCREMENT',
//   incrementBy: typeof payload.incrementBy === 'number' ? payloadIncrementBy : 1
// });

const incrementCount = ({ incrementBy = 1} = {}) => ({
  type: 'INCREMENT',
  incrementBy
});

const decrementCount = ({ decrementBy = 1} = {}) => ({
  type: 'DECREMENT',
  decrementBy
});

const resetCount = () => ({
  type: 'RESET'
});

const setCount = ({ setTo } = {}) => ({
  type: 'SET',
  setTo
});

// Reducers
// 1. Reducers are pure functions
// 2. Never change state or action

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type)
  {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      };

    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
      };

    case 'RESET':
      return {
        count: 0
      };

    // This could set the count to 'blubber' which is wrong
    case 'SET':
    return {
      count: action.setTo
    };      
      
    // This will not set the count to 'blubber'
    case 'NSET':
      let ncount = state.count;
      if (typeof action.ncount === 'number')
      {
        ncount = action.ncount;
      }
      return {
        count: ncount
    };

    default:  
      return state;
  }
};

const store = createStore(countReducer);

 const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
 });
 

// Actions - act on an object that gets sent to the store
// I'd like to increment the count, decrement, reset
store.dispatch(incrementCount( {incrementBy: 5} ));

store.dispatch(incrementCount());

// I'd like to reset the count to zero
store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 10}));

store.dispatch(setCount({ setTo: 200}));




