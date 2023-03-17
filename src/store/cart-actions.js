import { uiActions } from './ui-slice';
import { cartActions } from './cart-slice';

export const fetchCartData = (fetchedData) => {
	return async (dispatch) => {
		const fetchData = async () => {
			const response = await fetch(
				'https://react-http-4b003-default-rtdb.europe-west1.firebasedatabase.app/cart.json'
			);

			if (!response.ok) throw new Error('Fetching cart data failed.');

			const data = await response.json();

			return data;
		};

		try {
			const cartData = await fetchData();
			dispatch(
				cartActions.replaceCart({
					items: cartData.items || [],
					totalQuantity: cartData.totalQuantity || [],
				})
			);
		} catch (error) {
			dispatch(
				uiActions.showNotification({
					status: 'error',
					title: 'Error!',
					message: 'Fetching cart data failed!',
				})
			);
		}
	};
};

export const sendCartData = (cart) => {
	return async (dispatch) => {
		dispatch(
			uiActions.showNotification({
				status: 'Pending',
				title: 'Sending...',
				message: 'Senidng cart data!',
			})
		);

		const sendRequest = async () => {
			const response = await fetch(
				'https://react-http-4b003-default-rtdb.europe-west1.firebasedatabase.app/cart.json',
				{
					method: 'PUT',
					body: JSON.stringify({
						items: cart.items,
						totalQuantity: cart.totalQuantity,
					}),
				}
			);

			if (!response.ok) throw new Error('Sending cart data failed.');
		};

		try {
			await sendRequest();

			dispatch(
				uiActions.showNotification({
					status: 'success',
					title: 'Success!',
					message: 'Sent cart data!',
				})
			);
		} catch (error) {
			dispatch(
				uiActions.showNotification({
					status: 'error',
					title: 'Error!',
					message: 'Senidng cart data failed!',
				})
			);
		}
	};
};
