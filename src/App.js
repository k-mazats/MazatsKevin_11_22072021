import "./App.css";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";

import Header from "./components/Header";
import Footer from "./components/Footer";

import KasaRouter from "./components/KasaRouter";

import rentals from "./datas/logements.json";

class App extends React.Component {
	render() {
		return (
			<div className="App">
				<Router>
					<ScrollToTop />
					<Header></Header>
					<KasaRouter rentals={rentals}></KasaRouter>
					<Footer></Footer>
				</Router>
			</div>
		);
	}
}

export default App;
