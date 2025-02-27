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

export default function Salesproduct() {
	return (
		<div id="sp-gallery">
			<GalleryFrame
				title="DETIK ADS"
				subtitle="Detikcom | 2022 - 2024"
				logo="./assets/images/logos/detik.png"
			>
				<div className="ideas">
					<h2 className="gallery-section-title"> Ideas </h2>
					<p className="fs-regular text-justify">
					This is some of my ads project while I work in Detikcom. 
					Ads design/banner are created as an ads slot so it can be used by anyone 
					who wants to place advertisement on detikcom website. 
					Ads design are required strong javascript skills, intermediate html, and also css.
					<br/><br/>
					The design I developed for examples are medium rectangle, parallax, static detail, 
					immersive skin, billboard, and many more. Ads designer team needs to keep up to date 
					to any ads banner development that are currently on trending.
					</p>
					<Row className="d-flex justify-content-center gy-4">
						<Col xs={10} lg={6}>
							<PopupCard type="right">
								<img
									src="assets/images/gallery/detik1.png"
									alt="detik1"
									width="100%"
								/>
							</PopupCard>
						</Col>
						<Col xs={10} lg={6}>
							<PopupCard type="left">
								<img
									src="assets/images/gallery/detik2.png"
									alt="detik2"
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
						The website is a comprehensive resource designed to support other
						teams with information related to Detikcom's inventory and sales. It
						includes essential tools and data such as Rate Cards, Media Kits,
						Visual Stories, Insights, Banners and Preview Links, Channel
						Profiles, Daily Impressions, Microsite Success Stories, Data
						Analysts Center, Rules & Specifications, and various Forms.
						<br />
						<br />
						Its content also updated regularly, from daily to weekly, ensuring
						that teams have access to the latest information and news. This
						dynamic approach keeps everyone informed and up-to-date with the
						most relevant and current data. Current active user using this
						website about <b>over 200</b>.
					</p>
				</div>
				<hr />
				<div className="technologies">
					<h2 className="gallery-section-title"> Technologies </h2>
					<div className="tech-body">
						<Row>
							<Col xs={4} md={2}>
								<img src="assets/images/skills/laravel.png" width="125px" />
							</Col>
							<Col className="d-flex align-items-center">
								<p>
									I used <b>Laravel</b> for managing both the frontend and backend,
									thanks to its full-stack capabilities and ease of use.
									Integrating Material Design Bootstrap provided a modern,
									responsive design.
								</p>
							</Col>
						</Row>
						<Row>
							<Col xs={4} md={2}>
								<img src="assets/images/skills/mysql.png" width="125px" />
							</Col>
							<Col className="d-flex align-items-center">
								<p>
									<b>MySQL</b> was chosen as the database management system for its
									compatibility with Laravel. It offers reliable data storage
									and efficient retrieval, enhancing database operations.
								</p>
							</Col>
						</Row>
						<Row>
							<Col xs={4} md={2}>
								<img src="assets/images/skills/hostinger.png" width="125px" />
							</Col>
							<Col className="d-flex align-items-center">
								<p>
									I selected <b>Hostinger</b> for hosting due to its support for
									Laravel and MySQL. It ensures reliable performance, excellent
									uptime, and a user-friendly control panel, making maintenance
									straightforward.
								</p>
							</Col>
						</Row>
					</div>
				</div>
				{/* <hr />
				<div className="tone">
					<h2 className="gallery-section-title"> Tone Colors </h2>
					<p className="fs-regular text-justify">
						The website has <b>material design</b> style, with bordered radius, simple
						design, not much too stand out shape. The tone color mostly with <b>purple</b> and <b>blue</b>. 
						Purple chose because it looked like Detikcom color, blue and purple. 
						After that, then determine its descendant.
					</p>
					<PickColor
						mainColor="#8948FE"
						descendantColor={[
							"#9C28B1",
							"#483D8B",
							"#026ED3",
							"#F93154",
							"#FFFFFF",
							"#3974FF",
						]}
					/>
					<div className="d-flex mb-5 position-relative">
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
					</div>
				</div> */}
				{/* <hr />
				<div className="fonts">
					<h2 className="gallery-section-title"> Fonts </h2>
					<Row>
						<Col>
							<p className="m-medium text-center mb-2"> Montserrat Medium </p>
							<p className="m-regular text-center mb-2"> Montserrat Regular </p>
							<p className="m-light text-center mb-2"> Montserrat Light </p>
						</Col>
					</Row>
				</div> */}
			</GalleryFrame>
		</div>
	);
}
