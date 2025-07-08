import React from "react";
import { Row, Col } from "react-bootstrap";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

import "../Assets/Styles/page/contact.scss";

// Images
import LinkedIn from "../Assets/Icons/linkedin-color.png";
import Instagram from "../Assets/Icons/instagram-color.png";
import Github from "../Assets/Icons/github-color.png";
import Facebook from "../Assets/Icons/facebook-color.png";
import Gmail from "../Assets/Icons/gmail-color.png";
import WhatsApp from "../Assets/Icons/whatsapp-color.png";
import Medium from "../Assets/Icons/medium-black.png";

export default function Contact() {
	const SocmedCard = ({ icon, text, link }) => {
		return (
			<Col xs={10} sm={6} lg={4} >
				<a
					className="socmedCard d-flex align-items-center justify-content-center w-100 transition-03"
					href={link}
					target="_blank"
				>
					<img src={icon} alt={text} width="50px" />
					<p className="text-black">{text}</p>
				</a>
			</Col>
		);
	};
	return (
		<>
			<Navbar />
			<div id="contact">
				<div className="header-block super-container">
					<div className="container pb-0">
						<h1 className="o-bold color-black"> CONTACT ME </h1>
						<hr />
						<p className="fs-regular color-black-green">
							Easy reach me on many social media or personal contacts.
						</p>
					</div>
				</div>
				<div className="body-block container m-auto px-4">
					<Row>
						<Col xs={12}>
							<h2 className="fs-medium color-dark-green">Social Media</h2>
						</Col>
						<SocmedCard
							icon={LinkedIn}
							text="linkedin.com/in/fuadazizi-n"
							link="https://linkedin.com/in/fuadazizi-n"
						/>
						<SocmedCard
							icon={Instagram}
							text="instagram.com/fuadazizi.n"
							link="https://instagram.com/fuadazizi.n"
						/>
						<SocmedCard
							icon={Github}
							text="github.com/fuadazizi"
							link="https://github.com/fuadazizi"
						/>

						<SocmedCard
							icon={Medium}
							text="medium.com/@nurfuadazizi"
							link="https://medium.com/@nurfuadazizi"
						/>						
					</Row>
					<Row>
						<h2 className="fs-medium color-dark-green">Personal Contacts</h2>
						<SocmedCard
							icon={Gmail}
							text="nurfuadazizi@gmail.com"
							link="mailto:nfuadazizi@gmail.com?subject=Let's Build Something Great Together!"
						/>
						<SocmedCard
							icon={WhatsApp}
							text="+62 821-1765-0821"
							link="https://wa.me/+6282117650821"
						/>
					</Row>
				</div>
			</div>
			<Footer />
		</>
	);
}
