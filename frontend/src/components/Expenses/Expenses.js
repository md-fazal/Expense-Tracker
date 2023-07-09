import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
	// console.log(props)
	const [filteredYear, setFilteredYear] = useState("2020");

	const filterChangeHandler = (selectedYear) => {
		setFilteredYear(selectedYear);
	};

	const filteredExpenses = props.items.filter((expense) => {
		return `${expense.date}`.slice(0, 4) === filteredYear;
	});

	// console.log(`${props.items[0].date}`.slice(0, 4)===filteredYear)
	// console.log(filteredExpenses

	return (
		<div>
			<Card className="expenses">
				<ExpensesFilter
					selected={filteredYear}
					onChangeFilter={filterChangeHandler}
				/>
				<ExpensesChart expenses={filteredExpenses}/>
				<ExpensesList items={filteredExpenses} changeExpenses={props.changeExpenses}/>
			</Card>
		</div>
	);
};

export default Expenses;
