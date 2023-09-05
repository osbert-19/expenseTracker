import Card from './Card';
import ExpensesFilter from './ExpenseFilter';
import './Expenses.css';
import { useState } from 'react';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.items.filter((returnedItems) => {
    return returnedItems.date.getFullYear().toString() === filteredYear;
  });
  // let expesenseContent = <p>No Expenses Found.</p>;
  // if (filteredExpenses.length > 0) {
  //   expesenseContent = filteredExpenses.map((item) => (
  //     <ExpenseItem
  //       key={item.id}
  //       title={item.title}
  //       amount={item.amount}
  //       date={item.date}
  //     />
  //   ));
  // }

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          onChangeFilterYear={filterChangeHandler}
          onfirstFilteredYear={filteredYear}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
