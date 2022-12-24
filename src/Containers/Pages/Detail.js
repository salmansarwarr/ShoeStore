import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { decreaseBill, decreaseCartItems, increaseBill, increaseCartItems, emptyCart } from '../../Redux/actionCreator'

function Details() {
    const dispatch = useDispatch()

    const state = useSelector(state => state)
    const { product, totalBill, products, cartItems } = state
    const productBill = product.count * product.marketPrice

    console.log(product.count)

    return (
        Object.keys(product).length === 0 ?
            <div>Page not found!, go back</div>
            :
            <div className='detail'>
                <div className='container selectedProduct'>
                    <div className='heading'>
                        <h1>{product.name}</h1>
                    </div>
                    <div className='description'>
                        <p>{product.description}</p>
                    </div>
                    <div className='details'>
                        {
                            product.count === 0 ?
                                <div className='price'>
                                    <p>Its available market price is <span>${product.marketPrice}</span> without discount </p>
                                    <p>
                                        You haven't book <span>{product.name}</span> product yet
                                    </p>
                                    <p>
                                        Your total bill without <span>{product.name}</span> is <span>${totalBill}</span>
                                    </p>
                                </div>
                                :
                                <div className='price'>
                                    <p>Its available market price is <span>${product.marketPrice}</span> without discount </p>
                                    <p>
                                        You have booked <span>{product.name}</span> product in <span>{product.count}</span> quanitity
                                    </p>
                                    <p>
                                        Your bill for <span>{product.name}</span> product is <span>${productBill}</span>
                                    </p>
                                    <p>
                                        Your bill for other products except <span>{product.name}</span> is <span>${totalBill - productBill}</span>
                                    </p>
                                    <p>
                                        Your bill along with <span>{product.name}</span> product is <span>${totalBill}</span>
                                    </p>
                                </div>
                        }
                        <div className='shoe'>
                            <img src={product.image} alt={product.name} />
                            <button 
                                className='plus'
                                onClick={() => {
                                    dispatch(increaseCartItems(cartItems, product.id, products, product.count, product))
                                    dispatch(increaseBill(totalBill, product.marketPrice))
                                }}
                            >
                                <i className="fa-solid fa-cart-plus"></i>
                            </button>
                            <button
                                className='minus'
                                onClick={() => {
                                    dispatch(decreaseCartItems(cartItems, product.id, products, product.count, product))
                                    dispatch(decreaseBill(totalBill, product.marketPrice))
                                }}
                                disabled={totalBill === 0}
                            > - </button>
                            <button
                                className='empty'
                                onClick={() => {
                                    dispatch(emptyCart(cartItems, product.id, products, product.count, product, totalBill, product.marketPrice))
                                }}
                            >
                                <i className="fa-solid fa-rectangle-xmark"></i>
                            </button>
                        </div>
                    </div>
                    <div className='bottom'>
                        <Link to='/'>
                            <button type="button" className="btn btn-light btn-lg btn-block">Back To Home</button>
                        </Link>
                    </div>
                </div>
            </div>
    )
}

export default Details