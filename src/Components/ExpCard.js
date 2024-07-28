import React from "react";

import "../Assets/Styles/expcard.scss";

export default function ExpCard({ exp }) {
	return (
		<div className="experience-container d-flex">
			<div className="thumbnail d-flex">
				<img
					src={exp["logo"]}
					alt={exp["title"]}
					className="m-auto"
					width="125px"
					height="125px"
				/>
			</div>
			<div className="content d-flex flex-column justify-content-center">
				<div className="title">
					<h4 className="fs-bold"> {exp["title"]} </h4>
					<hr className="horzontal-line mt-0"></hr>
				</div>
				<p className="color-dark-green"> {exp["role"]} </p>
				<div className="desktop">
					<div className="description">
						<p> {exp["desc"]}</p>
					</div>
					<div className="tags d-flex flex-wrap">
						{exp["tags"].map((tag, index) => (
							<div
								className="tag bg-bold-green text-white rounded-pill mb-2"
								key={index}
							>
								{tag}
							</div>
						))}
					</div>
				</div>
			</div>
			<div className="mobile">
				<div className="description">
					<p> {exp["desc"]}</p>
				</div>
				<div className="tags d-flex flex-wrap">
					{exp["tags"].map((tag, index) => (
						<div
							className="tag bg-bold-green text-white rounded-pill mb-2"
							key={index}
						>
							{tag}
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
