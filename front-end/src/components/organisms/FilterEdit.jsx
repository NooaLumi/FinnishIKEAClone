import styled from "styled-components";
import {device} from "../../utils/theme"

const FilterEdit = styled.div`
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
	z-index: 3;

	@media ${device.tablet} {
		top: 50%;
    	transform: translate(0, -50%);
	}
`

export {FilterEdit};
