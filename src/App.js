import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import './App.scss';
import Home from './components/home/home';
import Test from './components/test/test';
import About from './components/about/about';
import Header from './components/header/header';
import Contact from './components/contact/contact';

function App() {
  return (
    <Router>
      <div>
	  	<div className="nav-container">
		  	<nav>
				<ul>
					<li><Link to="/">Work</Link></li>
					<li><Link to="/about">About</Link></li>
					<li><Link to="/contact">Contact</Link></li>
				</ul>
	  		</nav>
		</div>

        <Switch>
			<Route path="/home">
				<Home/>home
			</Route>
			<Route path="/about">
				<About/>    
			</Route>
			<Route path="/contact">
				<Contact/>         
			</Route>
			<Route path="/">
				<Home/>home
			</Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
