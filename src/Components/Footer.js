import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../Assets/Styles/component/footer.scss";

export default function Footer() {
	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<>
			<div className="bg-dark-green" id="go-top">
				<div className="text-center text-white" onClick={scrollToTop}>
					<FontAwesomeIcon icon="fa-solid fa-angles-up" />
					<span className="fs-medium">Click to back to top</span>
					<FontAwesomeIcon icon="fa-solid fa-angles-up" />
				</div>
			</div>
			<div
				className="bg-black-green d-flex justify-content-center w-100"
				id="footer"
			>
				<Container className="text-white w-100">
					<Row className="topper fs-regular justify-content-end text-end">
						<p>Have something in mind?</p>
						<p> Let's collaborate! </p>
					</Row>
					<Row className="downer fs-regular">
						<Col className="d-flex align-items-center" id="copyright">
							<p className="color-dark-grey">© 2024 Nur Fuad Azizi</p>
						</Col>
						<Col className="d-flex" id="socmed">
							<span>
								<a className="text-white" href="https://id.linkedin.com/in/fuad-azizi">LinkedIn</a>
							</span>
							<span>
								<a className="text-white" href="https://instagram.com/fuadazizi.n">Instagram</a>
							</span>
							<span>
								<a className="text-white" href="mailto:nfuadazizi@gmail.com">Email</a>
							</span>
							<span>
								<a className="text-white" href="https://wa.me/+6282117650821">WhatsApp</a>
							</span>
						</Col>
					</Row>
				</Container>
			</div>
		</>
	);
}
