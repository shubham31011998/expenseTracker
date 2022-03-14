import React, { useEffect, useState } from 'react';

import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

const ExpensesList = (props) => {
  const [showitems, setShowitems] = useState([]);
  console.log('showitems', showitems)
  const [filterData, setfilterData] = useState('');


  useEffect(() => {
    setShowitems(props.items);
  }, [props.items])


  useEffect(() => {
    const filteredData = props.items.filter((expense) => expense.title.toLowerCase().includes(filterData.toLowerCase()));
    console.log('filteredData', filteredData)
    setShowitems(filteredData);
  }, [filterData])


  if (props.items.length === 0) {
    return <h2 className='expenses-list__fallback'>Found no expenses.</h2>;
  }



  return (
    <>
      <div className='new-expense__control' style={{ margin: "16px 0 0 0 " }}>
        <input type="search" placeholder="Search by title" onChange={(e) => setfilterData(e.target.value)} />
      </div>
      <ul className='expenses-list' id="expense_list">
        {showitems.length > 0 ? showitems.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            id={expense.id}
            deleteExpenseDataHandler={props.deleteExpenseDataHandler}
          />
        ))
          :
          <h2 className='expenses-list__fallback'>Found no expenses.</h2>
        }
      </ul>
    </>
  );
};

export default ExpensesList;
