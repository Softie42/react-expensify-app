import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import { EditExpensePage } from '../../components/EditExpensePage';

// declare some let variables as undefined
let startEditExpense, startRemoveExpense, history, wrapper;

// set these variables up
beforeEach(() => {
  startEditExpense = jest.fn(); 
  startRemoveExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(<EditExpensePage 
    startEditExpense={startEditExpense}
    startRemoveExpense={startRemoveExpense} 
    history={history}
    expense={expenses[2]}
  />)
});

// after each test set them to undefined
afterEach(() => {
  startEditExpense = undefined;
  startRemoveExpense = undefined;
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
  expect(startEditExpense).toHaveBeenLastCalledWith(expenses[2].id, expenses[2]);
});

test('EditExpensePage: Should handle startRemoveExpense', () => {
  wrapper.find('button').simulate('click');
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(startRemoveExpense).toHaveBeenLastCalledWith({ id: expenses[2].id });
});

