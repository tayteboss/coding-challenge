import React from 'react';

import './gallery.styles.scss'
import Product from '../product/product.component'
import ErrorBoundary from '../error-boundary/error-boundary.component';

export default function Gallery(props) {

    let { products, filter } = props

    if (filter) {
        products = products.filter(product => {
            return product.size.includes(filter)
        })
    }

    return(
        <main>
            <Product products={products}/>
        </main>
    )
}