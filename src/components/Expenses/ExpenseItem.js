import react, {useState} from 'react';
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import Cards from "../UI/Cards"

const ExpenseItem = (props) => {

    console.log('item rendered')
    return (
        <Cards className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h3>{props.title}</h3>
                <div className="expense-item__price">$ {props.amount}</div>
            </div>
        </Cards>
    );
}


export default ExpenseItem