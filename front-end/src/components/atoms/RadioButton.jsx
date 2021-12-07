import styled from "styled-components";

const StyledRadioButton = styled.label`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	padding: var(--margin);
	font-size: .9rem;
	cursor: pointer;

	> input[type="radio"] {
		transform: scale(1.5);
		cursor: pointer;
	}
`

const RadioButton = ({name, value, displayValue = value, onChange, className, checked = false}) => {
	return(
		<StyledRadioButton className={className}>
			<span>{displayValue}</span>
			<input type="radio" checked={checked} name={name} value={value} onChange={onChange}/>
		</StyledRadioButton>
	);
}

export {RadioButton};
