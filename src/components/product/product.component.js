import React from 'react'

import './product.styles.scss'
import Badge from '../badge/badge.component'
import ProductImage from '../productImage/productImage.component'

export default function Product({ products }) {

    return(
        <React.Fragment>
            {products.map(product => (
                <article key={product.index} className="product-wrapper">
                    <ProductImage productImage={product.productImage}/>
                    <div className="details-wrapper">
                        <Badge isSale={product.isSale} isExclusive={product.isExclusive}/>
                        <div className="product-details">
                            <h2>{product.productName}</h2>
                            <h1>{product.price}</h1>
                        </div>
                    </div>
                </article>
            ))}
        </React.Fragment>
    )
}