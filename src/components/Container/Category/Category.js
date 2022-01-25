import React from 'react';
import './Category.css'
import './../../../grid.css'

function Category(props) {
    return (
        <div className='category col l-2 m-0 c-0 '>
            <div className='category__heading'>
                <i className="fal fa-list category__heading--icon"></i>
                Danh mục
            </div>
            <ul className='category__list'>
               <li className='category__item'>Giày đá bóng</li> 
               <li className='category__item'>Giày da</li> 
               <li className='category__item'>Giày thể thao</li> 
            </ul>
        </div>
    );
}

export default Category;