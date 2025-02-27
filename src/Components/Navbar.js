import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

import "../Assets/Styles/component/navbar.scss";

import bar from "../Assets/Icons/bar.svg";

export default function Navbar() {
	const [expand, setExpand] = useState(false);

	const toggleNav = () => {
		setExpand(!expand);
	}

	return (
		<div
			className={`bg-dark-green text-white position-fixed d-flex justify-content-center w-100 overflow-hidden ${
				expand ? "cross" : ""
			}`}
			id="navbar"
		>
			<Container className="p-0 w-100 d-flex flex-column">
				<Row>
					<Col>
						<Link className="navbar-brand" to="/">
							<img src="logo.png" alt="Bootstrap" height="65" />
						</Link>
					</Col>
					<Col
						className="align-items-center justify-content-end"
						id="menu-desktop"
					>
						<a href="/#profile">
							<span> Profile </span>
						</a>
						<a href="/#experiences">
							<span> Experiences </span>
						</a>
						<a href="/#works">
							<span> Works </span>
						</a>
						<a href="/#hobbies">
							<span> Things </span>
						</a>
						<Link to="/contact">
							<span>Contact</span>
						</Link>
						{/* 
						<Link to="/gallery">
							<span>Gallery</span>
						</Link>
						<Link to="/blog">
							<span>Blog</span>
						</Link> 
						*/}
					</Col>
					<Col className="flex-column justify-content-center" id="menu-expand">
						<button className="flex-column align-items-end" onClick={toggleNav}>
							<span className="group-bar">
								<img className="bar-1 float-right" src={bar} alt="bars" />
								{/* <img className="bar-12 float-right" src={bar} alt="bars" /> */}
							</span>
							<span className="group-bar">
								<img className="bar-21 float-right" src={bar} alt="bars" />
								<img className="bar-22 float-right" src={bar} alt="bars" />
							</span>
							<span className="group-bar">
								<img className="bar-3 float-right" src={bar} alt="bars" />
								{/* <img className="bar-32 float-right" src={bar} alt="bars" /> */}
							</span>
						</button>
					</Col>
				</Row>
				<Row>
					<Col
						className="flex-column align-items-center justify-content-center"
						id="menu-mobile"
					>
						{/* <a href="#profile">
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
						</a> */}
						<Link to="/gallery">
							<span>Gallery</span>
						</Link>
						<Link to="/contact">
							<span>Contact</span>
						</Link>
						<Link to="/blog">
							<span>Blog</span>
						</Link>
					</Col>
				</Row>
			</Container>
		</div>
	);
}
