import React from "react";
import { useDispatch } from "react-redux";
import "../../css/navbar.css";
import {
	filterByContinent,
	orderByName,
	OrderByPopulation,
} from "../../redux/reducers/actions/action";

// import { } from "react-icons/bs";

export const Filters = () => {
	const dispatch = useDispatch();
	const handleOrderByName = ({ target }) => {
		dispatch(orderByName(target.value));
	};
	const handleOrderByPopulation = ({ target }) => {
		dispatch(OrderByPopulation(target.value));
	};
	const handleFilterContinent = ({ target }) => {
		console.log(target.value);
		dispatch(filterByContinent(target.value));
	};

	return (
		<div>
			<div className="navbar__container">
				<hr />
				<h4>Ordenamiento</h4>
				<label htmlFor="alfa">Alfabeticamente</label>
				<select name="alfa" onChange={handleOrderByName}>
					<option value="">Selecciona</option>
					<option value="ASC">Ascendente</option>
					<option value="DESC">Descendente</option>
				</select>
				<hr />
				{/* a */}
				<label htmlFor="popu">Population</label>
				<select name="popu" onChange={handleOrderByPopulation}>
					<option value="">Selecciona</option>
					<option value="ASC">Ascendente</option>
					<option value="DESC">Descendente</option>
				</select>
			</div>
			{/* FILTRADO*/}
			<div className="navbar__container">
				<hr />
				<h4>Filtrado</h4>
				<label htmlFor="order">Continente</label>
				<select name="order" onChange={handleFilterContinent}>
					<option value="all">Selecciona</option>
					<option value="Africa">Africa</option>
					<option value="Europe">Europe</option>
					<option value="Antarctic">Antarctic</option>
					<option value="Oceania">Oceania</option>
					<option value="Asia">Asia</option>
					<option value="Americas">Americas</option>
				</select>
				<hr />
				{/* a */}
				<label htmlFor="order">Population</label>
				<select name="order">
					<option value="">Aleatorio</option>
					<option value="ASC">Ascendente</option>
					<option value="DESC">Descendente</option>
				</select>
			</div>
		</div>
	);
};
