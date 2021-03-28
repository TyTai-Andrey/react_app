import React, {useContext} from 'react';
import Context from '../context';
import { NavLink } from 'react-router-dom';




function Product({params}) {
	// console.log (params.params.productPhoto)
	const photo = {background: `url('${params.productPhoto}') center`, backgroundSize: "cover"}
	const {addProduct} = useContext(Context)

    return (
        <div className="product" id={params.id}>
        	<div className="product-photo"  style={photo}>
        		<div className="rowIcons">
	        		{params.iconAction && <div className="rowIcons-icon action">Акция</div>}
	        		{params.iconHit && <div className="rowIcons-icon hit">Хит</div>}
	        		{params.iconBestPrice && <div className="rowIcons-icon bestPrice">Лучшая цена</div>}
        		</div>
        	</div>
        	<div className="product-middle">
        		<div className="product-text">
        			<h3>
                    <NavLink to="/products">{params.title}</NavLink>
                    </h3>
        			<p className="ltl-grey">{params.description}</p>
        		</div>
        		<div className="product-footer">
        			<div className="price">
        				{params.oldPrice && <div className="price-old">
        					<span className="diagonale"></span>
	        				<span>{params.oldPrice} </span>
	        				<i className="fas fa-ruble-sign"></i>
        				</div>}
        				<div className="price-new">
	        				<span>{params.newPrice}</span>
	        				<i className="fas fa-ruble-sign"></i>
        				</div>
        			</div>
        			<div className="iconBuy" onClick={event=>{addProduct(event.target.closest(".product").id)}}>
	        			<div className="btn btn-blue icon">
		                    <div className="btn-content">
		                        <i className="fa fa-shopping-cart" aria-hidden="true"></i>
		                    </div>
		                </div>
        			</div>
        		</div>
        	</div>
        </div>
    )
}

export default Product