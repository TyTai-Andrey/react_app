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

import Context from './context';

import Navbar from './components/Navbar';

import './index.css';
import './media.css';


const popularProducts = [
	{id: "p1",productPhoto: "https://www.ejin.ru/wp-content/uploads/2017/09/14-890.jpg", iconAction: true, iconHit: true, iconBestPrice: true, title:'Цветок, который стоит на столе, такой загадочный.', description: 'А тут описание цветка, придающее ему загадочности и вызывающее интерес пользователя', oldPrice: '1 499 ', newPrice: '799 '},
	{id: "p2",productPhoto: "https://doseng.org/uploads/posts/2018-06/1528416202_11.jpg", iconAction: true, iconHit: false, iconBestPrice: false, title:'Набор юного инстаблогера', description: 'Посмотрите на него. Он покажет всем какой вы классный и творческий. Главное не забыть посидеть на подоконнике с бокаль...', oldPrice: null, newPrice: '13 666 '},
	{id: "p3",productPhoto: "https://get.wallhere.com/photo/2560x1600-px-landscape-river-rock-waterfall-1105857.jpg", iconAction: false, iconHit: true, iconBestPrice: false, title:'Лампа. Просто лампа.', description: 'В паре с загадочным цветком добавит загадочности вашему интерьеру', oldPrice: '2 699 ', newPrice: '1 789 '},
	{id: "p4",productPhoto: "https://i.pinimg.com/736x/59/17/5b/59175b1f980587cd8aa4c800835c9dec.jpg", iconAction: true, iconHit: true, iconBestPrice: false, title:'Классные деревянные минималистичные часы с...', description: 'Все в ту же копилку загдочности вашего интерьера и вашей натуры', oldPrice: '2 199 ', newPrice: '1 899 '},
]

function App() {
    return (
        <BrowserRouter>
	        <Context.Provider value={{popularProducts}}>
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
	    	</Context.Provider>
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