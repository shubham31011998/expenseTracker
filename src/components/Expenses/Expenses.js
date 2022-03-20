import React, { useState, useEffect } from 'react';

import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2021");
  // const [filteredYear, setFilteredYear] = useState("2022");
  

  useEffect(() => {
    const curretYear = new Date().getFullYear().toString();
    setFilteredYear(curretYear);
   }, [])


  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <div className='detail_div'>
          <div className='cardMain'>
            Available<br />
            <h2>12000</h2>
          </div>
          <div className='cardMain'>
            Spent<br />
            <h2>{props.spent}</h2>
          </div>
          <div className='cardMain'>
            Remaining<br />
            <h2>{props.extendedAmount > 0 ? 0 : props.remaining}</h2>
            {props.extendedAmount > 0 && <small>Extended: {props.extendedAmount}</small>}
          </div>
        </div>
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList deleteExpenseDataHandler={props.deleteExpenseDataHandler} items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
