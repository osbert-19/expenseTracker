import ExpenseForm from './ExpenseForm';
import './NewExpense.css';
import { useState } from 'react';
const NewExpense = (props) => {
  const [isEditting, setisEditting] = useState(false);
  const saveExpenseHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setisEditting(false);
  };
  const startEdittingHandler = () => {
    setisEditting(true);
  };
  const stopEdittingHandler = () => {
    setisEditting(false);
  };

  return (
    <div className='new-expense'>
      {!isEditting && (
        <button onClick={startEdittingHandler}> Add New Expense</button>
      )}
      {isEditting && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseHandler}
          onCancel={stopEdittingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
