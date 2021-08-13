import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import StatePopulation from './components/StatePopulation/StatePopulation';
import StatePopulationYear from './components/StatePopulationYear/StatePopulationYear';
import { API_URL } from './constants';

function App() {
	const [dataUSA, setDataUSA] = useState([]);
	const [statesData, setStatesData] = useState([]);

	useEffect(() => {
		axios
			.get(`${API_URL}?drilldowns=Year&measures=Population`)
			.then(response => setDataUSA(response.data.data))
			.catch(error => console.log(error));
	}, []);

	useEffect(() => {
		axios
			.get(`${API_URL}?drilldowns=State&measures=Population`)
			.then(response => setStatesData(response.data.data))
			.catch(error => console.log(error));
	}, []);

	return (
		<div className="App">
			<Router>
				<header className="App-header">
					<nav>
						<ul className="nav-list">
							<li>
								<Link to="/">Home</Link>
							</li>
							<li>
								<Link to="/statepopulation">USA population</Link>
							</li>
							<li>
								<Link to="/statepopulationyear">USA population in a year</Link>
							</li>
						</ul>
					</nav>
				</header>
				<Switch>
					<Route exact path="/">
						<HomePage dataUSA={dataUSA} />
					</Route>
					<Route path="/Statepopulation">
						<StatePopulation statesData={statesData} />
					</Route>
					<Route path="/Statepopulationyear">
						<StatePopulationYear dataUSA={dataUSA} statesData={statesData} />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
