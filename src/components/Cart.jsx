import React from 'react'
import CusNavbar from './Navbar'
import Footer from './Footer'
import { useContext } from 'react';
import { CartContext } from '../context/addtocart/Context';
import './Cart.css'


function Cart() {

    const { state, dispatch } = useContext(CartContext);
    console.log(state.cart)

    const cartValue = state.cart

    const handleClearCart = () => {
        dispatch(
            {
                type: "CLEAR_CART",
            }
        )
    }

    return (
        <>
            <CusNavbar />
            <>
                <h1 className='text-center fw-bolder py-4'>Shopping Cart</h1>
                <div className='container py-4'>
                    {cartValue && cartValue.map(val => (
                        <div className='row py-3 px-4 cartdiv'>
                            <div className='col-md-4 d-flex justify-content-center' key={val.id}><img src={val.image} alt={val.title} /></div>
                            <div className='col-md-8' key={val.id}>
                                <h3 className='display-8'>{val.category}</h3>
                                <h1 className='display-6 fw-bolder'>{val.title}</h1>
                                <p className='display-7 lead '>{val.description}</p>
                                <p className="display-7 fw-bold my-4">Price: ${val.price}</p>
                            </div>
                        </div>
                    ))}
                    <div className="col-md-12">
                        <button className='btn btn-dark btn_cart' onClick={handleClearCart}>Clear Cart</button>
                    </div>
                </div>
            </>
            <Footer />
        </>
    )
}

export default Cart
