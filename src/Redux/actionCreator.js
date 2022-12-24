import * as actionTypes from "./actionTypes";

export function setProducts(products) {
    return ({
        type: actionTypes.SET_PRODUCTS,
        payload: {
            products: products
        }
    })
}

export function increaseCartItems(cartItems, id, products, count, product) {
    return ({
        type: actionTypes.INCREASE_CART_ITEMS,
        payload: {
            cartItems,
            id,
            products,
            count,
            product
        }
    })
}

export function decreaseCartItems(cartItems, id, products, count, product) {
    return ({
        type: actionTypes.DECREASE_CART_ITEMS,
        payload: {
            cartItems,
            id,
            products,
            count,
            product
        }
    })
}

export function increaseBill(bill, cost) {
    return({
        type: actionTypes.INCREASE_BILL,
        payload: {
            totalBill: bill + cost
        }
    })
}

export function decreaseBill(bill, cost) {
    return({
        type: actionTypes.DECREASE_BILL,
        payload: {
            totalBill: bill - cost
        }
    })
}

export function selectedProduct(product) {
    return ({
        type: actionTypes.SELECTED_PRODUCT,
        payload: {
            product
        }
    })
}

export function emptyCart(cartItems, id, products, count ,product, totalBill, price) {
    return({
        type: actionTypes.EMPTY_CART,
        payload: {
            cartItems,
            id,
            products,
            count,
            product,
            totalBill,
            cost: price*count
        }
    })
}

export function reset(products) {
    return({
        type: actionTypes.RESET,
        payload: {
            products
        }
    })
}

