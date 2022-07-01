import React, {useState} from 'react'
import "./NewExpense.css"
import ExpenseForm from './ExpenseForm'
import Card from "../UI/Cards"

const NewExpense = (props) => {

    const expenseSaveHandler = (expenseData) => {
        console.log('from new expense', expenseData)
        props.onAddExpense(expenseData)
    }

    const [stateVar, setStateVar] = useState(1)

    let formContent;

    const onClickHandler = () => {
      setStateVar((prevState) => {return !prevState})
    }

    if (stateVar == 1){
      formContent = <button onClick={onClickHandler}> Add Expense </button>
    }
    else{
      formContent = <ExpenseForm onExpenseSave={expenseSaveHandler} changeDisplay={onClickHandler}/>
    }
    

  return (
    <Card className='new-expense'>
        {formContent}
    </Card>
  )
}

export default NewExpense;