import React from 'react';

import {cart_addProduct, cart_removeProductSum, cart_reduceProductSum} from '../help_function/cart_function'
import {useDispatch, useSelector} from 'react-redux';





function CartListItem({params}) {

     
    const dispatch = useDispatch()
    const state = useSelector(state => state)
  

    return (
       <>
        {
            params.map(i=> {
                const date = state.products.Products_Option.find(j=>j.id===i.id)
                return <li key={date.id} id={date.id} className="cartList_item">
                    
                    <div className="cartList_item-body">
                        <div className="cartList_item-photo">
                            <img src={date.productPhoto} width='100%' height='100%' alt={date.title} />
                        </div>
                        <div className="cartList_item-text">
                            <div className="cartList_item-buttons_price">
                                <h2 className="title">{date.title}</h2>
                                <div className="cartList_item-buttons_changes_price">
                                    <button onClick={event=>dispatch(cart_reduceProductSum(event.target.closest("li").id, state))}>
                                        —
                                    </button>
                                    <p>{i.sum}</p>
                                    <button onClick={event=>dispatch(cart_addProduct(event.target.closest("li").id, state))}>
                                        +
                                    </button>
                                </div>
                            </div>
                            <div className="cartList_item-button_delete">
                                <p>{i.sum*(+date.price.split(" ").join(''))}</p>
                                <button onClick={event=>dispatch(cart_removeProductSum(event.target.closest("li").id, state))}><i className="fa fa-trash" aria-hidden="true"></i></button>
                            </div>
                        </div>
                        
                    </div>

                </li>
            })
        }

       </>      	
    )
}

export default CartListItem