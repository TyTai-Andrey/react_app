import React, {Fragment, useContext} from 'react';
import Context from '../context';

   

// {params.title}
// {params.newPrice}




function CartListItem({params}) {
    // const photo = {background: `url('${params.productPhoto}') center`, backgroundSize: "cover"}

     const {addProductSum, reduceProductSum,removeProductSum} = useContext(Context)




    return (
       <Fragment>
        {
            params.map(i=>
                <li key={i.id} id={i.id} className="cartList-item">
                    
                    <div className="aaaa">
                        <div className="cartList-item_left">
                        <h2 className="title">{i.title}</h2>
                        <p className="description">{i.description}</p>
                        </div>
                        <div className="cartList-item_right">
                            <button onClick={event=>reduceProductSum(event.target.closest("li").id)}>
                                -
                            </button>
                            <p>{i.sum}</p>
                            <button onClick={event=>addProductSum(event.target.closest("li").id)}>
                                +
                            </button>
                            <button onClick={event=>removeProductSum(event.target.closest("li").id)}><i className="fa fa-trash" aria-hidden="true"></i></button>
                        </div>
                    </div>

                </li>)
        }

       </Fragment>      	
    )
}

export default CartListItem