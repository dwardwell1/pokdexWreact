import React from 'react';
import pokemon from './pokemon';
import Pokedex from './pokedex';
import './app.css';
function App() {
	return (
		<>
		<h1>Pokedex</h1>
		<div className="box">
			<Pokedex props={pokemon} />
		</div>
		</>
	)

}

export default App;
