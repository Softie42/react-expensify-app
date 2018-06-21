import React from'react';
import {connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';


// load a locale
if (numeral.locales['uk'] === undefined) {
  numeral.register('locale', 'uk', {
    delimiters: {
        thousands: ',',
        decimal: '.'
    },
    abbreviations: {
        thousand: 'k',
        million: 'm',
        billion: 'b',
        trillion: 't'
    },
    currency: {
        symbol: '£'
    }
  });
}

  // Choose the new uk locale
numeral.locale('uk');

export const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
  const expenseWord = expenseCount <= 1 ? 'expense' : 'expenses'
  const formmattedExpenseTotal = numeral(expensesTotal / 100).format('$0,0.00');

  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">Viewing <span>{expenseCount}</span> {expenseWord} totalling <span>{formmattedExpenseTotal}</span></h1>
        <div className="page-header__actions">
          <Link className="button-layout" to="/create">Add Expense</Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters);
  return {
    expenseCount: visibleExpenses.length,
    expensesTotal: selectExpensesTotal(visibleExpenses)
  }; 
};

export default connect(mapStateToProps)(ExpensesSummary);