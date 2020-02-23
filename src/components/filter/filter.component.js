import React from 'react'

export default function Filter({ products, handleFilterChange }) {

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
        <select onChange={handleFilterChange} name="sizefilter" type="text">
            <option value="">Filter by size</option>
            {
                sizeData.map((size, index) => (
                    <option key={index} value={size}>{size}</option>
                ))
            }
        </select>
    )
}