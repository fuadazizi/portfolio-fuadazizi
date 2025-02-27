import React from 'react'
import { Container, Row, Col } from "react-bootstrap";

import "../../Assets/Styles/page/leholeh.scss";

// Pages
import GalleryFrame from '../../Components/GalleryFrame'

// Components
import PopupCard from "../../Components/PopupCard";	
import PickColor from "../../Components/PickColor";

export default function Leholeh() {
    return (
        <div id="leholeh-gallery">
            <GalleryFrame
                title="LEHOLEH"
                subtitle="Leholeh | 2021"
                logo="./assets/images/logos/leholeh.png"
            >
				<div className="technologies">
					<h2 className="gallery-section-title"> Technologies </h2>
					<div className="tech-body">
						<Row>
							<Col xs={4} md={2}>
								<img src="assets/images/skills/photoshop.png" width="125px" />
							</Col>
							<Col className="d-flex align-items-center">
								<p>
									I used <b>Photoshop</b> as designing tools to create creative graphic design,
                                    like simple logos and shapes for the assets.
								</p>
							</Col>
						</Row>
						<Row>
							<Col xs={4} md={2}>
								<img src="assets/images/skills/figma.png" width="125px" />
							</Col>
							<Col className="d-flex align-items-center">
								<p>
                                    After creating the assets, I transformed the design into a UI layout using Figma. 
                                    The platform was incredibly helpful, as it is easy to use and beginner-friendly
								</p>
							</Col>
						</Row>
					</div>
				</div>
				<hr />
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
				</div>
            </GalleryFrame>
        </div>
    )
}
