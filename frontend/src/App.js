import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./components/UI/LoginPage";
import Home from "./Home";

const App = () => {
	const foobar = () => {};

	return (
		<BrowserRouter>
			<Routes>
				<Route path="login" element={<LoginPage />} />
				<Route path="/*" element={<Home />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
