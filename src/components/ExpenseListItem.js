import React from'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

// This file no longer needs to destructure dispatch from the expense props passed in

// load a locale
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

// Choose the new uk locale
numeral.locale('uk');

const ExpenseListItem = ({id, description, amount, createdAt}) =>
(
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{description}</h3>
    </Link>
    <p>
      {numeral(amount / 100).format('$0,0.00')}
       - 
      {moment(createdAt).format('Do MMMM YYYY')} 
    </p>
  </div>
);

export default ExpenseListItem; 
