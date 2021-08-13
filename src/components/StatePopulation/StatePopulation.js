import React, { useState } from 'react';
import Chart from '../Chart/Chart';
import '../../App.css';
import { filteredDataStates } from '../../config/filterData';
import { ChartConfig } from '../../config/ChartConfig';
import {LITE_YELLOW_COLOR} from '../../constants'

export default function StatePopulation(props) {
	const [chartState, setChartState] = useState({});
	const [nameOfState, setNameOfState] = useState('');

	const stateChangeHandler = e => {
		if (e.target.value === '') {
			setNameOfState('');
			return setChartState({});
		}

		const filterData = filteredDataStates(props.statesData, e.target.value, 'State');

		setNameOfState(e.target.value);
		setChartState(ChartConfig(filterData, `Population in ${e.target.value}`, LITE_YELLOW_COLOR));
	};

	return (
		<>
			<form action="#" className="form">
				<label htmlFor="selectStates">Select States</label>
				<select name="states" className="select" onChange={stateChangeHandler} id="selectStates">
					<option value=""></option>
					{props.statesData.map((state, index) => (
						<option key={index} value={state.State}>
							{state.State}
						</option>
					))}
				</select>
			</form>
			<div className="container">
				<h2 className="title">{nameOfState}</h2>
				<Chart chartData={chartState.chartData} />
			</div>
		</>
	);
}
