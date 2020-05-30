import React, { useState, useEffect } from "react";

export default function Timer(props) {
	const [time, timeSet] = useState(25);

	const timeString = time + ":00";

	return (
		<div className="mx-auto text-center">
			<h1 id="timer">{timeString}</h1>
			<div id="buttons" className="mt-12">
				<button className="bg-teal-400 hover:bg-teal-600 text-white font-bold py-3 px-5 mx-4 text-2xl">
					{props.running ? "Stop" : "Start"}
				</button>
				<button className="bg-gray-600 hover:bg-gray-800 text-white font-bold py-3 px-5 mx-4 text-2xl">
					Reset
				</button>
			</div>
		</div>
	);
}
