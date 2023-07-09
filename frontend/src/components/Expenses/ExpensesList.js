import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
	if (props.items.length === 0)
		return <h2 className="expenses-list__fallback">No Content Here</h2>;

	const deleteExpense = (id) => {
		props.changeExpenses((prevExpenses) => {
			return prevExpenses.filter((prevExpense) => prevExpense.id !== id);
		});
	};

	return (
		<ul className="expenses-list">
			{props.items.map((expense) => (
				<ExpenseItem
					deleteExpense={deleteExpense}
					key={expense._key}
					id={expense._key}
					title={expense.expenseTitle}
					amount={expense.amount}
					date={expense.date}
					tags={expense.tags}
				/>
			))}
		</ul>
	);
};

export default ExpensesList;
