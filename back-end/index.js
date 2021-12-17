require("dotenv").config();
const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const itemsAPI = require("./services/items");

const app = express();
app.use(express.json());

try {
	mongoose.connect(process.env.DB, {
		useUnifiedTopology: true,
		useNewUrlParser: true,
	});
	const db = mongoose.connection;
	db.once("open", () => {
		console.log("Connected to MongoDB!");
	});
} catch (err) {
	console.log(err);
}

app.use("/api", itemsAPI);

app.use("/images", express.static("./images"));
app.use(express.static(path.join(__dirname, "..", "front-end", "build")));

if (process.env.NODE_ENV === "development") {
	app.get("/console", (req, res) => {
		res.sendFile(__dirname + "/pages/devconsole.html");
	});
} else {
	console.log("Access restricted: Not running in development mode");
}

app.listen(process.env.port || 5000, () => {
	console.log(`server started on port ${process.env.port || 5000}`);
});
