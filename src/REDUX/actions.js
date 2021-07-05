
import {ADD_PRODUCT,REMOVE_PRODUCT,REDUCE_PRODUCT,NEW_STATE} from './types'


export function newState (this_new_state) {
	localStorage.setItem('products', JSON.stringify(this_new_state, null, 3))
	return {type: NEW_STATE, payload: this_new_state}
}

export function addNewProduct (product) {
	return {type: ADD_PRODUCT, payload: product}
}

