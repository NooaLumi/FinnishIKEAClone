import styled, {useTheme} from "styled-components";
import React from "react";

import {HomeTemplate} from "../templates/HomeTemplate"
import {RomuLogo} from "../components/atoms/RomuLogo";
import {PillButton} from "../components/atoms/PillButton";
import {MdTrendingFlat} from "react-icons/md";
import {Link} from "react-router-dom";

const HomeInfo = styled.div`
	width: 80%;
	margin: 0 auto;

	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;

	> img {
		display: block;
		width: 80%;
		height: auto;
	}

	> h2 {
		text-align: center;
	}

	> * {
		margin-bottom: 1.5rem;
	}

	> ${PillButton} {
		font-size: .8rem;

		:hover {
			color: ${props => props.theme.colors.secondary};
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