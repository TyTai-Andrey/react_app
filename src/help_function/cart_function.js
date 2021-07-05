import {newState, addNewProduct} from '../REDUX/actions.js';

export function cart_addSum(id, state) {
    return async dispatch => {
        let newProducts = []
        state.cart.map( (i, index) =>{
            if (i.id === id) {
                i.sum += 1;
                newProducts.push(i);
            } else {
                newProducts.push(i);
            }
            dispatch(newState(newProducts))
        })
    }
        
    }

export function cart_addProduct(id, state) {
    return async dispatch => {
    
    //Проверка на наличие id товара в корзине
        if (state.cart.find(i=>i.id===id) && state.products.Products_Option.find(i=>i.id===id)) {
            dispatch(cart_addSum(id, state))
    } else if (state.products.Products_Option.find(i=>i.id===id)) {
        state.products.Products_Option.map((i, index)=>{
            if (i.id === id) {
                let newProducts = JSON.parse(JSON.stringify(state.cart))
                // state.products.Products_Option.slice(index,index+1)
                newProducts.push({id: i.id, sum: 1});
                dispatch(newState(newProducts))
            }
        })
    } else {
        alert("error")
    }
    }
    
}

export function cart_removeProductSum(id, state) {
    return async dispatch => {
        let newProducts = []
        state.cart.map(j=>{
            if (j.id !== id) {
                newProducts.push(j);
            }
        })
        dispatch(newState(newProducts))
    }
}

export function cart_reduceProductSum(id, state) {
    return async dispatch => {
        let newProducts = []

        state.cart.map(j=>{
            if (j.id === id) {
                j.sum -= 1;
                // Если сумма равна 0, то товар удаляется из корзины
                if (j.sum === 0) {
                    dispatch(cart_removeProductSum(id, state))
                } else {
                    newProducts.push(j);
                }
            } else {
                newProducts.push(j);
            }
        })
        dispatch(newState(newProducts))
    }
}
