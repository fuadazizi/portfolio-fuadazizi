import React from 'react'

import "../Assets/Styles/chart.scss";

export default function Chart({skill}) {
  return (
		<div id="skill-chart">
			<div className="img text-start">
				<img src={skill['image']} alt={skill['skill']} />
			</div>
			<div className="meter">
				<div className="fillbar h-100 bg-bolder-green" style={{ width: `${skill['meter']}%`}}></div>
			</div>
		</div>
	);
}
