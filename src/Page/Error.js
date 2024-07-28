import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";

// Components
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

export default function Error() {
	let navigate = useNavigate();
	return (
		<>
			<Navbar />
			<Container className="m-auto">
				<div className="not-found text-center">
					<p> Sorry, the page you requested are not found. </p>
					<img src="assets/images/not-found.png" alt="not-found" />
					<p> The page's still under construction or has been moved. </p>
					<button className="fs-regular mt-3" onClick={() => navigate(-1)}>
						<FontAwesomeIcon icon="fa-solid fa-angles-left" className="me-1"/>
						Return
					</button>
				</div>
			</Container>
			{/* <Footer /> */}
		</>
	);
}
