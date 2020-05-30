import React, { Component } from "react";

export default class Timer extends Component {
	constructor(props) {
		super(props);
		this.state = { time: 25 };
		this.timeString = this.state.time + ":00";
		this.timeValue = 25 * 60;
	}
	handleStopStart = () => {
		if (this.props.running) {
			this.props.runningSet(false);
		} else {
			this.props.runningSet(true);
			console.log("start");
		}
	};
	timer(duration, display) {
		let start = Date.now(),
			diff,
			minutes,
			seconds;
		function timer() {
			// get the number of seconds that have elapsed since
			// startTimer() was called
			diff = duration - (((Date.now() - start) / 1000) | 0);

			// does the same job as parseInt truncates the float
			minutes = (diff / 60) | 0;
			seconds = diff % 60 | 0;
			this.timeValue--;

			minutes = minutes < 10 ? "0" + minutes : minutes;
			seconds = seconds < 10 ? "0" + seconds : seconds;

			let formatted_time = minutes + ":" + seconds;

			display.textContent = formatted_time;
			document.title = `Tomato Tracker! ${formatted_time}`;
			if (this.timeValue === -1) {
				this.onCompletion();
			}

			if (diff <= 0) {
				// add one second so that the count down starts at the full duration
				// example 05:00 not 04:59
				start = Date.now() + 1000;
			}
		}
		this.Timer.timer = timer;
	}
	render() {
		// 		const [time, timeSet] = useState(25);

		return (
			<div className="mx-auto text-center">
				<h1 id="timer">{this.timeString}</h1>
				<div id="buttons" className="mt-12">
					<button
						onClick={this.handleStopStart}
						className="bg-teal-400 hover:bg-teal-600 text-white font-bold py-3 px-5 mx-4 text-2xl"
					>
						{this.props.running ? "Stop" : "Start"}
					</button>
					<button className="bg-gray-600 hover:bg-gray-800 text-white font-bold py-3 px-5 mx-4 text-2xl">
						Reset
					</button>
				</div>
			</div>
		);
	}
}
