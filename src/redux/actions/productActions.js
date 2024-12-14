import { ActionTypes } from "../constants/action-types"
import axios from 'axios';

export const fetchProducts = () => async (dispatch) => {
    const response = await axios.get('https://fakestoreapi.com/products'); // Fetch products from the API
    dispatch({
        type: ActionTypes.SET_PRODUCTS,
        payload: response.data, // Dispatch the fetched products to the store
    });
};

export const setProducts = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products,
    }
}

export const selectedProducts = (products) => {
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: products,
    }
}