import React, {useContext} from 'react';
import Context from '../context';


function Product(params) {
	// console.log (params.params.productPhoto)
	const photo = {background: `url('${params.params.productPhoto}') center`, backgroundSize: "cover"}
	
    return (
        <div className="product">
        	<div className="product-photo"  style={photo}>
        		<div className="rowIcons">
	        		{params.params.iconAction && <div className="rowIcons-icon action">Акция</div>}
	        		{params.params.iconHit && <div className="rowIcons-icon hit">Хит</div>}
	        		{params.params.iconBestPrice && <div className="rowIcons-icon bestPrice">Лучшая цена</div>}
        		</div>
        	</div>
        	<div className="product-middle">
        		<div className="product-text">
        			<h3>{params.params.title}</h3>
        			<p className="ltl-grey">{params.params.description}</p>
        		</div>
        		<div className="product-footer">
        			<div className="price">
        				{params.params.oldPrice && <div className="price-old">
        					<span className="diagonale"></span>
	        				<span>{params.params.oldPrice} </span>
	        				<i className="fas fa-ruble-sign"></i>
        				</div>}
        				<div className="price-new">
	        				<span>{params.params.newPrice}</span>
	        				<i className="fas fa-ruble-sign"></i>
        				</div>
        			</div>
        			<div className="iconBuy">
        				<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
							<g clipPath="url(#clip0)">
								<g filter="url(#filter0_dd)">
									<rect width="50" height="50" rx="6" fill="#34AADD"/>
								</g>
								<g clipPath="url(#clip1)">
									<path d="M20.4297 28.8089H34.1916C34.5324 28.8089 34.8313 28.5836 34.9236 28.2563L37.9706 17.592C38.0361 17.3621 37.9913 17.1151 37.8471 16.9241C37.7027 16.7337 37.4781 16.6212 37.2385 16.6212H18.6712L18.1267 14.171C18.0493 13.8221 17.7399 13.5743 17.3828 13.5743H12.7617C12.3408 13.5743 12 13.9151 12 14.3361C12 14.7572 12.3408 15.0978 12.7617 15.0978H16.7715L19.5222 27.4757C18.7128 27.8276 18.1445 28.6332 18.1445 29.5706C18.1445 30.8306 19.1697 31.8558 20.4297 31.8558H34.1916C34.6127 31.8558 34.9533 31.5152 34.9533 31.0941C34.9533 30.6731 34.6127 30.3324 34.1916 30.3324H20.4297C20.0101 30.3324 19.668 29.991 19.668 29.5706C19.668 29.1503 20.0101 28.8089 20.4297 28.8089Z" fill="white"/>
									<path d="M19.668 34.141C19.668 35.4012 20.6931 36.4261 21.9533 36.4261C23.2133 36.4261 24.2385 35.4012 24.2385 34.141C24.2385 32.881 23.2133 31.8558 21.9533 31.8558C20.6931 31.8558 19.668 32.881 19.668 34.141Z" fill="white"/>
									<path d="M30.3831 34.141C30.3831 35.4012 31.4082 36.4261 32.6682 36.4261C33.9284 36.4261 34.9534 35.4012 34.9534 34.141C34.9534 32.881 33.9284 31.8558 32.6682 31.8558C31.4082 31.8558 30.3831 32.881 30.3831 34.141Z" fill="white"/>
								</g>
							</g>
							<defs>
								<filter id="filter0_dd" x="-10" y="-10" width="70" height="70" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
									<feFlood floodOpacity="0" result="BackgroundImageFix"/>
									<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
									<feOffset dx="2" dy="2"/>
									<feGaussianBlur stdDeviation="4"/>
									<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"/>
									<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
									<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
									<feOffset dx="-2" dy="-2"/>
									<feGaussianBlur stdDeviation="4"/>
									<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"/>
									<feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow"/>
									<feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow" result="shape"/>
								</filter>
								<clipPath id="clip0">
									<rect width="50" height="50" fill="white"/>
								</clipPath>
								<clipPath id="clip1">
									<rect width="26" height="26" fill="white" transform="translate(12 12)"/>
								</clipPath>
							</defs>
						</svg>
        			</div>
        		</div>
        	</div>
        </div>
    )
}

export default Product