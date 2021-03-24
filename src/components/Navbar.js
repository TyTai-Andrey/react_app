import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';




export default function Navbar() {

    return (
        <Fragment>
        	<div className='navbar-header'>
				<div className='logo'>
	        		Logo
	        	</div>
	        	<div className="search">Найти на сайте</div>
	        	<div className="number">8 (800)-555-35-35</div>
	        	<div className="btn">Войти</div>
			</div>
	        <nav className='navbar-footer'>
	        	<ul>
	        		<li>
		        		<NavLink to="/" exact>Главная</NavLink>
	        		</li>
	        		<li>
		        		<NavLink to="/about" >О нас</NavLink>
	        		</li>
	        	</ul>
			</nav>

		</Fragment>
    )

}