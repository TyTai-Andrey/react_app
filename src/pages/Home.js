import React, {useContext} from 'react';
import Product from '../components/Product';
import Context from '../context';


function Home() {
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
            </div>
        </section>
    )
}

export default Home