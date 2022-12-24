import React from 'react';
import { Link } from "react-router-dom";
import { decreaseBill, decreaseCartItems, increaseBill, increaseCartItems, selectedProduct, emptyCart } from '../../Redux/actionCreator';
import { useSelector, useDispatch } from 'react-redux';
import { reset } from '../../Redux/actionCreator';

function Basket() {
    const dispatch = useDispatch()
    const state = useSelector(state => state)
    const { cartItems, products, totalBill } = state

    const tableBody = products.map((item) => {
        return (
            <tbody className='tbody' key={item.id}>
                <tr className={item.count === 0 ? "tr" : "tr white"}>
                    <th className='td one' scope="row">{item.id}.</th>
                    <td className='td two'>{item.name}</td>
                    <td className='td three'>${item.marketPrice}</td>
                    <td className='td four'>{item.count}</td>
                    <td className='td five'>
                        <button
                            className='plus'
                            onClick={() => {
                                dispatch(increaseBill(totalBill, item.marketPrice))
                                dispatch(increaseCartItems(cartItems, item.id, products, item.count))
                            }}
                        >
                            <i className="fa-solid fa-cart-plus"></i>
                        </button>
                    </td>
                    <td className='td six'>
                        <button
                            className='minus'
                            onClick={() => {
                                dispatch(decreaseBill(totalBill, item.marketPrice))
                                dispatch(decreaseCartItems(cartItems, item.id, products, item.count))
                            }}
                            disabled={cartItems === 0}
                        > - </button>
                    </td>
                    <td className='td seven'>
                        <button
                            className='empty'
                            onClick={() => {
                                dispatch(emptyCart(cartItems, item.id, products, item.count, item, totalBill, item.marketPrice))
                            }}
                        >
                            <i className="fa-solid fa-rectangle-xmark"></i>
                        </button>
                    </td>
                    <td className='td eight'>
                        <Link to={`/${item.id}`}>
                            <button 
                                className='info'
                                onClick={() => {
                                    dispatch(selectedProduct(item))
                                }}
                            >
                                <i className="fa-solid fa-paper-plane"></i>
                            </button>
                        </Link>
                    </td>
                </tr>
            </tbody>
        )
    })

    return (
        <div className='basket'>
            <div className='container bs'>
                <div className='head'>
                    <div className='order'>
                        <h1>Orders</h1>
                        <p className='head-num'>{cartItems}</p>
                    </div>
                    <div className='bill'>
                        <h1>Bill</h1>
                        <p className='head-num'>${totalBill}</p>
                        <button onClick={() => {
                            dispatch(reset(products))
                        }}>
                            <p>Reset</p>
                            <i className="fa-solid fa-arrows-rotate"></i>
                        </button>
                    </div>
                </div>
                <table className="table table-bordered">
                    <thead className='thead'>
                        <tr className='tr'>
                            <th scope="col" className='one td'>#</th>
                            <th scope="col" className='two td'>Item</th>
                            <th scope="col" className='three td'>Price</th>
                            <th scope="col" className='four td'>Quantity</th>
                            <th scope="col" className='five td'>Add</th>
                            <th scope="col" className='six td'>Del</th>
                            <th scope="col" className='seven td'>Quit</th>
                            <th scope="col" className='eight td'>Info</th>
                        </tr>
                    </thead>
                    {tableBody}
                </table>
            </div>
        </div>
    )
}

export default Basket