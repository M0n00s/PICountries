const { Router } = require("express");
const router = Router();
// import helpers
const { getAllDataDb, getDetail } = require("./helpers/helper");

router.get("/", async (req, res) => {
	const { name } = req.query;

	const datadb = await getAllDataDb();
	//si viene nombre
	if (name) {
		const dataFilter = datadb.filter((country) =>
			country.name.toLowerCase().includes(name.toLowerCase())
		);
		//si no encuentra data asociada
		if (dataFilter.length === 0) {
			return res.send([]);
		}
		//si la encuentra retorna data
		return res.status(200).send(dataFilter);
	}
	res.status(200).send(datadb);
});

router.get("/:id", async (req, res) => {
	const { id } = req.params;
	const detail = await getDetail(id);
	if (!detail) {
		return res.status(404).send("no se encontro el pais");
	}
	res.send(detail);
});

module.exports = router;
