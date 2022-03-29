import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	getDataPrincipal,
	getCountryByName,
} from "../../../redux/reducers/actions/action";
import "../../../css/dashboardScreen.css";
import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";

export const DashboardScreen = () => {
	const dispatch = useDispatch();
	const { countries } = useSelector((state) => state.data);
	const [pag, setPag] = useState(0);
	const [search, setSearch] = useState("");

	useEffect(() => {
		dispatch(getDataPrincipal());
	}, [dispatch]);

	const filteredCountries = () => {
		return countries.slice(pag, pag + 10);
	};
	const handleNext = () => {
		setPag(pag + 10);
	};
	const handlePrev = () => {
		if (pag > 0) setPag(pag - 10);
	};
	const handleSearch = ({ target }) => {
		setSearch(target.value);
	};
	const handlerSubmit = (e) => {
		e.preventDefault();
		dispatch(getCountryByName(search));
	};

	console.log(countries);

	return (
		<div className="dashBoardScreen__container">
			<div className="dashBoardScreen__submenu">
				<div>
					<button onClick={handlePrev}>
						<BsFillCaretLeftFill />
					</button>
					<button onClick={handleNext}>
						<BsFillCaretRightFill />
					</button>
				</div>
				<div>
					<form onSubmit={handlerSubmit}>
						<input
							type="text"
							placeholder="Search Country"
							name="search"
							value={search}
							onChange={handleSearch}
						/>
						<button type="submit">buscar</button>
					</form>
				</div>
			</div>
			{filteredCountries().map((country) => (
				<p key={country.id}>{country.name}</p>
			))}
		</div>
	);
};
