import React, { useState } from 'react';
import Chart from '../Chart/Chart';
import '../../App.css';

export default function StatePopulation(props) {
	const [chartState, setChartState] = useState({});
	const [nameOfState, setNameOfState] = useState('');

	const stateChangeHandler = e => {
		if (e.target.value === '') {
			setNameOfState('');
			return setChartState({});
		}
		const filteredDataStates = props.statesData
			.filter(state => state.State === e.target.value)
			.slice(1)
			.reverse();

		setNameOfState(e.target.value);
		setChartState({
			chartData: {
				labels: filteredDataStates.map(year => year.Year),
				datasets: [
					{
						label: `Population in ${e.target.value}`,
						data: filteredDataStates.map(population => population.Population),
						backgroundColor: ['rgba(255, 206, 86, 0.6)'],
					},
				],
			},
		});
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
