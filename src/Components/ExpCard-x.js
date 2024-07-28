import React, { useState } from 'react';

import education from "../Assets/Icons/education.svg";
import work from "../Assets/Icons/work.svg";

import "../Assets/Styles/expcard.scss";

export default function ExpCard({ exp }) {
	const [isHolding, setIsHolding] = useState(false);
	const [isFlipped, setIsFlipped] = useState(false);

	const handleMouseDown = () => {
		setIsHolding(true);
	};

	const handleMouseUp = () => {
		setIsHolding(false);
	};

	const handleClick = () => {
		setIsFlipped((prev) => !prev);
	};

	return (
		<div
			className={`exp-card card-${exp["type"]} ${
				isHolding ? "hold-card" : ""
			} ${isFlipped ? "flip-card" : ""}`}
			onMouseDown={handleMouseDown}
			onMouseUp={handleMouseUp}
			onClick={handleClick}
		>
			<div className="card-back d-flex justify-content-center align-items-center">
				{exp["type"] === "education" ? (
					<img
						src={education}
						alt="education"
						width="125px"
					/>
				) : (
					<img src={work} alt="work" width="120px" />
				)}
			</div>
			<div className="card-front position-relative">
				<div className="mini-icon position-absolute">
					{exp["type"] === "education" ? (
						<img
							src={education}
							alt="education"
							width="30px"
						/>
					) : (
						<img src={work} alt="work" width="30px" />
					)}
				</div>
				<div className="content d-flex flex-column align-items-center justify-content-between h-100">
					<img src={exp["logo"]} alt={exp["title"]} height="120px" />
					<div className="text-center">
						<p className="card-title fs-bold">{exp["title"]}</p>
						<p className="card-info fs-regular color-dark-green">
							{exp["role"]}
						</p>
					</div>
					<p className="card-desc fs-regular">{exp["desc"]}</p>
				</div>
			</div>
		</div>
	);
}
