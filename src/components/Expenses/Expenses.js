import react, {useState} from 'react';
import ExpenseItem from "./ExpenseItem";
import Cards from "../UI/Cards";
import ExpensesFilter from './ExpensesFilter';
import "./Expenses.css"
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = (selectedYear) => {
      setFilteredYear(selectedYear);
    };

    let filteredExpenses = props.items.filter(val => val.date.getFullYear() == filteredYear)

    let expensesContent = <p>No Item Found.</p>

    if (filteredExpenses.length > 0){
        expensesContent = filteredExpenses.map(item => (
            <ExpenseItem key={item.id} date={item.date} amount={item.amount} title={item.title}  />
        ))
    }

    return (
        <Cards className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            <ExpensesChart expenses={filteredExpenses} />
            {expensesContent} 
        </Cards>
    )
}

export default Expenses;