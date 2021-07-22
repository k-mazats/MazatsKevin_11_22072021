import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from './pages/Home'
import Rental from "./pages/Rental";
import About from './pages/About'
import Error from './pages/Error'

import rentals from "./datas/logements.json";

function App() {
	return (
		<div className="App">
			<Router>
				<Header></Header>
				<Switch>
					{rentals.map((rental) => (
						<Route exact path={`/rental/${rental.id}`} key={rental.id}>
							<Rental rental={rental} />
						</Route>
					))}

					<Route exact path="/about">
						<About />
					</Route>
					<Route exact path="/">
						<Home rentals={rentals} />
					</Route>
					<Route path="/">
						<Error />
					</Route>
				</Switch>
				<Footer></Footer>
			</Router>
		</div>
	);
}

export default App;
