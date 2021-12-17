const scrollToTop = () => {
	document.body.scrollTop = 0; // Safari
	document.documentElement.scrollTop = 0;
};

export { scrollToTop };
