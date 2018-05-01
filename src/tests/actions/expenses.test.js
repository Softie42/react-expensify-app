import {addExpense, editExpense, removeExpense} from '../../actions/expenses';
import moment from 'moment';

test('Should set up remove expense action object', () => {
  const action = removeExpense({id : '123abc'});
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  });
});

test('Should set up edit expense action object', () => {
  const action = editExpense('123abc', 
                 {description: 'Bill', 
                  amount: 1209, 
                  createdAt: 1000, 
                  note : 'a note'});
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123abc',     
    updates:
    { amount: 1209,
      createdAt: 1000,
      description: 'Bill', 
      note : 'a note'
    }
  });
});

test('Should set up add expense action object with provided values', () => {
  const expenseData = {
    description: 'Rent',
    amount: 109500,
    createdAt: 1000,
    note: 'This was last month\'s rent'
  };

  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
    ...expenseData,
    id: expect.any(String)
    }
  });
});

test('Should set up add expense action object with default values', () => {
  const action = addExpense();
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      amount: 0,
      createdAt: 0,
      description: '',
      note: ''
    }
  });
});
