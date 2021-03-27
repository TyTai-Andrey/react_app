import React, {Fragment} from 'react';
import { NavLink } from 'react-router-dom';




function Shop_cart({counter}) {
   

    return (
    	<Fragment>
        {
	      counter &&
	      	<div className="shop_cart">
	      		<NavLink to="pay">
		            <div className="btn-content">
		            	<i className="fa fa-shopping-cart" aria-hidden="true"></i>
		            </div>
		            <span className="buyCounter">{counter}</span>
	            </NavLink>
	        </div>
	         
    	}
    	</Fragment>
    )
}

export default Shop_cart