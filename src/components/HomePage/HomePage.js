import React, { useState, useEffect } from 'react';
import Chart from '../Chart/Chart';
import { ChartConfig } from '../../config/ChartConfig';
import {FIOLET_COLOR} from '../../constants'

export default function HomePage(props) {
	const [chartState, setChartState] = useState({});

	useEffect(() => {
		setChartState(ChartConfig(props.dataUSA.slice(1).reverse(), `Population in USA`, FIOLET_COLOR));
	}, [props.dataUSA]);

	return (
		<div className="container">
			<Chart chartData={chartState.chartData} title="Population increase relative to the year" />
		</div>
	);
}
