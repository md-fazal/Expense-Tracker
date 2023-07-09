import NewExpense from "./NewExpense";
import "./AddToExpense.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddToExpense = (props) => {

	const navigate = useNavigate();
	const outputForm = () => {
		setDisplay(<NewExpense onAddExpense={props.onAddExpense}></NewExpense>);
		navigate('/form');
	};

	const addNew = (
		<button onClick={outputForm} className="add_to_expense__controls">
			Add New Expense
		</button>
	);
	const [display, setDisplay] = useState(addNew);

	return <div className="add_to_expense">{display}</div>;
};

export default AddToExpense;
