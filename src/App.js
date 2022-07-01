import react, {useState} from 'react';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from './components/NewExpense/NewExpense';

const INITIAL_EXPENSE = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () =>  {

  const [stateVar, setStateFunc] = useState(INITIAL_EXPENSE);

  console.log('app rendered', stateVar)
 
  const addExpenseHandler = (expenseData) => {
    console.log('from app', expenseData)
    // let a = [...stateVar, expenseData]
    setStateFunc(prevExpenses => {
      return [expenseData, ...prevExpenses]
    });
    // console.log(stateVar)
  }


  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={stateVar}/>
    </div>
  );
}

export default App;
