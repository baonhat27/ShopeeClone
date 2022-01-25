import React from 'react';
import "./Container.css"
import "./../../grid.css"
import Category from './Category/Category';
import ProductPage from './ProductPage/ProductPage';

function Container(props) {
    return (
        <div className='content'>
            <div className='grid wide'>
                <div className='row'>
                    <Category/> 
                    <ProductPage/>
                </div>
            </div>
        </div>
    );
}

export default Container;