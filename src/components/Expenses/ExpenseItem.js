import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
	const [title, setTitle] = useState(props.title);

	const onClickHandler = (event) =>{
		props.deleteExpense(props.id);
	}

	return (
		<li>
			<Card className="expense-item">
				<ExpenseDate date={props.date} />
				<div className="expense-item__description">
					<h2>{title}</h2>
					<h4>{props.tags.toString()}</h4>
					<div className="expense-item__price">${props.amount}</div>
					<button onClick={onClickHandler}></button>
				</div>
			</Card>
		</li>
	);
};

export default ExpenseItem;
