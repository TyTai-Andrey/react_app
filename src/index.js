import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/Navbar';
import './index.css';



function App() {
    return (
        <BrowserRouter>
	        <Navbar/>
	    	<div className="body">
	    		<Switch>
					<Route path={'/'} exact component={Home}/>
					<Route path={'/about'} component={About}/>
				</Switch>
	    	</div>
    	</BrowserRouter>
    )

}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();