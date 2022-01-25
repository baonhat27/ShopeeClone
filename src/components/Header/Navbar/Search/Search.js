import React from 'react';
import "./Search.css"

function Search(props) {
    return (
        <div className='search'>
            <div className='search__input--wrap'>
                <input
                    type={"text"}
                    placeholder='Tìm kiếm'
                    className='search__input'
                />
                <div className='search__history'>
                    <h3 className='search__history--header'>Lịch sử tìm kiếm</h3>
                    <ul className='search__history--list'>
                        <li className='search__history--item'>Giay</li>
                        <li className='search__history--item'>Quần áo</li>
                    </ul>
                </div>
            </div>
            <div className='search__icon'>
                <i className="fal fa-search icon"></i>
            </div>
        </div>
    );
}

export default Search;