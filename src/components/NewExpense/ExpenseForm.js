import React, {useState} from 'react'
import ExpenseDate from '../Expenses/ExpenseDate'
import "./NewExpense.css"

const ExpenseForm = (props) => {

    // const [enteredTitle, setEnteredTitle] = useState('')
    // const [enteredAmount, setEnteredAmount] = useState('')
    // const [enteredAmount, setEnteredDate] = useState('')

    const [userInput, setUserInput] = useState({'enteredTitle': '', 'enteredAmount': '', 'enteredDate': ''})


    const titleChangeHandler = (e) => {
        // setEnteredTitle(e.target.value)
        setUserInput((prevState)=>{ return {...prevState, 'enteredTitle': e.target.value} })
        console.log(e.target.value)
    }
    const amountChangeHandler = (e) => {
        // setEnteredAmount(e.target.value)
        setUserInput((prevState)=>{ return {...prevState, 'enteredAmount': e.target.value} })
        console.log(e.target.value)
    }
    const dateChangeHandler = (e) => {
        // setEnteredDate(e.target.value)
        setUserInput((prevState)=>{ return {...prevState, 'enteredDate': e.target.value} })
        console.log(e.target.value)
    }


    const submitHandler = (e) => {
        e.preventDefault();
        const expenseData = {
            title: userInput['enteredTitle'],
            amount: +userInput['enteredAmount'],
            date: new Date(userInput['enteredDate']),
            id: Math.random().toString()
        }
        console.log('from form', expenseData)
        props.onExpenseSave(expenseData)
        Object.keys(userInput).forEach(k => userInput[k]='')
        setUserInput(()=>{ return {...userInput}})
        props.changeDisplay()
    }


  return (
    <div>
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                <label>Title</label>
                <input type='text' value={userInput.enteredTitle}  onChange={titleChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                <label>Amount</label>
                <input type='number' min='0.01' step='0.01' value={userInput.enteredAmount} onChange={amountChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                <label>Date</label>
                <input type='date' min='2019-01-01' max='2022-12-31' value={userInput.enteredDate} onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button onClick={props.changeDisplay}>Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
      </form>
    </div>
  )
}

export default ExpenseForm