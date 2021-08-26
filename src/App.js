import './App.scss';
import Home from './components/home/home';
import Test from './components/test/test';
import About from './components/about/about';
import Header from './components/header/header';
import { BrowserRouter as Router, Switch, Route, withRouter, useLocation} from "react-router-dom";
import React, {useEffect, useRef} from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


function App() {
	const location = useLocation();
	console.log(location.pathname);
	
	RouteChange()

	function RouteChange() {
		const location = useLocation();
		let tl = gsap.timeline();
		if (location.pathname !== "/about" ){
			console.log("location.pathname");
		};
		useEffect(() => {
			let container = document.querySelector(".home-contents");
			let height = container.clientHeight;
			document.body.style.height = height + "px";
	
			tl.to(container, {
				y: -(height - document.documentElement.clientHeight),
				scrollTrigger: {
					trigger: document.body,
					start: "top top",
					end: "bottom bottom",
					scrub: 1
				}
			})
		}, [location, tl]);
	}

	return (
		<Router>
			<Header/>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/about" component={About} />
				<Route path="/contact" component={About} />
			</Switch>
		</Router>
	);
	}

export default withRouter(App);
