import React, { useState, useEffect } from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 1100,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 750, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 500,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 10,
    date: new Date(2022, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  useEffect(() => {
    setExpenses(DUMMY_EXPENSES);
  }, [])
  

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };


  const deleteSpecific =(arr, item)=>{
    console.log('arr, item', arr, item)
    let newArray = [...arr];
    const itemIndex = newArray.findIndex((expenseItem) => expenseItem.id == item);
    console.log('itemIndex', itemIndex)

    //check elemnt is present in array using index
    if(itemIndex > -1){
      newArray.splice(itemIndex, 1)
    }
    return newArray
  }

  const deleteExpenseDataHandler = (key) => {
    const decision = window.confirm("Are you sure ?");
    if(decision){
      //Method:1 using filter
      // const newArray = [];
      // const afterDelete = expenses.filter(item => item.id !== key);
      // setExpenses(afterDelete);
      // console.log('afterDelete', afterDelete)
      
      // Method:2 using splice
      const afterDelete = deleteSpecific(expenses, key);
      setExpenses(afterDelete);
      console.log('afterDelete', afterDelete);
    }
  }

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses deleteExpenseDataHandler={deleteExpenseDataHandler} items={expenses} />
    </div>
  );
};

export default App;
