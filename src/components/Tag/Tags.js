import Tag from "./Tag"

const Tags = (props) => {
	return props.tags.map((tag) => (
		<Tag label={tag.label} />
	));
};

export default Tags;
