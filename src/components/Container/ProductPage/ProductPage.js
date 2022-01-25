import React from 'react';
import './ProductPage.css'
import './../../../grid.css'
import Product from './Product/Product';
import Filter from './Filter/Filter';
function ProductPage(props) {
    return (
        <div className='productpage col l-10 m-12 c-12'>
            <div className='row'>
                <Filter/>   
            </div>
            <div className='row'>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
            </div>
        </div>
    );
}

export default ProductPage;