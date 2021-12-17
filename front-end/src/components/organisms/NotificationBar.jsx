import styled, { keyframes } from "styled-components";
import { MessageBox } from "../molecules/MessageBox";
import React, { useEffect } from "react";
import { device } from "../../utils/theme";

const Peek = keyframes`
	0% {
		top: -200px;
	}
	100% {
		top: 0;
	}
`;

const StyledNotificationBar = styled.div`
	width: 100%;
	position: fixed;
	top: 0;
	right: 0;
	z-index: 5;

	> * {
		position: absolute;
		top: 0;
		left: 0;
		animation-name: ${Peek};
		animation-duration: 0.5s;
		animation-fill-mode: forwards;
	}

	@media ${device.tablet} {
		width: 60%;
	}

	@media ${device.laptop} {
		width: 50%;
	}

	@media ${device.laptopL} {
		width: 30%;
	}
`;

// Set cap for notifications
const notificationCap = 3;

const NotificationBar = ({
	notifications,
	setNotifications,
	onShowClick = () => null,
	closeOnly = false,
}) => {
	const removeNotification = (id) => {
		setNotifications(notifications.filter((n) => n.id !== id));
	};

	useEffect(() => {
		if (notifications.length > notificationCap) {
			const newNotifs = [...notifications];
			newNotifs.splice(0, notifications.length - notificationCap);
			setNotifications(newNotifs);
			return 0;
		}
		const removeTimer = setInterval(() => {
			if (notifications.length === 0) {
				return clearInterval(removeTimer);
			}
			const newNotifs = [...notifications];
			newNotifs.pop();
			setNotifications(newNotifs);
		}, 2500);
		return () => clearInterval(removeTimer);
	}, [notifications, setNotifications]);

	return (
		<StyledNotificationBar>
			{notifications.length > 0 &&
				notifications.map((n) => (
					<MessageBox
						closeOnly={closeOnly}
						onClose={() => removeNotification(n.id)}
						onShowClick={onShowClick}
						key={n.id + notifications.length + Math.random()}
					>
						{n.message}
					</MessageBox>
				))}
		</StyledNotificationBar>
	);
};

export { NotificationBar };
