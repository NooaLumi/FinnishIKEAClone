import styled from "styled-components";

const IconBar = styled.div`
	font-size: var(--icon-size);
	display: flex;
	flex-flow: row;
	align-items: center;

	> * {
		margin-right: 0.5rem;
	}

	> :last-child {
		margin: 0;
	}
`

export {IconBar}

