import React, {Fragment} from 'react';
import { NavLink } from 'react-router-dom';
import {useSelector} from 'react-redux';





function Shop_cart() {

    const products = useSelector(state => state.cart)


    return (
    	<Fragment>
        	{(products.length === 0 || document.location.pathname === '/pay' ) ? null : <div className="shop_cart">
	      		<NavLink to="pay">
		            <div className="btn-content">
		            	<i className="fa fa-shopping-cart" aria-hidden="true"></i>
		            </div>
		            <span className="buyCounter">{products.length}</span>
	            </NavLink>
	        </div>}
    	</Fragment>
    )
}

export default Shop_cart