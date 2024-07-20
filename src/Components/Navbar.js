import React from 'react';
import { Container, Row, Col } from "react-bootstrap";

import "../Assets/Styles/navbar.scss";

export default function Navbar() {
  return (
		<div className="bg-dark-green text-white position-sticky top-0" id="navbar">
			<Container>
				<Row className="h-100">
					<Col className="h-100">
						<a className="navbar-brand" href="#">
							<img src="assets/images/logo.png" alt="Bootstrap" height="65" />
						</a>
					</Col>
					<Col
						className="h-100 d-none d-sm-flex align-items-center justify-content-end"
						id="menu"
					>
						<span> About </span>
						<span> Gallery </span>
						<span> Contact </span>
						<span> Blog </span>
					</Col>
				</Row>
			</Container>
		</div>
	);
}
