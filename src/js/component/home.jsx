import React from "react";
import PropTypes from "prop-types";

import { library } from '@fortawesome/fontawesome-svg-core'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(faClock)

const style = {
	general: {
		backgroundColor: "black",
		color: "white",
		display: "flex",
		justifyContent: "center"
	},

	element: {
		padding: "10px",
		margin: "10px",
		fontSize: "100px"
		}
}


//create your first component
function SecondsCounter(props) {
	return (
		<main className="container-flex">
			<div style={style.general}>
				<div style={style.element}><FontAwesomeIcon icon={faClock} size="1x" /></div>
				<div style={style.element}>{props.Six}</div>
				<div style={style.element}>{props.Five}</div>
				<div style={style.element}>{props.Four}</div>
				<div style={style.element}>{props.Three}</div>
				<div style={style.element}>{props.Two}</div>
				<div style={style.element}>{props.One}</div>
			</div>
		</main >
					);
				}

SecondsCounter.propTypes = {
	style: PropTypes.string,
	One: PropTypes.number,
	Two: PropTypes.number,
	Three: PropTypes.number,
	Four: PropTypes.number,
	Five: PropTypes.number,
	Six: PropTypes.number
}

export default SecondsCounter;
