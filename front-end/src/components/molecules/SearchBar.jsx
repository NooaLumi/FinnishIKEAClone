import { MdSearch, MdClose, MdCancel } from "react-icons/md";
import React, { useState } from "react";
import styled from "styled-components";
import {DividerIcon} from "../atoms/DividerIcon";

const SearchIcon = styled(MdSearch)`
	font-size: var(--icon-size);
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	left: 1.5rem;
`

const SearchControls = styled.div`
	font-size: var(--icon-size);
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	right: 1.5rem;

	display: flex;
	flex-flow: row;
	align-items: center;
	width: fit-content;


	> * {
		font-size: var(--icon-size);
		margin-left: calc(var(--margin) * 0.8);
	}

	> :first-child {
		font-size: calc(var(--icon-size) * 0.75);
	}
`

const StyledInput = styled.input`
	font-size: 1rem;
	width: 100%;
	height: 44px;

	background-color: ${props => props.theme.colors.background2};
	padding: 0.5rem calc(var(--margin) * 2.7);
	border: 2px solid ${props => props.theme.colors.background};
	border-radius: 1000px;
	line-height: 2rem;


	:focus {
		outline: none;
		background-color: ${props => props.theme.colors.background} !important;
		border-color: ${props => props.theme.colors.main};
	}
` 

const StyledSearchBar = styled.div`
	width: 100%;
	position: relative;

	:hover {
		> ${StyledInput} {
			background-color: ${props => props.theme.colors.background3}
		}
	}
`

const SearchBar = React.forwardRef(({className, value, onChange}, ref) => {
	const [isActive, setActive] = useState(false);

	return (
		<StyledSearchBar className={className}>
			{
				isActive 
					? <SearchIcon as={MdClose}/> 
					: <SearchIcon as={MdSearch} onClick={(e) => ref.current.focus()}/>
			}
			<StyledInput
				type="text"
				placeholder="Mitä etsit?"
				onFocus={(e) => setActive(true)}
				onBlur={(e) => setActive(false)}
				ref={ref}
				value={value}
				onChange={onChange}
			/>
			{isActive && (
				<SearchControls>
					<MdCancel/>
					<DividerIcon/>
					<MdSearch />
				</SearchControls>
			)}
		</StyledSearchBar>
	);
});

export { SearchBar };
