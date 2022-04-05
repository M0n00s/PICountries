import React, { useState } from "react";
import "../../../css/activity.css";

export const CreateActivity = () => {
	const [input, setInput] = useState({
		name: "",
	});
	const { name } = input;
	const handleInput = ({ target }) => {
		setInput({
			...input,
			[target.name]: target.value,
		});
	};

	const handleSelect = () => {};
	// form
	const [selected, setSelected] = useState([1, 2, 3]);

	return (
		<div className="activity__container">
			<form>
				<span>Nombre de Actividad</span>
				<input
					type="text"
					name="name"
					value={name}
					onChange={handleInput}
				/>
				<span>Dificultad</span>
				<select onChange={handleSelect}>
					<option defaultValue value="1">
						1
					</option>
					<option value="2">2</option>
					<option value="3">3</option>
					<option value="4">4</option>
					<option value="5">5</option>
				</select>
				<span>Duracion</span>
				<input type="time" />
				<span>Temporada</span>
				<select onChange={handleSelect}>
					<option defaultValue value="Verano">
						Verano
					</option>
					<option value="Otoño">Otoño</option>
					<option value="Invierno">Invierno</option>
					<option value="Primavera">Primavera</option>
				</select>
			</form>
			<div className="activity__countriesSelector">
				<div className="selected__countries">
					{selected?.map((country) => (
						<p key={country}>{country}</p>
					))}
				</div>
				<hr />
				<div className="search__countries">
					<span>Buscar Paises</span>
					<input type="text" />
				</div>
			</div>
		</div>
	);
};
