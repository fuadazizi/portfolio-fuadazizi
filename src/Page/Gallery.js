import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import "../Assets/Styles/page/gallery.scss";

// Components
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

export default function Gallery() {
	return (
		<>
			<Navbar />
			<Container className="" id="gallery-page">
			</Container>
			<Footer />
		</>
	);
}
