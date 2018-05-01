import React from 'react';
import { shallow } from 'enzyme';
import  ExpenseDashboardPage from '../../components/ExpenseDashboardPage';
import expenses from '../fixtures/expenses';

test('Should render ExpenseDashboardPage with no items', () => {
  const wrapper = shallow(<ExpenseDashboardPage />);
  expect(wrapper).toMatchSnapshot();
});
