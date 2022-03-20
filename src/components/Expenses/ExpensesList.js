import React, { useEffect, useState } from 'react';

import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

const ExpensesList = (props) => {
  const [showitems, setShowitems] = useState([]);
  console.log('showitems', showitems)
  const [filterData, setfilterData] = useState('');
  const [selectAmount, setSelectAmount] = useState('')



  useEffect(() => {
    setShowitems(props.items);
  }, [props.items])



  useEffect(() => {
    const filteredData = props.items.filter((expense) => expense.title.toLowerCase().includes(filterData.toLowerCase()) || expense.amount == filterData);
    console.log('filteredData', filteredData)
    setShowitems(filteredData);
  }, [filterData])

  useEffect(() => {

    if (selectAmount == 600) {
      const filterByAmount = props.items.filter((expense) => Math.floor(expense.amount) > 500);
      setShowitems(filterByAmount);
    }
    if (selectAmount == 400) {
      const filterByAmount = props.items.filter((expense) => Math.floor(expense.amount) < 500);
      setShowitems(filterByAmount);
    }
    if (selectAmount == 0) {
      // const filterByAmount = showitems.filter((expense) => expense);
      // setShowitems(filterByAmount);

      setShowitems(props.items);
    }

  }, [selectAmount])



  if (props.items.length === 0) {
    return <h2 className='expenses-list__fallback'>Found no expenses.</h2>;
  }



  return (
    <>
      <div className='new-expense__control' style={{ padding: "12px 0", margin: "16px 0 0 0 ", textAlign: "center", border: "4px  solid #fff", borderLeft: "0", borderRight: "0" }}>
        <input type="search" placeholder="Search by title and actual price" onChange={(e) => setfilterData(e.target.value)} />
      </div>
      <div className='expenses-filter'>
        <div className='expenses-filter__control'>
          <label>Filter by Fix Amount</label>
          <div>
            <input type="radio" id="amount1" name="select_Amount" value={600} onChange={(e) => setSelectAmount(e.target.value)} />
            <label for="amount1">{`Amount > 500`}</label>

            &nbsp;&nbsp;&nbsp;
            <input type="radio" id="amount2" name="select_Amount" value={400} onChange={(e) => setSelectAmount(e.target.value)} />
            <label for="amount2">{`Amount < 500`}</label>

            &nbsp;&nbsp;&nbsp;
            <input type="radio" id="amount3" name="select_Amount" value={0} onChange={(e) => setSelectAmount(e.target.value)} defaultChecked="checked" />
            <label for="amount3">{`None`}</label>
          </div>
        </div>
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
