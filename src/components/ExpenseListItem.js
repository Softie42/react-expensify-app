import React from'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

// This file no longer needs to destructure dispatch from the expense props passed in

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

const ExpenseListItem = ({id, description, amount, createdAt}) =>
(
  <Link className="list-item" to={`/edit/${id}`}>
    <div>
      <h3 className="list-item__title">{description}</h3>
      <span className="list-item__sub-title">
        {moment(createdAt).format('Do MMMM YYYY')}
      </span>
    </div>
    <h3 className="list-item__data">
      {numeral(amount / 100).format('$0,0.00')}
    </h3>
  </Link>
);

export default ExpenseListItem; 
