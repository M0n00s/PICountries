const { Router } = require("express");
const router = Router();

const { postActivity } = require("./helpers/helper");

router.post("/", async (req, res) => {
	const { name, dificulty, duration, season, countries } = req.body;
	const post = await postActivity(
		name,
		dificulty,
		duration,
		season,
		countries
	);
	res.send(post);
});

module.exports = router;
