import getExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('Should calculate ExpensesTotal of 0 if no expenses', () => {
  const result = getExpensesTotal([]);
  expect(result).toBe(0);
});

test('Should calculate ExpensesTotal of a single expense', () => {
    const expense = [expenses[2]];
    const result = getExpensesTotal(expense);
    expect(result).toBe(4500);
  });

test('Should calculate ExpensesTotal with multiple expenses', () => {
    const result = getExpensesTotal(expenses);
    expect(result).toBe(114195);
});