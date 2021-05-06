const express = require("express");
const app = express();
const data = require("./data");

app.get("/", (req, res) => {
	res.send(data);
});

app.listen(5000 || 3000, () => console.log("server running on port 5000"));
