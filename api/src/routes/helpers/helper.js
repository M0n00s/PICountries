const axios = require("axios");
// import models para trabajar en db
const { Countries, Activities } = require("../../db");

const getDataApi = async () => {
	try {
		const data = await axios
			.get("https://restcountries.com/v3.1/all")
			.then((data) => data.data);

		const objDataApi = data.map((country) => {
			return Countries.create({
				id: country.cca3,
				name: country.name.common,
				img: country.flags.png,
				continent: country.region,
				capital: country.capital ? country.capital.join() : "",
				subcontinent: country.subregion,
				area: country.area,
				population: country.population,
				maps: country.maps.googleMaps,
			});
		});
		await Promise.all(objDataApi);
	} catch (error) {
		return error;
	}
	// encontrar data definida -------->
	//----------------------------------
	// const continent = data.map((country) => {
	// 	return {
	// 		continent: country.subregion,
	// 	};
	// });
	// const conti_data = continent.map((cont) => cont.continent);
	// const set_data = [...new Set(conti_data)];

	// const dataDb = await Countries.findAll();
	// return dataDb;
};

const getDataDb = async () => {
	const exist = await Countries.findAll({
		attributes: ["id"],
	});
	if (exist.length === 0) {
		console.log("data no cargada");
		await getDataApi();
	}
	console.log("data cargada");
	return;
};

const getAllDataDb = async () => {
	const allData = await Countries.findAll({
		attributes: ["id", "name", "img", "continent", "population"],
		include: Activities,
	});
	return allData;
};
const getDetail = async (id) => {
	const country = await Countries.findByPk(id.toUpperCase(), {
		include: Activities,
	});
	return country;
};

const postActivity = async (name, dificulty, duration, season, countries) => {
	const activity = await Activities.create({
		name,
		dificulty,
		duration,
		season,
	});
	console.log(countries);

	countries.map(async (CountryId) => {
		const country = await Countries.findByPk(CountryId.toUpperCase());
		await country.addActivities(activity);
	});

	// dataCountry.addActivities(activity);
	return "Activity creada con exito";
};

const getActivities = async () => {
	const activities = await Activities.findAll({
		attributes: ["id", "name"],
	});
	return activities;
};

module.exports = {
	getDataDb,
	getDetail,
	getAllDataDb,
	postActivity,
	getDataApi,
	getActivities,
};
