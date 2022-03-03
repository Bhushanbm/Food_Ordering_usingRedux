import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'; 

const Navbar = () => {
    const thali=useSelector(state=>state.counter.thali)

    return (
        <div>
            <div className="header">
                <h1 className="h1head">The Acoustic Thali Hub</h1>
            </div>
            <nav className="navbar">
                <div className="container-fluid">
                    <p style={{ fontFamily: 'cursive', fontSize: '25px' }}
                        className="navbar-brand" >Food<span style={{
                            color: 'rgb(26, 201, 157)',
                            fontSize: '25px',
                            fontFamily: 'cursive'
                        }}>Corner</span></p>

                    <div>
                        < ul className="bar" >
                            <li className="cartbuttonnav"><Link className="nav-link" to="/Cart">
                                <img src="https://img.icons8.com/external-icongeek26-outline-gradient-icongeek26/64/000000/external-cart-ecommerce-icongeek26-outline-gradient-icongeek26.png"
                                    width={'40px'} height={'40px'} />

                            </Link></li> 

                        </ul >
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
    