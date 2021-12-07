import styled from "styled-components";

const StyledCheckBox= styled.label`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	padding: var(--margin);
	font-size: .9rem;
	cursor: pointer;

	> input[type="checkbox"] {
		transform: scale(1.5);
		cursor: pointer;
	}
`

const CheckBox = ({name, value, displayValue = value, onChange, checked = false, className}) => {
	return(
		<StyledCheckBox className={className}>
			<span>{displayValue}</span>
			<input type="checkbox" checked={checked} name={name} value={value} onChange={onChange}/>
		</StyledCheckBox>
	);
}

export {CheckBox};
