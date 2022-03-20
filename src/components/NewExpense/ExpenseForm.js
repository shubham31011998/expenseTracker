import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');


  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(Math.floor(event.target.value));

  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    console.log('event.target.value', typeof(event.target.value))
    console.log('event.target.value',event.target.value)

  };

  const submitHandler = (event) => {
    event.preventDefault();
    const titleLength = enteredTitle.trim().length;
    const amountLength = enteredAmount.length;
    const datelength = enteredDate.trim().length;
    console.log('enteredDate', datelength)


    if (titleLength === 0 || amountLength === 0 || datelength === 0) {

    } else {
      const expenseData = {
        title: enteredTitle,
        amount: enteredAmount,
        date: new Date(enteredDate),
      };

      props.onSaveExpenseData(expenseData);
      setEnteredTitle('');
      setEnteredAmount('');
      setEnteredDate('');
    }

  };

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input
            type='text'
            value={enteredTitle}
            onChange={titleChangeHandler}
            required
          />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            min='1'
            step='1'
            value={enteredAmount}
            onChange={amountChangeHandler}
            required
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            min='2019-01-01'
            max='2022-12-31'
            value={enteredDate}
            onChange={dateChangeHandler}
            required
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type='submit'>Add Expense</button>
      </div>
      <div className='validations'>
        <ul>
          <li><span className={enteredTitle.trim().length>0 ? "Text_Done" : "Text_Pending"}>{enteredTitle.trim().length>0 ? "Done" : "Pending"}</span> - Enter Expense Title</li>
          <li><span className={enteredAmount.value>0 ? "Text_Done" : "Text_Pending"}>{enteredAmount.value>0 ? "Done" : "Pending"}</span> - Enter Expense Amount</li>
          <li><span className={enteredDate.trim().length>0  ? "Text_Done" : "Text_Pending"}>{enteredDate.trim().length>0  ? "Done" : "Pending"}</span> - Select Expense Date</li>
        </ul>
      </div>
    </form>
  );
};

export default ExpenseForm;
