import React from 'react';

import { NavLink } from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';

import {cart_addProduct} from '../../help_function/cart_function';


//Блок с одним товаром

//Принимает два объекта которые содержат:

// params:
//id: string - id товара
//productPhoto: string - ссылка на изображение
//title: string - название товара
//description: string - описание товара
//newPrice: string - новая цена товара

// extraParams:
//id: string - id товара
//iconAction: true/false - отображать/скрыть иконку "Акция"
//iconHit: true/false - отображать/скрыть иконку "Хит"
//iconBestPrice: true/false - отображать/скрыть иконку "Лучшая цена"
//oldPrice: string - старая цена товара (не обязательный параметр)



function Product({params, extraParams}) {

    const photo = {background: `url('${params.productPhoto}') center`, backgroundSize: "cover"}

    const dispatch = useDispatch()
    const state = useSelector(state => state)


    

    
  



    return (
        <div className="product" id={params.id}>
            <div className="product-photo"  style={photo}>
                <div className="rowIcons">
                    {extraParams.iconAction && <div className="rowIcons-icon action">Акция</div>}
                    {extraParams.iconHit && <div className="rowIcons-icon hit">Хит</div>}
                    {extraParams.iconBestPrice && <div className="rowIcons-icon bestPrice">Лучшая цена</div>}
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
                        {extraParams.oldPrice && <div className="price-old">
                            <span className="diagonale"></span>
                            <span>{extraParams.oldPrice} </span>
                            <i className="fas fa-ruble-sign"></i>
                        </div>}
                        <div className="price-new">
                            <span>{params.price}</span>
                            <i className="fas fa-ruble-sign"></i>
                        </div>
                    </div>
                    <div className="iconBuy" onClick={event=>{dispatch(cart_addProduct(event.target.closest(".product").id, state))}}>
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