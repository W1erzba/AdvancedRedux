import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		items: [],
		totalQuantity: 0,
	},
	reducers: {
		addItemToCart(state, action) {},
		removeItemFromCart(state, action) {},
	},
});

export const cartActions = cartSlice.actions;

export default cartSlice;
