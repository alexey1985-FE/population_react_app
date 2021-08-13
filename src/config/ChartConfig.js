export const ChartConfig = (statesData, label, backgroundColor) => {
	const ChartsData = {
		chartData: {
			labels: statesData.map(year => year.Year),
			datasets: [
				{
					label: label,
					data: statesData.map(population => population.Population),
					backgroundColor: backgroundColor,
				},
			],
		},
	};
	return ChartsData;
};
