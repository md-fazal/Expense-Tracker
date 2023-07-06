import React from "react";
import AddToExpense from "./components/NewExpense/AddToExpense";
import Expenses from "./components/Expenses/Expenses";
import { useState } from "react";
import { useEffect } from "react";
import client from "./client";
import { FETCH_EXPENSES } from "./queries";

const DUMMY_EXPENSES = [
	{
		id: "e1",
		title: "Toilet Paper",
		amount: 94.12,
		date: new Date(2020, 7, 14),
		tags: [],
	},
	{
		id: "e2",
		title: "New TV",
		amount: 799.49,
		date: new Date(2021, 2, 12),
		tags: [],
	},
	{
		id: "e3",
		title: "Car Insurance",
		amount: 294.67,
		date: new Date(2021, 2, 28),
		tags: [],
	},
	{
		id: "e4",
		title: "New Desk (Wooden)",
		amount: 450,
		date: new Date(2021, 5, 12),
		tags: [],
	},
];

const Home = () => {
	//fetch expenses here
    const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

	// useEffect(() => {
	//   client
	//   .fetch(FETCH_EXPENSES)
	//   .then((data) => {
	// 	setExpenses(data)
	//   })
	// }, [])
	


	const addExpenseHandler = (expenseData) => {
		setExpenses((prevExpenses) => {
			return [expenseData, ...prevExpenses];
		});
	};

	return (
		<div>
			<AddToExpense onAddExpense={addExpenseHandler}></AddToExpense>
			<Expenses items={expenses} changeExpenses={setExpenses} />
		</div>
	);
};

export default Home;