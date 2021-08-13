import React from 'react';
import { Bar } from 'react-chartjs-2';
import '../../App.css';

export default function Chart(props) {
	return (
		<div className="chart">
			<Bar
				data={props.chartData}
				options={{
					plugins: {
						title: {
							display: true,
							text: props.title,
							font: {
								size: 30,
							},
							padding: 20,
						},
						legend: {
							display: true,
							position: 'bottom',
							labels: {
								font: {
									size: 20,
								},
								padding: 50,
							},
						},
					},
				}}
			/>
		</div>
	);
}
