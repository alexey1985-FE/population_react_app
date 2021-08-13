 export const filteredDataStates = (statesData, selectValue, filterValue) => {
	const filteredDataStates = statesData.filter(state => state[filterValue] === selectValue).slice(1)
	.reverse();
	return filteredDataStates
}

 export const filteredDataYears = (filteredData, selectValue, filteredValue) => {
	const filteredDataYears = filteredData.filter(year => year[filteredValue] === selectValue)
	return filteredDataYears
}

