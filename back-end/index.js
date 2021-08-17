const path = require("path");
const express = require("express");

const app = express();

app.use(express.static(path.join(__dirname, "..", "front-end", "build")));

app.listen(5000, () => {
	console.log("server started on port 5000");
});
