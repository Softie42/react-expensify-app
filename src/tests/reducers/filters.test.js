import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('Should set up filter values', () => {
  const state = filtersReducer(undefined, { type: '@@INIT'});
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  });
});

test('Should set sortBy to amount', () => {
  const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT_FILTER'});
  expect(state.sortBy).toBe('amount');
});

test('Should set sortBy to date', () => {
  const currentState = {
    text: '',
    startDate: undefined,
    endDate: undefined,
    sortBy: 'amount'
  };
  const action = { type: 'SORT_BY_DATE_FILTER'};
  const state = filtersReducer(currentState, action);
  expect(state.sortBy).toBe('date');
});

test('Should set text filter', () => {
  const txt = 'a value';
  const action =  { 
    type: 'SET_TEXT_FILTER', 
    text: txt};
  const state = filtersReducer(undefined, action);
  expect(state.text).toEqual(txt);
});

test('Should set startDate filter', () => {
  const sDate = moment().startOf('month');
  const action = { 
    type: 'SET_START_DATE', 
    startDate: sDate};
  const state = filtersReducer(undefined, action);
  expect(state.startDate).toEqual(sDate);
});

test('Should set endDate filter', () => {
  const eDate = moment().endOf('month');
  const action = { 
    type: 'SET_END_DATE', 
    endDate: eDate
  }
  const state = filtersReducer(undefined, action);
  expect(state.endDate).toBe(eDate);
});