import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import "../../Assets/Styles/page/salesproduct.scss";

// Pages
import GalleryFrame from "../../Components/GalleryFrame";

// Components
import PopupCard from "../../Components/PopupCard";	
import PickColor from "../../Components/PickColor";

// Images
import spbar1 from "../../Assets/Icons/sp-bar-color_1.svg";
import spbar2 from "../../Assets/Icons/sp-bar-color_2.svg";
import spbar3 from "../../Assets/Icons/sp-bar-color_3.svg";
import spbar4 from "../../Assets/Icons/sp-bar-color_4.svg";

export default function Houset() {
	return (
		<div id="sp-gallery">
			<GalleryFrame
				title="HOUSET"
				subtitle="Houset | 2021 - 2022"
				logo="./assets/images/logos/houset.png"
			>
				<div className="ideas">
					<h2 className="gallery-section-title"> Ideas </h2>
					<p className="fs-regular text-justify">
                    This website designed using Framework ReactJS and Bootstrap. 
                    The frontend design adapted from UI designer team. 
                    While designing this web, my team adapted Agile framework method to develop this website.
                    Several features added to this website include login & register, see catalogue, 
                    cart system, payment gateway, and design with 3d canvas.
                    The tone color I used in this website is mostly green and white.
					</p>
					<Row className="d-flex justify-content-center gy-4">
						<Col xs={10} lg={6}>
							<PopupCard type="right">
								<img
									src="assets/images/gallery/houset1.jpg"
									alt="houset1"
									width="100%"
								/>
							</PopupCard>
						</Col>
						<Col xs={10} lg={6}>
							<PopupCard type="left">
								<img
									src="assets/images/gallery/houset2.jpg"
									alt="houset2"
									width="100%"
								/>
							</PopupCard>
						</Col>
					</Row>
				</div>
				<hr />
				<div className="features">
					<h2 className="gallery-section-title"> Features </h2>
					<p className="fs-regular text-justify">
                        From the landing page, user can look for information on what is this product offer. 
                        The main feature of the website offer is <b> look catalogue</b>, <b> create 3d design</b>, <b> payment </b> and <b> checkout </b>.
						<br />
						<br />
						User can see what is the product of Houset offer.
                        It contains product price, specification, style, picture showcase, product material, and many more.
					</p>
				</div>
				<hr />
				<div className="technologies">
					<h2 className="gallery-section-title"> Technologies </h2>
					<div className="tech-body">
						<Row>
							<Col xs={4} md={2}>
								<img src="assets/images/skills/react.png" width="110px" />
							</Col>
							<Col className="d-flex align-items-center">
								<p>
                                    I chose <b>React</b> for its focus on frontend development, 
                                    enabling efficient website performance and user experience.
								</p>
							</Col>
						</Row>
						<Row>
							<Col xs={4} md={2}>
								<img src="assets/images/skills/agile.png" width="120px" />
							</Col>
							<Col className="d-flex align-items-center">
								<p>
                                    My team uses the <b>Agile Scrum</b> framework, which helps us 
                                    prioritize tasks effectively and maintain focus on what needs to be done first. 
								</p>
							</Col>
						</Row>
						<Row>
							<Col xs={4} md={2}>
								<img src="assets/images/skills/figma.png" width="110px" />
							</Col>
							<Col className="d-flex align-items-center">
								<p>
                                    We use <b>Figma</b> to help frontend developers and UI designers work together, 
                                    making it easier to maintain website designs and understand the overall flow.
								</p>
							</Col>
						</Row>
					</div>
				</div>
				<hr />
				<div className="tone">
					<h2 className="gallery-section-title"> Tone Colors </h2>
					<p className="fs-regular text-justify">
						The website has simple and easy to catch design. This make the website more comfy and the color 
                        match with the brand identity. The tone color mostly with <b>green</b> and <b>pastel mint</b>. 
					</p>
					<PickColor
						mainColor="#055053"
						descendantColor={[
							"#F6FBF8",
							"#D9F7F9",
							"#E5FACF",
						]}
					/>
					{/* <div className="d-flex mb-5 position-relative">
						<PopupCard type="right">
							<img
								src="assets/images/gallery/sp3.png"
								alt="sp3"
								width="500px"
							/>
						</PopupCard>
						<img src={spbar1} alt="" width="200px" id="spbar1"/>
						<img src={spbar2} alt="" height="240px" id="spbar2"/>
					</div>
					<div className="d-flex flex-row-reverse">
						<PopupCard type="left">
							<img
								src="assets/images/gallery/sp4.png"
								alt="sp4"
								width="500px"
							/>
						</PopupCard>
						<img src={spbar3} alt="" height="200px" id="spbar3"/>
						<img src={spbar4} alt="" width="240px" id="spbar4"/>
					</div> */}
				</div>
				<hr />
				<div className="fonts">
					<h2 className="gallery-section-title"> Fonts </h2>
					<Row>
						<Col>
							<p className="i-light text-center mb-2"> Inter Light </p>
							<p className="i-regular text-center mb-2"> Inter Regular </p>
							<p className="i-medium text-center mb-2"> Inter Medium </p>
							<p className="i-bold text-center mb-2"> Inter Bold </p>
						</Col>
					</Row>
				</div>
			</GalleryFrame>
		</div>
	);
}