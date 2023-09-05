import './ExpenseItemDate.css';
const ExpenseItemDate = (props) => {
  const month = props.date.toLocaleString('en-Us', { month: 'long' });
  const day = props.date.toLocaleString('en-Us', { day: '2-digit' });
  const year = props.date.getFullYear();
  return (
    <div className='expense-date'>
      <div className='expense-date__month'>{year}</div>
      <div className='expense-date__year'>{month}</div>
      <div className='expense-date__day'>{day}</div>
    </div>
  );
};
export default ExpenseItemDate;

//in the app. js file we had an expenses array with a date , we passed  on all this date via props to the expenseItem.js file via props
//after getting this expenses data , it had a date we wanted to format in a different way
//i passed on this date via props to the ExpensesItemdate .js file
