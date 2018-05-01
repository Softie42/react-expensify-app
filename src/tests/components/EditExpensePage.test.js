import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import { EditExpensePage } from '../../components/EditExpensePage';

// declare some let variables as undefined
let editExpense, removeExpense, history, wrapper;

// set these variables up
beforeEach(() => {
  editExpense = jest.fn(); 
  removeExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(<EditExpensePage 
    editExpense={editExpense}
    removeExpense={removeExpense} 
    history={history}
    expense={expenses[2]}
  />)
});

// after each test set them to undefined
afterEach(() => {
  editExpense = undefined;
  removeExpense = undefined;
  history = undefined;
  wrapper = undefined;
});

// test('', () => {});

test('EditExpensePage: Should render EditExpensePage correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('EditExpensePage: Should handle editExpense', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(editExpense).toHaveBeenLastCalledWith(expenses[2].id, expenses[2]);
});

test('EditExpensePage: Should handle removeExpense', () => {
  wrapper.find('button').simulate('click');
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(removeExpense).toHaveBeenLastCalledWith({ id: expenses[2].id });
});

