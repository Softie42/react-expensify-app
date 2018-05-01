import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses'

// This is a presentational component so, as the state changes, 
// the props that are connected to the state change and are immediately rendered
// See timeout in apps.js 
export const ExpenseList = (props) => (
  <div>
    {
      props.expenses.length === 0 ? (
      <p>No expenses</p>
      ) : (
        props.expenses.map((expense) => {
          return <ExpenseListItem key = {expense.id} {...expense} />
        })
      )
    }
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};

export default connect(mapStateToProps)(ExpenseList);



