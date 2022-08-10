import ExpenseDisplay from "./Components/ExpenseDisplay";
import NewExpense from "./Components/NewExpense/NewExpense";


function App() {


  return (
    <div className="expenses">
      <NewExpense/>
      <ExpenseDisplay></ExpenseDisplay>

    </div>
  );
}

export default App;
