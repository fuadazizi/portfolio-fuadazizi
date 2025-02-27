import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import "../Assets/Styles/page/gallery-frame.scss";

// Components
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function GalleryFrame({ title, subtitle, logo, children }) {
	return (
		<div id="gallery-frame">
			<Navbar />
			<div className="gallery-header super-container pb-0 d-flex justify-content-center">
				<Container className="w-100 p-0 d-flex justify-content-between">
					{/* <Row> */}
						<Col className="d-flex flex-column justify-content-center">
							<h1 className="o-bold color-black-green">{title}</h1>
							<hr />
							<span className="o-regular color-dark-grey">{subtitle}</span>
						</Col>
						<Col className="d-flex align-items-center flex-row-reverse">
							<img src={logo} alt={title} />
						</Col>
					{/* </Row> */}
				</Container>
			</div>
			<div className="gallery-body pb-0 d-flex justify-content-center">
				<Container className="w-100">
					{children}
				</Container>
			</div>
			<Footer />
		</div>
	);
}
