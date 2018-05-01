import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from './routers/AppRouter';
import { addExpense, removeExpense, editExpense } from './actions/expenses';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from './actions/filters';
import configureStore from './store/configureStore';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import moment from 'moment';

const store = configureStore();

// store.subscribe(() => {
//   const state = store.getState();
//   const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
//   console.log(visibleExpenses);
// });

store.dispatch(addExpense({ description: 'Water bill', amount: 4500, createdAt: moment('02/04/2018').valueOf() }));
store.dispatch(addExpense({ description: 'Gas bill', createdAt: -1000 }));
store.dispatch(addExpense({ description: 'Rent', amount: 109500 }));


// setTimeout(() => {
//   store.dispatch(setTextFilter('bill'));
// }, 3000);


const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

// ReactDOM.render(<AppRouter />, document.getElementById('app'));

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
ReactDOM.render(jsx, document.getElementById('app'));
