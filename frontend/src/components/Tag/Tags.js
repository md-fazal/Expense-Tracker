import Tag from "./Tag"

const Tags = (props) => {
	return props.tags.map((tag) => (
		<Tag handler={props.handler} label={tag.label} />
	));
};

export default Tags;
