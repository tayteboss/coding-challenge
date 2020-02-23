import React, { useState, useEffect } from 'react';

import './header.styles.scss'

export default function Header({ products, handleChange } = props) {

    function filterSizesData() {
        let allSizeData = products
            .map(product => {
                return product.size
            })
            .flat(1)

        return [...new Set(allSizeData)]
    }

    function orderFilteredSizeData(filterSizesDataCallBack, fromIndex, toIndex) {
        let allSizeData = filterSizesDataCallBack()
        let mSize = allSizeData[fromIndex]
        allSizeData.splice(fromIndex, 1)
        allSizeData.splice(toIndex, 0, mSize)
        return allSizeData

    }

    var sizeData = orderFilteredSizeData(filterSizesData, 4, 2)

    return(
        <header className="header">
            <h1>Women's tops</h1>
            <div className="header__filter">
                <select onChange={handleChange} name="sizefilter" type="text">
                    <option value="">Filter by size</option>
                    {
                        sizeData.map((size, index) => (
                            <option key={index} value={size}>{size}</option>
                        ))
                    }
                </select>
            </div>
        </header>
    )
}