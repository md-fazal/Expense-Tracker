import React, { useState } from "react";

import "./ExpenseForm.css";
import Tags from "../Tag/Tags";

const ExpenseForm = (props) => {
	const tags = [
		{ label: "Miscellaneous" },
		{ label: "Groceries" },
		{ label: "Rent" },
		{ label: "Monthly Bills" },
		{ label: "Health" },
	];

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
		event.preventDefault();
		const expenseData = {
			title: enteredTitle,
			amount: enteredAmount,
			date: new Date(enteredDate),
			tags: enteredTags
		};
		props.onSaveExpenseData(expenseData);
		setEnteredAmount("");
		setEnteredDate("");
		setEnteredTitle("");
		setEnteredTags([])
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
