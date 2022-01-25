import React from 'react';
import './../../../../grid.css'
import './Product.css'

function Product(props) {
    return (
        <div className='col l-2-4 card'>
            <div className='product'>
                <div 
                    className='product__img'
                    style={{backgroundImage:`url("https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/87c28c4fdab04862bdc5ad4a00c3bd35_9366/Giay_Bong_DJa_San_Co_Tu_Nhien_Predator_Freak.1_trang_FY6263_01_standard.jpg")`}}
                >
                </div>
                <h4 className='product__name'>
                    Giày đá bóng chính hãng Adidas Predator
                </h4>
                <div className='product__price'>
                    2.300.000đ
                </div>
            </div>
                
        </div>
    );
}

export default Product;