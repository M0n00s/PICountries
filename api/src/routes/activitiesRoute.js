const { Router } = require("express");
const router = Router();

const {
	postActivity,
	getActivities,
	getActivitiesDetail,
} = require("./helpers/helper");

router.post("/", async (req, res) => {
	const { name, dificulty, duration, season, countries } = req.body;
	try {
		const post = await postActivity(
			name,
			dificulty,
			duration,
			season,
			countries
		);
		return res.send(post);
	} catch (error) {
		console.log(error);
	}
});

router.get("/", async (req, res) => {
	const { id } = req.query;
	if (id) {
		const data = getActivitiesDetail(id);
		return res.send(data);
	}
	const data = await getActivities();
	return res.send(data);
});

module.exports = router;
