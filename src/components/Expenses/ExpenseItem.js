import React from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  // console.log('props', props)
  const {deleteExpenseDataHandler} = props;
  return (
    <li>
      <Card className='expense-item' >
        <ExpenseDate date={props.date} />
        <div className='expense-item__description'>
          <h2>{props.title}</h2>
          <div className='expense-item__price'>{props.amount} &#x20B9;</div>
          <button onClick={()=>deleteExpenseDataHandler(props.id)}>Delete</button>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
