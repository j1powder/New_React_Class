import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const App = () => {
  const expenses = [
    {title: 'Car Insurance' , amount: 289.56, date: new Date(2022, 10, 10)},
    {title: 'House Payment' , amount: 1458.89, date: new Date(2022, 10, 10)},
    {title: 'Car Payment' , amount: 630.27, date: new Date(2022, 10, 10)},
    {title: 'Internet' , amount: 65.28, date: new Date(2022, 10, 10)},

  ];
  const addExpenseHandler = expense => {
    console.log('in app.js');
    console.log(expense);
  };
  
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses items={expenses}></Expenses>
      
    </div>
  );
}

export default App;
