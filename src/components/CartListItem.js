import React, {Fragment, useContext} from 'react';
import Context from '../context';

   

// {params.title}
// {params.newPrice}




function CartListItem({params}) {
    // const photo = {background: `url('${params.productPhoto}') center`, backgroundSize: "cover"}

     const {addProductSum, reduceProductSum, removeProductSum} = useContext(Context)


     // let a = ''+params[0].sum*(+params[0].price.split(" ").join(''))
     // let b = ''
        
        
     // a = a.split('')
     // if (a.length > 3) {
     //    b = a.splice(-3, 3)
     // }
     // a = a.join('')+' '+b.join('')
     // console.log(a)

     
    return (
       <Fragment>
        {
            params.map(i=>
                <li key={i.id} id={i.id} className="cartList_item">
                    
                    <div className="cartList_item-body">
                        <div className="cartList_item-photo">
                            <img src={i.productPhoto} width='100%' height='100%' alt={i.title} />
                        </div>
                        <div className="cartList_item-text">
                            <div className="cartList_item-buttons_price">
                                <h2 className="title">{i.title}</h2>
                                <div className="cartList_item-buttons_changes_price">
                                    <button onClick={event=>reduceProductSum(event.target.closest("li").id)}>
                                        —
                                    </button>
                                    <p>{i.sum}</p>
                                    <button onClick={event=>addProductSum(event.target.closest("li").id)}>
                                        +
                                    </button>
                                </div>
                            </div>
                            <div className="cartList_item-button_delete">
                                <p>{i.sum*(+i.price.split(" ").join(''))}</p>
                                <button onClick={event=>removeProductSum(event.target.closest("li").id)}><i className="fa fa-trash" aria-hidden="true"></i></button>
                            </div>
                        </div>
                        
                    </div>

                </li>
                )
        }

       </Fragment>      	
    )
}

export default CartListItem