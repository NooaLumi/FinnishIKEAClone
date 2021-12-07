import styled from "styled-components";
import {device} from "../utils/theme"

const CartTemplate = styled.div`
@media ${device.tablet} {
	margin: 0 5%;
}

@media ${device.laptop} {
	margin: 0 10%;
}

@media ${device.laptopL} {
	margin: 0 20%;
}
`

export {CartTemplate}