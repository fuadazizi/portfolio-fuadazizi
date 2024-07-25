import React, { useEffect, useState, useRef } from "react";
import { Row } from "react-bootstrap";

import "../Assets/Styles/showcase.scss";

import dots from "../Assets/Icons/dot-expand.svg";

export default function Showcase({ show, type }) {
	const [hasBeenInView, setHasBeenInView] = useState(false);
	const workShowcaseRef = useRef(null);

	useEffect(() => {
		const handleScroll = () => {
			if (workShowcaseRef.current) {
				const rect = workShowcaseRef.current.getBoundingClientRect();
				const isVisible =
					rect.top >= 0 && rect.bottom <= window.innerHeight + 50;
				if (isVisible) {
					setHasBeenInView(true);
				}
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [hasBeenInView]);

	return (
		<Row
			className={`work-showcase img-${type} d-flex align-items-center position-relative`}
		>
			<div className="p-0 position-relative">
				<div
					className="showcase-container bg-white d-flex flex-wrap position-relative flex-column"
					ref={workShowcaseRef}
					style={{
						right: hasBeenInView && type == "left" ? "10px" : "",
						left: hasBeenInView && type == "right" ? "10px" : "",
						bottom: hasBeenInView ? "10px" : "",
					}}
				>
					<p className="showcase-title bn-regular color-indigo bg-white position-absolute">
						{show["title"]}
					</p>
					<p className="showcase-desc fs-regular">
						<span dangerouslySetInnerHTML={{ __html: show["desc"] }} />
					</p>
					<div className="showcase-footer position-absolute w-100 end-0 bottom-0 d-flex">
						<div className="showcase-tone position-relative m-auto d-flex">
							{show["tone"].map((tone, index) => (
								<span
									className="tone rounded-circle"
									style={{ background: tone }}
									key={index}
								></span>
							))}
						</div>
						<img
							className=""
							src={show["logo"]}
							alt={show["title"]}
							height="100px"
						/>
					</div>
				</div>
				<div className="back-shadow position-absolute h-100 w-100 start-0 top-0 bg-dark-green">
					{/* <div className="side-button bn-regular bg-dark-green position-absolute d-flex flex-column justify-content-center text-white h-100 text-center">
						<a> VIEW GALLERY </a>
						<img src={dots} alt="dots" width="15px" />
					</div> */}
				</div>
			</div>
		</Row>
	);
}
