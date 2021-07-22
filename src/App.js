import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from './pages/Home'
import About from './pages/About'
import Error from './pages/Error'
function App() {
	return (
		<div className="App">
			<Router>
				<Header></Header>
				<Switch>
					<Route exact path="/about">
						<About />
					</Route>
					<Route exact path="/">
						<Home />
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
