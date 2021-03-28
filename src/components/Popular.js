import React, {useContext} from 'react';
import Product from './Product';
import Context from '../context';
import { NavLink } from 'react-router-dom';


function Popular() {
    const {popularProducts} = useContext(Context)
    const arrayPopularProducts = new Array(popularProducts.length).fill('')
    return (
        <section className="popular">
            <div className="swapper">
                <h1>Популярные товары</h1>
                <div className="popular_products">
                {
                    arrayPopularProducts.map((_,i)=><Product key={popularProducts[i].id} params={popularProducts[i]}/>)
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
    )
}

export default Popular