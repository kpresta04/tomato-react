import React, { Component } from "react";
import Checkbox from "../Checkbox/Checkbox.component";
import TextFieldOutlined from "../TextField/TextField.component";
export default class Timer extends Component {
	constructor(props) {
		super(props);
		this.state = { time: 25, formatted_time: "25:00" };
		this.timeValue = this.state.time * 60;
		this.timeString = this.state.time + ":00";
	}
	handleStopStart = () => {
		if (this.props.running) {
			this.props.runningSet(false);
			clearInterval(this.interv);
		} else if (!this.props.running && this.timeValue >= 0) {
			this.props.runningSet(true);
			this.timer(this.timeValue);
			// we don't want to wait a full second before the timer starts

			this.timer.timer();
			this.interv = setInterval(this.timer.timer, 1000);
		}
	};
	handleMinutesChange = () => {
		const minutes = Number(document.querySelector("#outlined-basic").value);
		if (!this.props.running && minutes >= 1) {
			console.log(minutes);
			this.timeValue = minutes * 60;
			this.timeString = minutes + ":00";

			this.setState({ time: minutes, formatted_time: minutes + ":00" });
		}
	};
	handleReset = () => {
		this.props.runningSet(false);
		clearInterval(this.interv);
		this.timeValue = this.state.time * 60;
		this.setState({ formatted_time: this.timeString });
		document.title = `Tomato Tracker!`;
	};
	timer = (duration) => {
		let start = Date.now(),
			diff,
			minutes,
			seconds;
		const timer = () => {
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

			this.setState({ formatted_time });
			document.title = `Tomato Tracker! ${formatted_time}`;
			if (this.timeValue === -1) {
				this.onCompletion();
			}

			if (diff <= 0) {
				// add one second so that the count down starts at the full duration
				// example 05:00 not 04:59
				start = Date.now() + 1000;
			}
		};
		this.timer.timer = timer;
	};
	render() {
		// 		const [time, timeSet] = useState(25);

		return (
			<div className="mx-auto text-center">
				<h1 id="timer">{this.state.formatted_time}</h1>
				<div className="flex justify-center my-8">
					<TextFieldOutlined handleMinutesChange={this.handleMinutesChange} />

					<Checkbox />
				</div>
				<div id="buttons">
					<button
						onClick={this.handleStopStart}
						className="bg-teal-400 hover:bg-teal-600 text-white font-bold py-3 px-5 mx-4 text-2xl"
					>
						{this.props.running ? "Stop" : "Start"}
					</button>
					<button
						onClick={this.handleReset}
						className="bg-gray-600 hover:bg-gray-800 text-white font-bold py-3 px-5 mx-4 text-2xl"
					>
						Reset
					</button>
				</div>
				<h2 className="my-8 text-4xl">
					Tomato count: {this.props.tomatoCount}
				</h2>
			</div>
		);
	}
}
