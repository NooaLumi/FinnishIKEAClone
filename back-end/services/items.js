require("dotenv").config();
const express = require("express");

const item = require("../models/item");
const itemsAPI = express.Router();

// Get all items
itemsAPI.route("/items").get((req, res, next) => {
	item.find({})
		.then((data) => {
			res.json(JSON.stringify(data));
		})
		.catch((err) => {
			next(err);
		});
});

// Get item by id
itemsAPI.route("/items/:id").get((req, res, next) => {
	item.find({ _id: req.params.id })
		.then((data) => {
			res.json(JSON.stringify(data));
		})
		.catch((err) => {
			next(err);
		});
});

if (process.env.NODE_ENV === "development") {
	// Delete item by id
	itemsAPI.route("/items/:id").delete((req, res, next) => {
		item.deleteOne({ _id: req.params.id })
			.then((data) => {
				res.json(JSON.stringify(data));
			})
			.catch((err) => {
				next(err);
			});
	});

	// Create new item
	itemsAPI.route("/items").post((req, res, next) => {
		const newItem = new item({
			name: req.body.name.toUpperCase(),
			type: req.body.type,
			price: req.body.price,
			image: req.body.image,
		});
		newItem
			.save()
			.then((d) => res.json(d))
			.catch((e) => next(e));
	});
}

module.exports = itemsAPI;
