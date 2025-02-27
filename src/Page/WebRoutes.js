import React from "react";
import {
	BrowserRouter as Router,
	Route,
	Routes,
	useLocation,
} from "react-router-dom";
import { useEffect } from "react";
// import { CSSTransition, TransitionGroup } from "react-transition-group";

// Pages
import Homepage from "./Homepage";
import Gallery from "./Gallery";
import Contact from "./Contact";
import Error from "./Error";
import Blog from "./Blog";
import Leholeh from "./Projects/Leholeh";
import Houset from "./Projects/Houset";
import Salesproduct from "./Projects/Salesproduct";
import Detikads from "./Projects/Detikads";

export default function WebRoutes() {
	const ScrollToTop = () => {
		const { pathname } = useLocation();

		useEffect(() => {
			window.scrollTo(0, 0); // Scroll ke atas saat rute berubah
		}, [pathname]);

		return null; // Tidak perlu merender elemen apa pun
	};

	return (
		<Router>
			<ScrollToTop />
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/gallery" element={<Gallery />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/blog" element={<Blog />} />
				<Route path="/salesproduct" element={<Salesproduct />} />
				<Route path="/leholeh" element={<Leholeh />} />
				<Route path="/houset" element={<Houset />} />
				<Route path="/detikads" element={<Detikads />} />
				<Route path="*" element={<Error />} />
			</Routes>
		</Router>
	);
}
