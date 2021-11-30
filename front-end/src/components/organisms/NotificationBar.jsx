import styled, {keyframes} from "styled-components";
import {MessageBox} from "../molecules/MessageBox";
import React from "react";


const Peek = keyframes`
	0% {
		top: -200px;
	}
	5% {
		top: 0;
	}
	95% {
		top: 0;
	}
	100% {
		top: -200px;
	}
`

const StyledNotificationBar = styled.div`
	width: 100%;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 5;

	> * {
		position: absolute;
		top: 0;
		left: 0;
		animation-name: ${Peek};
		animation-duration: 4s;
		animation-fill-mode: forwards;
	}
` 

const NotificationBar = ({notifications, setNotifications}) => {
	const removeNotification = () => {
		if(notifications.length > 0) {
			const newNotifs = [...notifications];
			newNotifs.pop();
			setNotifications(newNotifs);
		}
	}

	return(
		<StyledNotificationBar>
			{notifications.length > 0 && <MessageBox onClose={removeNotification} link={notifications[notifications.length - 1].link}> {notifications[notifications.length - 1].message} </MessageBox>}
		</StyledNotificationBar>

	);
}

export {NotificationBar};
