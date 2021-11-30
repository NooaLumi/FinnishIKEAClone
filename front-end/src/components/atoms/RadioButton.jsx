import styled from "styled-components";

const StyledRadioButton = styled.label`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	padding: var(--margin);
	font-size: .9rem;

	> input[type="radio"] {
		transform: scale(1.5);
	}
`

const RadioButton = ({name, value}) => {
	return(
		<StyledRadioButton>
			<span>{value}</span>
			<input type="radio" name={name} value={value}/>
		</StyledRadioButton>
	);
}

export {RadioButton};
