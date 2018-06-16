import uuid from 'uuid';
import database from '../firebase/firebase';

// component calls action generator
// action generator returns object
// component dispatches object
// redux store changes 

// Asyncronous actions:
// component calls action generator
// action generator returns function
// component dispatches function (?)
// function runs (has the ability to dispatch other actions and do whatever it wants) 

// ADD EXPENSE
export const addExpense = (expense) => ({
  type: 'ADD_EXPENSE',
  expense
});

export const startAddExpense = (expenseData = {}) => {
  return  (dispatch) => {
    const {
      description = '', 
      note = '', 
      amount = 0, 
      createdAt = 0 
    } = expenseData;
    const expense = { description, note, amount, createdAt };

    // Have to return the dispatch here to test the asynchronous methods of the dispatch
    return database.ref('expenses').push(expense).then((ref) => {
      dispatch(addExpense({
        id: ref.key,
        ...expense
      }))
    });
  };
};

// REMOVE EXPENSE
export const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

// EDIT EXPENSE
export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

// SET_EXPENSES
export const setExpenses = (expenses) => ({
  type: 'SET_EXPENSES',
  expenses
});


export const startSetExpenses = () => {
  return (dispatch) => {
    return database.ref('expenses')
    .once('value')
    .then((snapshot) => {
        const expenses = [];

        snapshot.forEach((childSnapshot) => {
          expenses.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          }); 
        });

        dispatch(setExpenses(expenses));
      });
  };
  // const expenses = [];
  // database.ref('expenses')
  // .once('value')
  // .then((snapshot) => {
  //   snapshot.forEach((childSnapshot) => {
  //     expenses.push({
  //       id: childSnapshot.key,
  //       ...childSnapshot.val()
  //     });
  //   });
  //   console.log(expenses);
  // }).then(() => {
  //   return dispatch(setExpenses({
  //           ...expenses
  //         }))
  // }).catch((e) => {
  //   console.log('Error thrown reading expenses from Firebase db.', e);
  // });

};

