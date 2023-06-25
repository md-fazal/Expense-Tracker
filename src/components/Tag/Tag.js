import "./Tag.css";

const Tag = (props) => {

    const tagOnClickHandler = (event) => {
        props.handler(event);
    }

	return (
		<div onClick={tagOnClickHandler} className="expense_tag">
			<h3>{props.label}</h3>
		</div>
	);
};

export default Tag;
