import React from "react";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

export default function CheckboxLabels() {
	const [state, setState] = React.useState({
		checkedA: true,
		checkedB: false,
		checkedF: true,
		checkedG: true,
	});

	const handleChange = (event) => {
		setState({ ...state, [event.target.name]: event.target.checked });
	};

	return (
		<FormControlLabel
			control={
				<Checkbox
					id="auto-restart"
					checked={state.checkedB}
					onChange={handleChange}
					name="checkedB"
					color="primary"
				/>
			}
			label="Auto Restart"
		/>
	);
}
