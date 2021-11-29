const formatPrice = (num) => {
	return `${num.toLocaleString("en", {minimumFractionDigits: 2})}€`;
}

export default formatPrice;