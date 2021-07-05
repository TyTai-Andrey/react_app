import {combineReducers} from 'redux'
import {NEW_STATE} from './types'

import {Products_extraOption,Products_Option} from '../Date/Date'



const initial_Products_State = {Products_extraOption, Products_Option}



// Думаю потом создать личный кабинет для добавления новых товаров, изменения существующих, добавления меток "Акция", "Хит" или "Лучшая цена"
function productsReducer (state = initial_Products_State, action) {
	switch (action.type) {
		default:
			return state;
	}
}


const initialCartState = JSON.parse(localStorage.getItem('products')) || []

function cartReducer (state = initialCartState, action) {
	switch (action.type) {
		case NEW_STATE:
			return action.payload;
		default:
			return state;
	}
}

export const rootReducer = combineReducers ({
	cart: cartReducer,
	products:productsReducer
})