require("dotenv").config();
const express = require("express");

const item = require("../models/item");
const itemsAPI = express.Router();

/*
const newItem = new item({
	name: "SOMMELO",
	type: "Chair",
	price: 13.50,
	image: "black_chair.png"
});

newItem.save();
*/

// Get all items
itemsAPI.route("/items").get((req, res, next) => {
	item.find({}).then(data => {
		res.json(JSON.stringify(data));
	}).catch(err => {
		next(err);
	})
});

// Get item by id
itemsAPI.route("/items/:id").get((req, res, next) => {
	item.find({"_id" : req.params.id}).then(data => {
		res.json(JSON.stringify(data));
	}).catch(err => {
		next(err);
	})
});

	itemsAPI.route("/items").post((req, res, next) => {
		const newItem = new item({
			name: req.body.name,
			type: req.body.type,
			price: req.body.price,
			image: req.body.image
		});
		newItem.save()
			.then(d => res.json(d))
			.catch(e => next(e));
	});

module.exports = itemsAPI;