import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <>
            <header className="header">

                <nav className="navbar nav-1">
                    <section className="flex">
                            <ul>
                                <li>
                            <Link to="/home" className="logo"><i className="fas fa-house"></i>MyHome</Link>
                                </li>
                                <li className='hover:text-zinc-700'><Link to="#">buy<i className="fas fa-angle-down"></i></Link>
                                    <ul className='Dropdown' style={{boxShadow:"0px 0px 7px 0px rgba(0,0,0,0.1)"}} >
                                        <li><Link to="#">house</Link></li>
                                        <li><Link to="#">flat</Link></li>
                                        <li><Link to="#">shop</Link></li>
                                        <li><Link to="#">ready to move</Link></li>
                                        <li><Link to="#">furnished</Link></li>
                                    </ul>
                                </li>
                                <li><Link to="#">sell<i className="fas fa-angle-down"></i></Link>
                                    <ul className='Dropdown'  style={{boxShadow:"0px 0px 7px 0px rgba(0,0,0,0.1)"}}>
                                        <li><Link to="#">post property</Link></li>
                                        <li><Link to="#">dashboard</Link></li>
                                    </ul>
                                </li>
                                <li><Link to="#">rent</Link>
                                    <ul className='Dropdown'  style={{boxShadow:"0px 0px 7px 0px rgba(0,0,0,0.1)"}}>
                                        <li><Link to="#">house</Link></li>
                                        <li><Link to="#">flat</Link></li>
                                        <li><Link to="#">shop</Link></li>
                                    </ul>
                                </li>
                                <li><Link to="#">help<i className="fas fa-angle-down"></i></Link>
                                    <ul className='Dropdown'  style={{boxShadow:"0px 0px 7px 0px rgba(0,0,0,0.1)"}}>
                                        <li><Link to="/about">about us</Link></li>
                                        <li><Link to="/contact">contact us</Link></li>
                                        <li><Link to="/contact#faq">FAQ</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        <ul>
                            <li><Link to="#">post property<i className="fas fa-paper-plane"></i></Link></li>
                            <li><Link to="#">saved <i className="far fa-heart"></i></Link></li>
                            <li><Link to="#">account <i className="fas fa-angle-down"></i></Link>
                                <ul className='Dropdown'  style={{boxShadow:"0px 0px 7px 0px rgba(0,0,0,0.1)"}}>
                                    <li><Link to="/login">login</Link></li>
                                    <li><Link to="/register">register</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </section>
                </nav>

            
            </header>

        </>
    )
}

export default Nav
