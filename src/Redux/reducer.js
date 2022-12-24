import * as actionTypes from "./actionTypes"
import ProductsData from "../Data/ProductsData"

const initState = {
    products: [...ProductsData],
    cartItems: 0,
    product: {},
    totalBill: 0
}

function reducer(state = initState, action) {
    switch (action.type) {
        case actionTypes.SET_PRODUCTS:
            return {
                ...state,
                products: action.payload.products
            }
        
        case actionTypes.INCREASE_CART_ITEMS: 
            return {
                ...state,
                cartItems: action.payload.cartItems + 1,
                products: action.payload.products.map((item) => {
                    if(item.id === action.payload.id) {
                        return ({
                            ...item,
                            count: action.payload.count + 1
                        })
                    }
                    else {
                        return item
                    }
                }),
                product: {
                    ...action.payload.product,
                    count: action.payload.count + 1
                }
            }
        
        case actionTypes.DECREASE_CART_ITEMS:
            return {
                ...state,
                cartItems: action.payload.cartItems - 1,
                products: action.payload.products.map((item) => {
                    if(item.id === action.payload.id) {                        
                        return ({
                            ...item,
                            count: action.payload.count - 1
                        })
                    }
                    else {
                        return item
                    }
                }),
                product: {
                    ...action.payload.product,
                    count: action.payload.count - 1
                }
            }
        
        case actionTypes.INCREASE_BILL: 
            return({
                ...state,
                totalBill: action.payload.totalBill
            })

        case actionTypes.DECREASE_BILL:
            return({
                ...state,
                totalBill: action.payload.totalBill
            })            

        case actionTypes.SELECTED_PRODUCT:
            return {
                ...state,
                product: action.payload.product
            }
        
        case actionTypes.EMPTY_CART:
            return {
                ...state,
                cartItems: action.payload.cartItems - action.payload.count,
                totalBill: action.payload.totalBill - action.payload.cost,
                products: action.payload.products.map((item) => {
                    if(item.id === action.payload.id) {
                        return ({
                            ...item,
                            count: 0
                        })
                    }
                    else {
                        return item
                    }
                }),
                product: {
                    ...action.payload.product,
                    count: 0
                }
            }
        case actionTypes.RESET:
            return {
                ...state,
                cartItems: 0,
                totalBill: 0,
                products: action.payload.products.map((item) => {
                    return ({
                        ...item,
                        count: 0
                    })
                })
            }

        default:
            return state
    }
}

export default reducer
