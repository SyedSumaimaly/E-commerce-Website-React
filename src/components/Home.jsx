import React from 'react'
import './Home.css'
import Products from './Products'
// import CusNavbar from './Navbar'
function Home() {
    return ( 
       <>
        <div>
            <div className="card bg-dark text-dark border-0">
                <img src="/assets/banner3.jpg" className="card-img" alt="..." />

                <div className="card-img-overlay ">
                    <div className="container">
                        <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>
                        <p className="card-text lead fs-2">CHECK OUT ALL THE TRENDS</p>
                    </div>
                </div>
            </div>
        </div>
        <Products/>
       </>
    )
}

export default Home
