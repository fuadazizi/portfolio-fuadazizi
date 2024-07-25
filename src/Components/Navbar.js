import React from 'react';
import { Container, Row, Col } from "react-bootstrap";

import "../Assets/Styles/navbar.scss";

export default function Navbar() {
  return (
		<div className="bg-dark-green text-white position-sticky top-0" id="navbar">
			<Container className="p-0">
				<Row className="h-100">
					<Col className="h-100">
						<a className="navbar-brand" href="#">
							<img src="logo.png" alt="Bootstrap" height="65" />
						</a>
					</Col>
					<Col
						className="h-100 d-none d-sm-flex align-items-center justify-content-end"
						id="menu"
					>
						<a href="#profile">
							<span> Profile </span>
						</a>
						<a href="#experiences">
							<span> Experiences </span>
						</a>
						<a href="#works">
							<span> Works </span>
						</a>
						<a href="#hobbies">
							<span> Things </span>
						</a>
					</Col>
				</Row>
			</Container>
		</div>
	);
}
