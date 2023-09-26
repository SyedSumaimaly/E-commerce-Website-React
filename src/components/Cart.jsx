import React from 'react'
import CusNavbar from './Navbar'
import Footer from './Footer'
import { useContext } from 'react';
import { CartContext } from '../context/addtocart/Context';


function Cart({ data }) {

    const { state, dispatch } = useContext(CartContext);
    console.log(state.cart)

    return (
        <>
            <CusNavbar />
            <>
                <h1 className='text-center bw-bolder py-4'>Shopping Cart</h1>
                <div className="row">
                    {
                        state.cart.map((val, key) => {
                            <>
                                <div className="col-md-4" key={key}>
                                    <img src={val.image} alt="" />
                                </div>
                                <div className="col-md-8">
                                    <h1>{val.title}</h1>
                                    <p>description</p>
                                    <p>price</p>
                                </div>
                            </>
                        })
                    }


                </div>
            </>
            <Footer />
        </>
    )
}

export default Cart
