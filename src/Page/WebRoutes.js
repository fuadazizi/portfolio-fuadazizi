import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Pages
import Homepage from "./Homepage";
import Gallery from "./Gallery";
import Error from "./Error";

export default function WebRoutes() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Homepage />}></Route>
				<Route path="/gallery" element={<Gallery />}></Route>
				<Route path="*" element={<Error />}></Route>
			</Routes>
		</Router>
	);
}
