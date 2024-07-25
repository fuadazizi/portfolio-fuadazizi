import React from "react";
import { Col, Ratio } from "react-bootstrap";

import "../Assets/Styles/skillcard.scss";

export default function SkillCard({ skill }) {
	return (
		<div className="skill-card position-relative">
			<Ratio className="ratio-1x1 bg-light-blue" aspectRatio="1x1">
				<img src={skill["image"]} alt={skill["skill"]} className="p-3" />
			</Ratio>
			<p className="position-absolute d-flex justify-content-center align-items-center w-100 h-100 top-0 o-medium text-white"> {skill["skill"]} </p>
		</div>
	);
}
