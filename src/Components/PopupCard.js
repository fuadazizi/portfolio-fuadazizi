import React, { useEffect, useState, useRef } from "react";

// CSS
import "../Assets/Styles/component/popupcard.scss";

export default function PopupCard({type, children}) {
	const [hasBeenInView, setHasBeenInView] = useState(false);
	const popupRef = useRef(null);

	useEffect(() => {
		const handleScroll = () => {
			if (popupRef.current) {
				const rect = popupRef.current.getBoundingClientRect();
				if (rect.top <= window.innerHeight - 400) {
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
		<div className={`popupcard img-${type} ${hasBeenInView ? "doPopup" : ""} position-relative`}>
			<div
				className="content-body transition-03 bg-white d-flex flex-wrap position-relative flex-column"
				ref={popupRef}
			>
				<div className="content-overlay bg-white w-100 h-100">
					{children}
				</div>
			</div>
			{/* <div className="back-shadow transition-03 position-absolute h-100 w-100 top-0"></div> */}
		</div>
	);
}
