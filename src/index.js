import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Action from './pages/Action';
import Products from './pages/Products';
import Pay from './pages/Pay';
import Saveguard from './pages/Saveguard';
import About from './pages/About';
import Contacts from './pages/Contacts';
import Navbar from './components/Navbar';
import './index.css';



function App() {
    return (
        <BrowserRouter>
	        
		        <Navbar/>

	    	<div className="body">
	    		<Switch>
					<Route path={'/'} exact component={Home}/>
					<Route path={'/action'} component={Action}/>
					<Route path={'/products'} component={Products}/>
					<Route path={'/pay'} component={Pay}/>
					<Route path={'/saveguard'} component={Saveguard}/>
					<Route path={'/about'} component={About}/>
					<Route path={'/contacts'} component={Contacts}/>
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