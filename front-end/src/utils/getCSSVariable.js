
const getCSSVariable = (varName) => {
	return getComputedStyle(document.querySelector(":root")).getPropertyValue(varName).replace(/[^\d.-]/g, '');
}

export default getCSSVariable;