import React from 'react';

import './ExpenseDate.css';

const ExpenseDate = (props) => {
  const month = `${props.date}`.slice(5, 7);
  const day = `${props.date}`.slice(8, 10);
  const year = `${props.date}`.slice(0, 4);

  return (
    <div className='expense-date'>
      <div className='expense-date__month'>{month}</div>
      <div className='expense-date__year'>{year}</div>
      <div className='expense-date__day'>{day}</div>
    </div>
  );
};

export default ExpenseDate;
