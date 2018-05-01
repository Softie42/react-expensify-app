import React from'react';
import { Link } from 'react-router-dom';

// This file no longer needs todestructure dispatch from the expense props passed in

const ExpenseListItem = ({id, description, amount, createdAt}) =>
(
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{description}</h3>
    </Link>
    <p>${amount} - {createdAt} </p>
  </div>
);

export default ExpenseListItem; 
