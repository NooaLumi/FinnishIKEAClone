import { MdSearch, MdClose, MdCancel } from "react-icons/md";
import React, { useState } from "react";
import styled from "styled-components";

const SearchIcon = styled(MdSearch)`
	font-size: var(--icon-size);
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	left: 1.5rem;
	cursor: pointer;
`;

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
		font-size: calc(var(--icon-size) * 0.75);
		margin-left: calc(var(--margin) * 0.8);
	}
`;

const StyledInput = styled.input`
	font-size: 1rem;
	width: 100%;
	height: 44px;

	background-color: ${(props) => props.theme.colors.background2};
	padding: 0.5rem calc(var(--margin) * 2.7);
	border: 2px solid ${(props) => props.theme.colors.background};
	border-radius: 1000px;
	line-height: 2rem;

	:focus {
		outline: none;
		background-color: ${(props) =>
			props.theme.colors.background} !important;
		border-color: ${(props) => props.theme.colors.main};
	}
`;

const StyledSearchBar = styled.div`
	width: auto;
	position: relative;
	margin: 0 calc(var(--margin) * 0.7);

	:hover {
		> ${StyledInput} {
			background-color: ${(props) => props.theme.colors.background3};
		}
	}
`;

const StyledClearButton = styled.button`
	background: none;
	border: none;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
`;

const SearchBar = React.forwardRef(
	({ className, value, onChange, onClear }, ref) => {
		const [isActive, setActive] = useState(false);

		const onClearClick = (e) => {
			ref.current.focus();
			onClear(e);
		};

		return (
			<StyledSearchBar className={className}>
				{isActive ? (
					<SearchIcon as={MdClose} />
				) : (
					<SearchIcon
						as={MdSearch}
						onClick={(e) => ref.current.focus()}
					/>
				)}
				<StyledInput
					type="text"
					placeholder="Mitä etsit?"
					onFocus={(e) => setActive(true)}
					onBlur={(e) => setActive(false)}
					ref={ref}
					value={value}
					onChange={onChange}
				/>
				<SearchControls>
					<StyledClearButton onClick={onClearClick}>
						{" "}
						<MdCancel />{" "}
					</StyledClearButton>
				</SearchControls>
			</StyledSearchBar>
		);
	}
);

export { SearchBar };
