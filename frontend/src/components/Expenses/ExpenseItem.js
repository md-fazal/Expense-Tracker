import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";
import { AiFillDelete } from "react-icons/ai";
import client from "../../client";
import { fetchUserId } from "../../queries";

const ExpenseItem = (props) => {
	console.log(props)
	const [title, setTitle] = useState(props.title);

	const userId = fetchUserId();

	const onClickHandler = (event) => {
		const toDelete = new Array(`expenses[_key=="${props.id}"]`)
		client.patch(userId).unset(toDelete).commit();
		console.log(toDelete);
	};

	return (
		<li>
			<Card className="expense-item">
				<ExpenseDate date={props.date} />
				<div className="expense-item__description">
					<h2>{title}</h2>
					<h4>{props.tags.toString()}</h4>
					<div className="expense-item__price">${props.amount}</div>
					<button className="m-2">
						<AiFillDelete
							color="white"
							fontSize={40}
							onClick={onClickHandler}
						/>
					</button>
				</div>
			</Card>
		</li>
	);
};

export default ExpenseItem;
