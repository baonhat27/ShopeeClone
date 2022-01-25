import React from 'react';
import './Filter.css'


function Filter(props) {
    return (
        <div className='filter__label'>
            Sắp xếp theo
            <button className='filter__btn' >Phổ biến</button>
            <button className='filter__btn filter__btn--active ' >Mới nhất</button>
            <button className='filter__btn' >Bán chạy</button>

            <div className='filer__select'>
                <span className='filer__select__label'>Giá</span>
                <i className="far fa-chevron-down down__btn"></i>
                <div className='filer__select__list'>
                    <div className='filer__select__item'>Giá: Thấp đến cao</div>
                    <div className='filer__select__item'>Giá: Cao đến thấp</div>
                </div>
            </div>
        </div>
    );
}

export default Filter;