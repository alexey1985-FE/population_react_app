import React, { useState, useEffect } from 'react';
import Chart from '../Chart/Chart';

export default function HomePage(props) {
	const [chartState, setChartState] = useState({});

	useEffect(() => {
		setChartState({
			chartData: {
				labels: props.dataUSA
					.slice(1)
					.map(year => year.Year)
					.reverse(),
				datasets: [
					{
						label: 'Population',
						data: props.dataUSA.map(population => population.Population).reverse(),
						backgroundColor: ['rgba(153, 102, 255, 0.6)'],
					},
				],
			},
		});
	}, [props.dataUSA]);

	return (
		<div className="container">
			<Chart chartData={chartState.chartData} title="Population increase relative to the year" />
		</div>
	);
}
