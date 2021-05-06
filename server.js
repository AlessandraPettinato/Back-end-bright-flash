require("dotenv").config();

const express = require("express");
const app = express();
const data = require("./data");

app.get("/", (req, res) => {
	res.send(data);
});

app.listen(process.env.PORT || 3000, () => {
	console.log(`Server running on port ${process.env.PORT}`);
});
