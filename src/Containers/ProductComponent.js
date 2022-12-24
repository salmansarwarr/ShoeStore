import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decreaseBill, decreaseCartItems, increaseBill, increaseCartItems, selectedProduct } from '../Redux/actionCreator'
import { Link } from 'react-router-dom'

function ProductComponent() {
    const dispatch = useDispatch()
    const state = useSelector(state => state)
    const { products, cartItems, totalBill } = state
    
    const renderList = products.map((item) => {
        return (
            <div className="col-md-4" key={item.id}>
                <div className="productComponent">
                    <div className='top'>
                        <span className="badge badge-success">${item.marketPrice}</span>
                        <p className='cart-icon'>
                            <i className="fa-solid fa-cart-shopping"></i>
                            <span className="badge ">{item.count}</span>
                        </p>
                    </div>
                    <div className='image'>
                        <img src={item.image} />
                    </div>
                    <div className='name'>
                        <h3> {item.name} </h3>
                    </div>
                    <div className='description'>
                        <p> {item.description} </p>
                    </div>
                    <div className='bottom'>
                        <Link to={`/${item.id}`}>
                            <button 
                                type="button" 
                                className="btn btn-link"
                                onClick={() => {
                                    dispatch(selectedProduct(item))
                                }}
                            >
                                More details
                            </button>
                        </Link>
                        <button className='plus' onClick={() => {
                            dispatch(increaseBill(totalBill, item.marketPrice))
                            dispatch(increaseCartItems(cartItems, item.id, products, item.count))
                        }
                        }> 
                            <i className="fa-solid fa-cart-plus"></i>
                        </button>
                        <button 
                            className='minus' 
                            onClick={() => {
                                dispatch(decreaseBill(totalBill, item.marketPrice))
                                dispatch(decreaseCartItems(cartItems, item.id, products, item.count))
                            }}
                            disabled={cartItems === 0}
                        > - </button>
                    </div>
                </div>
            </div>
        )
    })


    return (
        products.length === 0 ? <div>Loading...</div> : renderList
    )
}

export default ProductComponent