import React, { useEffect, useState } from "react";
import { Container, Row, Col, Ratio } from "react-bootstrap";

// Internal component
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import ExpCard from "../Components/ExpCard";
import Showcase from "../Components/Showcase";
import SkillCard from "../Components/SkillCard";

// Styles
import "../Assets/Styles/homepage.scss";

// JSON
import experiencesData from "../Assets/Json/experiences.json";
import showcasesData from "../Assets/Json/showcases.json";
import skillsData from "../Assets/Json/skills.json";

// Images
import computer from "../Assets/Icons/computer.svg";

export default function Homepage() {
	return (
		<>
			<Navbar />
			<div className="super-container d-flex" id="hero">
				<Container className="d-flex flex-col justify-content-center flex-column w-100 p-0">
					<Row className="h-100">
						<Col className="d-flex justify-content-center flex-column">
							<h1 className="fs-bold color-indigo">Greetings!</h1>
							<h5 className="fs-regular text-black">
								My name is <span className="fs-medium">Nur Fuad Azizi</span>
							</h5>
							<p className="fs-light text-black">
								A passionate programmer and web developer
							</p>
						</Col>
						{/* <Col className="d-flex justify-content-end align-items-end">
							<img src={computer} alt="computer" width="200px" />
						</Col> */}
					</Row>
				</Container>
			</div>

			<div className="d-flex justify-content-center" id="profile">
				<Container className="d-flex flex-col justify-content-center flex-column">
					<Row className="justify-content-center m-0">
						<Col xs={12} md={7} className="mb-4 px-0">
							<h3>Brief Profile of Me</h3>
							<p>
								I started code at 18 in college. I have loved coding since then.
								I joined a startup Leholeh Indonesia as a part timer to help
								improve my skills. Then I joined startup Houset as a frontend
								developer. My career with frontend developer started from it. I
								have honed my web develop skills like HTML, CSS, Javascript, and
								PHP. I also well-versed in frameworks such as React.js, Laravel,
								TailwindCSS, and Bootstrap.
								<br />
								<br />I am proficient in various design tools, including Adobe
								Photoshop, Adobe Illustrator, and Figma, as well as video
								editing like Adobe Premiere Pro and Filmora.
							</p>
						</Col>
						<Col
							xs={6}
							md={5}
							className="d-flex justify-content-center align-items-center flex-wrap"
						>
							<div className="rounded-circle w-100 m-0">
								{/* <img
									src="assets/images/fuad.png"
									alt="photo-fuad"
								/> */}
							</div>
						</Col>
					</Row>
				</Container>
			</div>

			<div className="super-container" id="experiences">
				<Container fluid>
					<div className="text-center">
						<h2>My Experience</h2>
					</div>
					<Container className="card-container d-flex flex-row justify-content-center p-0 mx-auto">
						<Row>
							{experiencesData.map((exp, index) => (
								<Col
									xs={12}
									md={6}
									xxl={3}
									className="d-flex justify-content-center"
									key={index}
								>
									<ExpCard key={index} exp={exp} />
								</Col>
							))}
						</Row>
					</Container>
				</Container>
			</div>

			<div className="d-flex justify-content-center" id="works">
				<Container className="d-flex flex-column">
					<h3>My Works</h3>
					{showcasesData.map((show, index) => (
						<Showcase
							key={index}
							show={show}
							type={index % 2 === 0 ? "right" : "left"}
						/>
					))}
				</Container>
			</div>
			<div
				className="super-container d-flex justify-content-center"
				id="hobbies"
			>
				<Container className="p-0">
					<Row>
						<h3> What Else? </h3>
						<p className="fs-regular mt-2">
							I really love coding and playing games to release my stress. Well,
							coding is also a game to me, so it is. Sometimes, I watch movies
							or anime while eating. <b>"Tenet"</b> and
							<b>"Who Am I: No System is Safe"</b> is my favorite movies of all
							times, while <b>"Dota 2"</b> is my favorite games. I also do a
							little bit workout on my free time.
							<br /> <br />I like to follow developments in technology that are
							currently being developed. I also have an interest in the
							development of AI which is accelerating very quickly. I can't deny
							that a lot of my work is helped by AI. I bet, people who developed
							AI is a very genius. I hope I can involve in that too.
						</p>
					</Row>
					{/* <Row className="mt-4">
						<Col>
							<img src="assets/images/tenet.jpg" alt="tenet" />
						</Col>
						<Col className="align-content-end text-end">
							<img src="assets/images/dota.jpg" alt="dota" />
						</Col>
					</Row> */}
				</Container>
			</div>

			<div id="skills">
				<Container className="text-center">
					<Row>
						<h2>Things I'm Good at</h2>
					</Row>
					<Row className="card-container justify-content-center">
						{skillsData.map((skill, index) => (
							<Col
								xs={6}
								md={4}
								lg={3}
								className="mb-5 d-flex justify-content-center"
								key={index}
							>
								<SkillCard key={index} skill={skill} />
							</Col>
						))}
					</Row>
				</Container>
			</div>
			<Footer />
		</>
	);
}
