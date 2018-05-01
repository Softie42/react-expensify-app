import React from 'react';
import { shallow } from 'enzyme';
import { AddExpensePage } from '../../components/AddExpensePage';
import expenses from '../fixtures/expenses';

// declare some let variables as undefined
let addExpense, history, wrapper;

// set these variables up
beforeEach(() => {
  addExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(<AddExpensePage addExpense={addExpense} history={history} />);
});

// after each test set them to undefined
afterEach(() => {
  addExpense = undefined;
  history = undefined;
  wrapper = undefined;
});

// test('', () => {});

test('AddExpensePage: Should render AddExpensePage correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('AddExpensePage: Should handle onSubmit', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(addExpense).toHaveBeenLastCalledWith(expenses[1]);
});

