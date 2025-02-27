import React from "react";

import "../Assets/Styles/component/pickcolor.scss";

export default function PickColor({ mainColor, descendantColor }) {
	return (
		<div className="pick-color d-flex justify-content-evenly">
			<div className="main-color d-flex align-items-center">
				<span>Main Color</span>
				<div className="color-circle position-relative">
					<div
						className="rounded-circle transition-03"
						style={{ backgroundColor: mainColor }}
					></div>
					<p className="position-absolute d-flex justify-content-center align-items-center w-100 h-100 top-0 o-medium color-light-grey transition-03"> {mainColor} </p>
				</div>
			</div>
			<div className="descendant-color d-flex align-items-center">
				<span>Descendant Color</span>
				<div className="color-group">
					{descendantColor.map((color, index) => (
						<div className="color-circle position-relative">
							<div
								key={index}
								className="rounded-circle transition-03"
								style={{ backgroundColor: color }}
							></div>
							<p className="position-absolute d-flex justify-content-center align-items-center w-100 h-100 top-0 o-medium color-light-grey transition-03"> {color} </p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
