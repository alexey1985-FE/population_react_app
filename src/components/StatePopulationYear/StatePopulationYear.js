import React, { useState } from 'react';
import Chart from '../Chart/Chart';
import '../../App.css';
import { ChartConfig } from '../../config/ChartConfig';
import { filteredDataStates, filteredDataYears } from '../../config/filterData';
import {TURQUOISE_COLOR, PINK_COLOR} from '../../constants'

export default function StatePopulationYear(props) {
	const [statefilteredStates, setstatefilteredStates] = useState([]);
	const [chartState, setChartState] = useState({});
	const [nameOfState, setNameOfState] = useState('');

	const stateChangeHandler = e => {
		if (e.target.value === '') {
			setNameOfState('');
			setstatefilteredStates([]);
			return setChartState({});
		}

		const statesFiltered = filteredDataStates(props.statesData, e.target.value, 'State');
		setstatefilteredStates(statesFiltered);

		setNameOfState(e.target.value);
		setChartState(ChartConfig(statesFiltered, `Population in ${e.target.value}`, TURQUOISE_COLOR));
	};

	const yearChangeHandler = e => {
		if (e.target.value === '') {
			return setChartState({});
		}

		const yearsFiltered = filteredDataYears(statefilteredStates, e.target.value, 'Year');

		if (e.target.value !== '' && !statefilteredStates.length) {
			return setChartState({});
		} else {
			setChartState(
				ChartConfig(yearsFiltered, `Population in ${nameOfState} in ${e.target.value}`, PINK_COLOR)
			);
		}
	};

	return (
		<>
			<form action="#" className="form">
				<label htmlFor="selectStates">Select States</label>
				<select name="state" className="select" onChange={stateChangeHandler}>
					<option value=""></option>
					{props.statesData.map((state, index) => (
						<option key={index} value={state.State}>
							{state.State}
						</option>
					))}
				</select>
				<label htmlFor="selectYear">Select Year</label>
				<select name="year" className="select" onChange={yearChangeHandler}>
					<option value=""></option>
					{props.dataUSA.slice(1).map((year, index) => (
						<option key={index} value={year.Year}>
							{year.Year}
						</option>
					))}
				</select>
			</form>

			<div className="container">
				<Chart chartData={chartState.chartData} />
			</div>
		</>
	);
}
