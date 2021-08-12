import React, { useState } from 'react';
import Chart from '../Chart/Chart';
import '../../App.css';

export default function StatePopulationYear(props) {
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
						backgroundColor: ['rgba(75, 192, 192, 0.6)'],
					},
				],
			},
		});
	};

	const yearChangeHandler = e => {
		if (e.target.value === '') {
			return setChartState({});
		}

		const filteredDataStates = props.statesData
			.filter(state => state.State === nameOfState)
			.slice(1)
			.reverse();

		const filteredDataYears = filteredDataStates.filter(year => year.Year === e.target.value);

		if (e.target.value !== '' && filteredDataYears === []) {   //НЕ СРАБАТЫВАЕТ УСЛОВИЕ, ЧТО КОГДА ГОД ВЫБРАН
			return setChartState({});										  //А filteredDataYears ЕЩЕ ПУСТОЙ МАССИВ, ТО ОЧИЩАЕМ 
		} else {																	  //setChartState, Т.Е. НЕ РЕНДЕРИМ ГРАФИК!!!
			setChartState({
				chartData: {
					labels: filteredDataYears.map(year => year.Year), 
					datasets: [
						{
							label: `Population in ${nameOfState} in ${e.target.value}`,
							data: filteredDataYears.map(population => population.Population),
							backgroundColor: ['rgba(255, 99, 132, 0.6)',],
						},
					],
				},
			});
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
