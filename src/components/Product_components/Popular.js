import React from 'react';
import Product from './Product';

import { NavLink } from 'react-router-dom';
import {useSelector} from 'react-redux';




function Popular() {

    const products = useSelector(state => state.products)

    return (
            <>
                {   
                    (products.Products_extraOption.length === 0 || products.Products_Option === 0) ? null :

                    <section className="popular">
                        <div className="swapper">
                            <h1>Популярные товары</h1>
                            <div className="popular_products">
                            {
                                products.Products_extraOption.map((i,index)=>{
                                    let j = products.Products_Option.find(a=>a.id===i.id)
                                    return(j ? <Product key={j?.id} extraParams={products.Products_extraOption[index]} params={j}/> : null)
                                })
                            }
                            </div>
                            <div className="btn btn-white mt-30">
                                <NavLink to="/products">
                                    <div className="btn-content">
                                        <span>Смотреть каталог</span>
                                        <i className="fa fa-arrow-right" aria-hidden="true"></i>
                                    </div>
                                </NavLink>
                            </div>
                        </div>
                    </section>
                }
            </>        
    )

}

export default Popular