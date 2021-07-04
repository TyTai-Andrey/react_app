import React, {useContext} from 'react';
import CartListItem from '../components/CartListItem';
import Context from '../context';






function CartList() {

    const {products} = useContext(Context)

    return (
        <section className="cartList">
        	<div className="swapper">
        		<h1 className="mt-30">Выбранные товары</h1>
        		{
        			(products.length === 0) ? <h2 style={{textAlign: 'center', margin: "30px 0 0 0" }}>Пожалуйста, выберете товар, чтобы начать покупку</h2> :
        			<ul className="cartList_items">
	        			<CartListItem params={products}/>
	        		</ul>
	        	}
        	</div>
        </section>
    )
}

export default CartList