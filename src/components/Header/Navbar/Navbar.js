import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css"
import './../../../responsive.css'


const Navbar = () => {
    return (
        <div className="h__navbar hide-on-mobile-tablet">
            <ul className="navbar__list">
                <li className='navbar__item navbar__item--separate navbar__item--link'>
                    <div className='navbar__item--header'>
                        Kênh Người Bán     
                    </div>
                </li>
                <li className='navbar__item navbar__item--separate navbar__item--link'>
                    <div className='navbar__item--header'>
                        Trở thành Người bán Shopee
                    </div>
                </li>
                <li className='navbar__item navbar__item--separate '>
                    <div className='navbar__item--header'>
                        Kết nối
                        <i className="fab fa-facebook navbar__icon"
                            style={{fontSize:"14px"}}
                        ></i>
                        <i className="fab fa-instagram navbar__icon"></i>
                    </div>
                </li>
            </ul>
            <ul className="navbar__list">
                <li className='navbar__item navbar__item--link navbar__item--notify'>
                    <div className='navbar__item--header'>
                        <i className="fas fa-bell navbar__icon"
                        ></i>
                        Thông báo  
                    </div>
                    <div className='notify'>
                        <div className='notify__header'>
                            <h3>Thông Báo Mới Nhận</h3>
                        </div>
                        <ul className='notify__list'>
                            <li className='notify__item'>
                                <a className='notify__item--link'>
                                    <img src='https://cf.shopee.vn/file/25d27d59c8464c098ed8b6a64f7e9d79' alt='' className='notify__item--img'></img>
                                    <div className='notify__info'>
                                        <span className='notify__name'>Mỹ phẩm Ohui </span>
                                        <span className='notify__description'>Mô tả của sản phẩm chính hãng hehe</span>
                                    </div>
                                </a>
                            </li>
                            <li className='notify__item notify__item--view'>
                                <a className='notify__item--link'>
                                    <img src='https://cf.shopee.vn/file/25d27d59c8464c098ed8b6a64f7e9d79' alt='' className='notify__item--img'></img>
                                    <div className='notify__info'>
                                        <span className='notify__name'>Mỹ phẩm Ohui </span>
                                        <span className='notify__description'>Mô tả của sản phẩm chính hãng hehe</span>
                                    </div>
                                </a>
                            </li>
                            <li className='notify__item '>
                                <a className='notify__item--link'>
                                    <img src='https://cf.shopee.vn/file/25d27d59c8464c098ed8b6a64f7e9d79' alt='' className='notify__item--img'></img>
                                    <div className='notify__info'>
                                        <span className='notify__name'>Mỹ phẩm Ohui </span>
                                        <span className='notify__description'>Mô tả của sản phẩm chính hãng hehe</span>
                                    </div>
                                </a>
                            </li>
                            <li className='notify__item notify__item--view'>
                                <a className='notify__item--link'>
                                    <img src='https://cf.shopee.vn/file/25d27d59c8464c098ed8b6a64f7e9d79' alt='' className='notify__item--img'></img>
                                    <div className='notify__info'>
                                        <span className='notify__name'>Mỹ phẩm Ohui </span>
                                        <span className='notify__description'>Mô tả của sản phẩm chính hãng hehe</span>
                                    </div>
                                </a>
                            </li>
                            <li className='notify__item'>
                                <a className='notify__item--link'>
                                    <img src='https://cf.shopee.vn/file/25d27d59c8464c098ed8b6a64f7e9d79' alt='' className='notify__item--img'></img>
                                    <div className='notify__info'>
                                        <span className='notify__name'>Mỹ phẩm Ohui </span>
                                        <span className='notify__description'>Mô tả của sản phẩm chính hãng hehe</span>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </li>

                <li className='navbar__item navbar__item--link'>
                <div className='navbar__item--header'>
                    <i className="far fa-question-circle navbar__icon"></i>
                    Trợ giúp
                </div>
                </li>
                <li className='navbar__item navbar__item--bold 
                navbar__item--separate navbar__item--link'>
                    <div className='navbar__item--header'>
                        <Link className='navbar__item--header' to="/register">Đăng Ký</Link>
                    </div>
                </li>
                <li className='navbar__item navbar__item--bold
                navbar__item--link'>
                    <div className='navbar__item--header'>
                        <Link className='navbar__item--header' to="/login">Đăng Nhập</Link>
                    </div>
                </li>
            </ul>
            
        </div>
    );
};

export default Navbar;