import styled, {useTheme} from "styled-components"
import {PillButton} from "../atoms/PillButton"
import {getTotalPrice, clearItems} from "../../API/ShoppingCart"
import formatPrice from "../../utils/formatPrice"
import {MdTrendingFlat} from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const StyledCheckout = styled.div`
	display: flex;
	flex-flow: column;
	align-items: center;
	justify-content: center;

	> ${PillButton} {
		font-size: .9rem;
		width: 60%;
		margin: var(--margin);
	}
`

const TotalSection = styled.div`
	width: 100%;
	display: flex;
	flex-flow: row;
	align-items: center;
	justify-content: space-between;
	padding: var(--margin);

	> h3 {
		font-size: 1rem;
	}

	> p {
		font-weight: bold;
		font-size: 1.3rem;
	}

`

const CheckoutControls = ({items}) => {
	const theme = useTheme();
	const navigate = useNavigate();

	const goToStorePage = () => {
		navigate("/store");
	}

	const checkout = () => {
		clearItems();
		goToStorePage();
	}

	return(
		<StyledCheckout>
			{items.length > 0 ? (
				<>
					<TotalSection> 
						<h3> Välisumma: </h3>
						<p> {formatPrice(getTotalPrice())} </p>
					</TotalSection>
					<PillButton onClick={checkout} color="white" hoverColor="white" hoverBgColor={theme.colors.mainLighter} bgColor={theme.colors.main}> 
						Osta
					</PillButton>
				</>
			) : (
				<>
				<p> Ostoskorisi on tyhjä</p>
				<PillButton onClick={goToStorePage} color="white" hoverColor="white" hoverBgColor={theme.colors.mainLighter} bgColor={theme.colors.main}> 
					Palaa ostoksille &nbsp; <MdTrendingFlat/>
				</PillButton>
				</>
			)
		}
		</StyledCheckout>
	);
}
export { CheckoutControls };