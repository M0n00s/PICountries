const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
	// defino el modelo
	sequelize.define(
		"countries",
		{
			id: {
				type: DataTypes.STRING(3),
				allowNull: false,
				primaryKey: true,
			},
			name: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			img: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			continent: {
				type: DataTypes.ENUM([
					"Africa",
					"Europe",
					"Antarctic",
					"Oceania",
					"Asia",
					"Americas",
				]),
				allowNull: false,
			},
			capital: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			subcontinent: {
				type: DataTypes.STRING,
				allowNull: true,
			},
			area: {
				type: DataTypes.DOUBLE,
				allowNull: true,
			},
			population: {
				type: DataTypes.INTEGER,
				allowNull: true,
			},
			maps: {
				type: DataTypes.STRING,
				allowNull: true,
			},
		},
		{ timestamps: false }
	);
};
