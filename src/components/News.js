import React, {useContext} from 'react';
import Product from './Product';
import Context from '../context';


function News () {
    const {popularProducts} = useContext(Context)
    const arrayPopularProducts = new Array(popularProducts.length).fill('')
    return (
        <section className="new">
            <div className="swapper">
                <h1>Новости компании</h1>
                <div className="new_blocks">
                        <div id="b6" className="new-block short"></div>
                        <div id="b7" className="new-block long"></div>
                        <div id="b8" className="new-block long"></div>
                        <div id="b9" className="new-block short"></div>                  
                </div>
                <div className="btn btn-white">
                    <div className="btn-content">
                        <span>Смотреть все новости</span>
                        <i className="fa fa-arrow-right" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default News