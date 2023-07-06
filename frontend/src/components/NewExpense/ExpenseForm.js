import React, { useState } from "react";

import "./ExpenseForm.css";
import Tags from "../Tag/Tags";
import client from "../../client";
import {v4 as uuidv4} from 'uuid'
import { useNavigate } from "react-router-dom";


const tags = [
	{ label: "Miscellaneous" },
	{ label: "Groceries" },
	{ label: "Rent" },
	{ label: "Monthly Bills" },
	{ label: "Health" },
];

const ExpenseForm = (props) => {

	const navigate = useNavigate();

	navigate('/form');

	const userId = JSON.parse(localStorage.getItem('user')).googleId;

	const [enteredTitle, setEnteredTitle] = useState("");
	const [enteredAmount, setEnteredAmount] = useState("");
	const [enteredDate, setEnteredDate] = useState("");
	const [enteredTags, setEnteredTags] = useState([])

	const titleChangeHandler = (event) => {
		setEnteredTitle(event.target.value);
	};

	const amountChangeHandler = (event) => {
		setEnteredAmount(event.target.value);
	};

	const dateChangeHandler = (event) => {
		setEnteredDate(event.target.value);
	};

	const tagsChangeHandler = (event) =>{
		const clickedTag =  event.target.outerText;
		setEnteredTags((prevTags) => {
			if(prevTags.includes(clickedTag)){
				return prevTags.filter((tag) => (tag!==event.target.outerText))
			}
			else{
				return [...enteredTags, event.target.outerText]
			}
		})
	}

	const submitHandler = (event) => {

		const expenseDoc = {
			_key: uuidv4(),
			_type: 'expense',
			expenseTitle: enteredTitle,
			amount: parseInt(enteredAmount),
			date: String(enteredDate),
			tags: enteredTags.toString()
		}

		client
		.patch(userId)
		.setIfMissing({expenses: []})
		.insert('after', "expenses[-1]", [expenseDoc])
		.commit()
		.then(()=>{
			window.location.reload();
		})
	};
	return (
		<form onSubmit={submitHandler}>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label>Title</label>
					<input
						type="text"
						value={enteredTitle}
						onChange={titleChangeHandler}
					/>
				</div>
				<div className="new-expense__control">
					<label>Amount</label>
					<input
						type="number"
						min="0.01"
						step="0.01"
						value={enteredAmount}
						onChange={amountChangeHandler}
					/>
				</div>
				<div className="new-expense__control">
					<label>Date</label>
					<input
						type="date"
						min="2019-01-01"
						max="2022-12-31"
						value={enteredDate}
						onChange={dateChangeHandler}
					/>
				</div>
			</div>
			<div className="new-expense__controls">
				<label>Tags:</label>
				<Tags tags={tags} handler={tagsChangeHandler}/>
			</div>
			<span><h4>{enteredTags.toString()}</h4></span>
			<div className="new-expense__actions">
				<button type="submit">Add Expense</button>
			</div>
		</form>
	);
};

export default ExpenseForm;
