require("dotenv").config();
const path = require("path");
const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

try {
mongoose.connect(process.env.DB, {useUnifiedTopology: true, useNewUrlParser: true});
const db = mongoose.connection;
db.once("open", () => {
	console.log("Connected to MongoDB!");
})
} catch(err) {
	console.log(err);
}

const itemsAPI = require("./services/items");
app.use("/api", itemsAPI);

app.use("/images", express.static("./images"));
app.use(express.static(path.join(__dirname, "..", "front-end", "build")));

app.listen(5000, () => {
	console.log("server started on port 5000");
});

