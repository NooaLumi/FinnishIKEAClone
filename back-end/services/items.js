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
	console.log("Connected!");
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

module.exports = itemsAPI;