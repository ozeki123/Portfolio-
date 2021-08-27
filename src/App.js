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

	let routes = [];

	//Fetches current route location from Header component
	const pull_data = (data) => {
		routes.push(data);
		console.log(data, routes)

		function RouteChange() {
			let tl = gsap.timeline();

		//Trigger smooth scrolling effect on each Route
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
			});
		}

		if (data !== routes[routes.length-2]){
			RouteChange()
		}
		
		
	}

	//if the last element of the array changes, then run RouteChange

	return (
		<Router>
			<Header func={pull_data}/>
			<Switch>
				<Route exact path="/" onClick = "onRouteClick()" component={Home}/>
				<Route path="/about" component={About} />
				<Route path="/contact" component={About} />
			</Switch>
		</Router>
	);
	}

export default withRouter(App);
