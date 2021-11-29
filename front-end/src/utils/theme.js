const size = {
	mobileS: '320px',
	mobileM: '375px',
	mobileL: '425px',
	tablet: '768px',
	laptop: '1024px',
	laptopL: '1440px',
	desktop: '2560px'
}

const device = {
	mobileS: `(min-width: ${size.mobileS})`,
	mobileM: `(min-width: ${size.mobileM})`,
	mobileL: `(min-width: ${size.mobileL})`,
	tablet: `(min-width: ${size.tablet})`,
	laptop: `(min-width: ${size.laptop})`,
	laptopL: `(min-width: ${size.laptopL})`,
	desktop: `(min-width: ${size.desktop})`,
	desktopL: `(min-width: ${size.desktop})`
}

const theme = {
	colors: {
		main: "#0058abff",
		secondary: "#a8fb14ff",
		background: "white",
		background2: "#f5f5f5",
		background3: "#dfdfdf"
	},
	fontFamily: '"Noto Sans", sans-serif',
	device: {...device}
}

export default theme;
export {device}

