import React, { useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Row } from "react-bootstrap";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Component
import PopupCard from "./PopupCard";

// CSS
import "../Assets/Styles/component/showcase.scss";

export default function Showcase({ show, type, setLoading }) {
	const [hasBeenInView, setHasBeenInView] = useState(false);
	const [viewGallery, setViewGallery] = useState(false);
  	const navigate = useNavigate();
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

	function handleViewGallery() {
		setViewGallery(!viewGallery);
	}

	const handleClick = (path) => {
		setLoading(true);
		document.documentElement.style.scrollBehavior = "auto";

		setTimeout(() => {
			window.scrollTo(0, 0);
			setTimeout(() => {
				document.documentElement.style.scrollBehavior = "smooth";
				navigate(path);
				setLoading(false);
			}, 1000);
		}, 300);
	};

	return (
		<Row
			className={`work-showcase img-${type} d-flex align-items-center position-relative page`}
		>
			<div className="p-0 position-relative">
				{/* <div
					className="showcase-container transition-03 bg-white d-flex flex-wrap position-relative flex-column"
					ref={workShowcaseRef}
					style={{
						right: hasBeenInView && type === "left" ? "10px" : "",
						left: hasBeenInView && type === "right" ? "10px" : "",
						bottom: hasBeenInView ? "10px" : "",
					}}
				> */}
				<PopupCard type={type}>
					<div className="showcase-cta position-absolute">
						<button className="bn-regular color-dark-green" onClick={() => handleClick(`/${show["link"]}`)}>
							<span className="" onClick={handleViewGallery}> VIEW GALLERY </span>
						</button>
					</div>
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
				</PopupCard>
				{/* </div> */}
				{/* <div className="back-shadow transition-03 bg-dark-green position-absolute h-100 w-100 top-0"></div> */}
			</div>
		</Row>
	);
}
