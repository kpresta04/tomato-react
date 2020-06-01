import React, { useState, useEffect } from "react";
import "./App.css";
import Timer from "./components/Timer/Timer.component";

function App() {
	const [running, runningSet] = useState(false);
	const [tomatoCount, tomatoCountSet] = useState(0);

	useEffect(() => {
		let getObj = JSON.parse(localStorage.getItem("tomatoObj"));
		if (getObj !== null) {
			// console.log(getObj);
			tomatoCountSet(getObj);
		}
	}, []);

	return (
		<div className="App mt-5">
			<Timer
				running={running}
				runningSet={runningSet}
				tomatoCount={tomatoCount}
				tomatoCountSet={tomatoCountSet}
			/>
		</div>
	);
}

export default App;
