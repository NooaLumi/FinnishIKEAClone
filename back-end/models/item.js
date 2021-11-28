const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const item = new Schema({
	name: {
		type: String,
		required: [true, "Item name is required"]
	},
	type: {
		type: String,
		required: [true, "Item type is required"]
	},
	price: {
		type: Number,
		min: [0, "Price must be a positive value"]
	},
	image: {
		type: String
	}
});

module.exports = mongoose.model("items", item);