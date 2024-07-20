import React from 'react'
import { Container, Row } from "react-bootstrap";

import "../Assets/Styles/showcase.scss";

export default function Showcase({ show, type }) {
  return (
		<Row className={`work-showcase img-${type} d-flex align-items-center`}>
			<div className="detail-showcase d-flex flex-wrap">
				<p className="showcase-title bn-regular color-indigo"> {show['title']} </p>
				<p className="showcase-desc fs-regular"> <span dangerouslySetInnerHTML={{ __html: show['desc'] }} /> </p>
			</div>
			<div className="cover-showcase position-relative">
				<img src={show['cover']} alt={show['title']} />
				<div className="back-shadow position-absolute"></div>
			</div>
		</Row>
	);
}
