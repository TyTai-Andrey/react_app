import {newState} from '../REDUX/actions.js';

export function cart_addSum(id, state) {
    return async dispatch => {
        let newProducts = []
        state.cart.forEach( (i, index) =>{

            if (i.id === id) {
                i.sum += 1;
                newProducts.push(i);
                
            } else {
                newProducts.push(i);
            }
        })
        dispatch(newState(newProducts))
    }
}

export function cart_addProduct(id, state) {
    return async dispatch => {

        //Проверка на наличие id товара в корзине
        if (state.cart.find(i=>i.id===id)) {
        //Добавление количества к товару в корзине
            dispatch(cart_addSum(id, state))
        } else {
            
        //Добавление нового товара в корзину
        const newProducts = JSON.parse(JSON.stringify(state.cart)).concat([{id: id, sum: 1}])
        dispatch(newState(newProducts))
        }
    }
}
    

export function cart_removeProductSum(id, state) {
    return async dispatch => {
        let newProducts = []
        state.cart.forEach(j=>{
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

        state.cart.forEach(j=>{
            // Ищем нужный товар
            if (j.id === id) {
                // Вычитаем единицу из количества
                j.sum -= 1;
                // Если количество после этого равно 0, то товар удаляется из корзины
                if (j.sum === 0) {
                    dispatch(cart_removeProductSum(id, state))
                } else {
                // Иначе добавляем изменённую версию
                    newProducts.push(j);
                }

            } else {
                // Добавляем остальные товары
                newProducts.push(j);
            }
        })

        dispatch(newState(newProducts))
    }
}
