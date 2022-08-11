import ExpenseDisplay from "./Components/ExpenseDisplay";
import NewExpense from "./Components/NewExpense/NewExpense";


function App() {

const addExpenseHandler = () => {
  console.log('In App.js');
  console.log();
};
  return (
    <div className="expenses">
      <NewExpense onAddExpense={addExpenseHandler}/>
      <ExpenseDisplay items={}></ExpenseDisplay>

    </div>
  );
}

export default App;
