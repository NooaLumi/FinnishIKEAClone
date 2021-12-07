import styled, {useTheme} from "styled-components";
import React from "react";

import {HomeTemplate} from "../templates/HomeTemplate"
import {RomuLogo} from "../components/atoms/RomuLogo";
import {PillButton} from "../components/atoms/PillButton";
import {MdTrendingFlat} from "react-icons/md";
import {Link} from "react-router-dom";
import {device} from "../utils/theme"

const HomeInfo = styled.div`
	width: 80%;
	margin: 0 auto;

	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;

	> img {
		display: block;
		width: 60%;
		height: auto;

		@media ${device.tablet} {
			width: 40%;
		}

		@media ${device.laptop} {
			width: 30%;
		}

		@media ${device.laptopL} {
			width: 20%;
		}
	}

	> h2 {
		text-align: center;
	}

	> * {
		margin-bottom: 1.5rem;
	}

	> * ${PillButton} {
		font-size: .8rem;

		:hover {
			color: ${props => props.theme.colors.secondary};
		}

		@media ${device.tablet} {
			padding: 1.3rem;
			font-size: .9rem;
		}
	}

` 

const HomePage = () => {
	const theme = useTheme();
	return(
		<HomeTemplate>
			<HomeInfo>
				<RomuLogo/>
				<h2>
					Tervetuloa ROMU kauppaan!
				</h2>
				<Link to="/store">
					<PillButton color="white" hoverColor="black" hoverBgColor={theme.colors.secondary} bgColor={theme.colors.main}> 
						Aloita shoppailu &nbsp; <MdTrendingFlat/>
					</PillButton>
				</Link>
			</HomeInfo>
		</HomeTemplate>
	);
}
export { HomePage };