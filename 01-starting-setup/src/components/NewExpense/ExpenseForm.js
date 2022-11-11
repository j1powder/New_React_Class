import React, { useState } from "react";
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [newAmount, setNewAmount] = useState('');
    const [newDate, setNewDate] = useState(''); 

    /*const [userInput, setUserInput] = useState({
        enteredTitle:'',
        newAmount: '',
        newDate: ''
    });*/
    
    const titleChanger = (event) => {
       /* setUserInput({
            ...userInput,
            enteredTitle: event.target.value,
        });*/
        setEnteredTitle(event.target.value);

        /*setUserInput((prevState) => {
            return {...prevState, enteredTitle: event.target.value };
        })*/
    };

    const amountChanger = (event) => {
       /* setUserInput({
        ...userInput,
        newAmount: event.target.value,
        });*/
        setNewAmount(event.target.value);
    };

    const dateChanger = (event) => {
       /* setUserInput({
            ...userInput,
            newDate: event.target.value,
        });*/
        setNewDate(event.target.value);
    };

    const submitHandler = (event) =>{
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: newAmount,
            date: new Date(newDate)
        };
       props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setNewAmount('');
        setNewDate('');
    };


    return <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
        <div className="new-expense__control">
    <label>Title</label>
    <input type='text' value={enteredTitle} onChange={titleChanger} />
        </div>
        <div className="new-expense__control">
    <label>Amount</label>
    <input type='number' min="0.01" step="0.01" value={newAmount} onChange={amountChanger} />
        </div>
        <div className="new-expense__control">
    <label>Date</label>
    <input type='date' min='2022-11-11' max='2025-12-31' value={newDate} onChange={dateChanger} />
        </div>
       </div>
       <div className="new-expense__actions">
        <button type='submit'>Add Expense</button>
       </div>
    </form>
}

export default ExpenseForm;