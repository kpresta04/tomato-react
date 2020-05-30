import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
	root: {
		"& > *": {
			margin: theme.spacing(1),
			width: "15ch",
		},
	},
}));

export default function BasicTextFields(props) {
	const classes = useStyles();

	useEffect(() => {
		document.querySelector("#outlined-basic").min = "1";
	}, []);

	return (
		<form
			onSubmit={(e) => e.preventDefault()}
			className={classes.root}
			noValidate
			autoComplete="off"
		>
			<TextField
				id="outlined-basic"
				label="Timer minutes"
				variant="outlined"
				type="number"
				defaultValue="25"
				onChange={props.handleMinutesChange}
			/>
		</form>
	);
}
